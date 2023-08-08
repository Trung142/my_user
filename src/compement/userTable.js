import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { UseCampaign } from '../reviceAPI/Userservice';
import ModaleUser from './ModalUser';
import ReactPaginate from 'react-paginate';
import EditUser from './Edituser';
import _, { debounce } from 'lodash';
import { CSVLink } from "react-csv";
import DeleteUser from './DeleteUser';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
const UserTable = (props) => {
    const [listUser, setlistUser] = useState([]);
    //pagination phan trang
    const [totalUser, setTotalUser] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [iShowModal, setShowModal] = useState(false);
    //Edit user
    const [isEditUser, setEditUser] = useState(false);
    const [dataEditUser, setdataEditUser] = useState({});
    // Delete user
    const [isDeleteUser, setDeleteUser] = useState(false);
    const [isdataDeleteUser, setdataDeleteUser] = useState({});
    // sort Header
    const [sortBy, setsortBy] = useState("desc");
    const [sortFielBy, setsortFielBy] = useState("id");
    // scv link react
    const [dataExport, setdataExport] = useState([]);
    const handleClose = () => {
        setShowModal(false);
        setEditUser(false)
        setDeleteUser(false);
    }

    //1.list user call API use axios
    useEffect(() => {
        //call API
        getUser(1);
    }, [])
    // call IPI to request.in
    const getUser = async (page) => {
        let res = await UseCampaign(page);
        if (res && res.data) {
            setTotalUser(res.per_page)
            setlistUser(res.data);
            setTotalPage(res.total_pages);
        }
    }
    const handlePageClick = (event) => {
        getUser(+event.selected + 1);
    }

    // updextUser
    const handleUpdestUser = (user) => {
        setlistUser([user, ...listUser]);
    }
    // EditUser
    const handleEdituser = (user) => {
        setEditUser(true);
        setdataEditUser(user)

    }
    const handleUpdestUsertable = (user) => {
        let ClonlistUser = _.cloneDeep(listUser);
        const index = listUser.findIndex((item) => item.id === user.id)
        ClonlistUser[index].first_name = user.first_name;
        ClonlistUser[index].last_name = user.last_name;
        setlistUser(ClonlistUser);
    }
    //Delete User
    const handleDeleteUser = (user) => {
        setDeleteUser(true);
        setdataDeleteUser(user);
    }
    const handleDeletelistUser = (user) => {
        let ClonlistUser = _.cloneDeep(listUser);
        ClonlistUser = listUser.filter((item) => item.id !== user.id);
        setlistUser(ClonlistUser)
    }
    // handle sort
    const handleSort = (sortBy, sortFielBy) => {
        setsortBy(sortBy);
        setsortFielBy(sortFielBy);
        let ClonlistUser = _.cloneDeep(listUser);
        ClonlistUser = _.orderBy(ClonlistUser, [sortFielBy], [sortBy]);
        setlistUser(ClonlistUser);
    }
    // search user
    const handleSearchuser = debounce((event) => {
        let res = event.target.value;
        if (res) {
            let ClonlistUser = _.cloneDeep(listUser);
            ClonlistUser = ClonlistUser.filter((item) => item.email.includes(res));
            setlistUser(ClonlistUser);
        } else {
            getUser(1);
        }
    })
    // CSV Export
    const handleExport = (event, done) => {
        let result = [];
        if (listUser && listUser.length > 0) {
            result.push(["Id", "First Name", "Last Name", "Email"]);
            let arr = [];
            listUser.map((item, index) => {
                arr[0] = item.id;
                arr[1] = item.first_name;
                arr[2] = item.last_name;
                arr[3] = item.email;
                result.push(arr);
            })
            setdataExport(result);
            done();
        }

    }
    // import 
    const handleImportSCV = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            if (file.type !== "text/csv") {
                toast.error("Only  accep file csv !");
                return;
            }
            // Parse local CSV file
            Papa.parse(file, {
                complete: function (results) {
                    let FileCSV = results.data;

                    if (FileCSV.length > 0) {
                        if (FileCSV[0] && FileCSV[0].length === 3) {
                            if (FileCSV[0][0] !== "email" || FileCSV[0][1] !== "first_name" || FileCSV[0][2] !== "last_name") {
                                toast.error("Wrong format Header Csv file !");
                            } else {
                                let result = [];
                                FileCSV.map((item, index) => {

                                    if (index > 0 && item.length === 3) {
                                        let Obj = {};
                                        Obj.email = item[0];
                                        Obj.first_name = item[1];
                                        Obj.last_name = item[2];
                                        result.push(Obj);
                                    }
                                })
                                setlistUser(result);
                            }
                        } else {
                            toast.error("Wrong format Csv file!");
                        }

                    } else {
                        toast.error("NOt found data on file!")
                    }
                }
            });



        }

    }
    return (
        <>
            <div className='add-new my-3 d-sm-flex '>
                <span><b>List User:</b></span>
                <div className='group-btns mt-sm-0 mt-3'>
                    <label htmlFor="test" className="btn btn-success">
                        <i className="fa-solid fa-file-arrow-up"></i> Import
                    </label>
                    <input
                        type="file"
                        id="test" hidden
                        onChange={(event) => handleImportSCV(event)}
                    />
                    <CSVLink
                        data={dataExport}
                        filename={"my-file.csv"}
                        className="btn btn-info text-white"
                        asyncOnClick={true}
                        onClick={(event, done) => handleExport(event, done)}
                    >
                        <i className="fa-solid fa-file-export"></i> Export
                    </CSVLink>
                    <button className='btn btn-primary' onClick={() => setShowModal(true)}>
                        <i className="fa-solid fa-user-plus"></i> Add New User
                    </button>
                </div>

            </div>
            <div className=' col-3 my-3'>
                <input type="text" placeholder='Search user by emai !'

                    onChange={(event) => handleSearchuser(event)}
                />
            </div>
            <div className='container-table'>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th className='sort-Header'>
                                <span>ID</span>

                                <span className='d-flex'>
                                    <i className="fa-solid fa-arrow-down"
                                        onClick={() => handleSort('desc', 'id')}
                                    ></i>
                                    <i className="fa-solid fa-arrow-up"
                                        onClick={() => handleSort('esc', 'id')}
                                    ></i>
                                </span>
                            </th>
                            <th>Email</th>
                            <th className='sort-Header'>
                                <span>First Name</span>
                                <span className='d-flex'>
                                    <i className="fa-solid fa-arrow-down"
                                        onClick={() => handleSort('desc', 'first_name')}
                                    ></i>
                                    <i className="fa-solid fa-arrow-up"
                                        onClick={() => handleSort('esc', 'first_name')}
                                    ></i>
                                </span>
                            </th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.length > 0 && listUser.map((item, index) => {
                            return (
                                <tr key={`users- ${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td className='d-flex'>
                                        <button className='btn btn-warning mx-3 ' onClick={() => handleEdituser(item)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => handleDeleteUser(item)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </div>


            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={totalUser}
                pageCount={totalPage}
                previousLabel="< previous"



                //marginPagesDisplayed={2}


                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}

            />
            <ModaleUser
                show={iShowModal}
                handleClose={handleClose}
                handleUpdestUser={handleUpdestUser}
            />
            <EditUser
                show={isEditUser}
                handleClose={handleClose}
                dataEditUser={dataEditUser}
                handleUpdestUsertable={handleUpdestUsertable}

            />
            <DeleteUser
                show={isDeleteUser}
                handleClose={handleClose}
                isdataDeleteUser={isdataDeleteUser}
                handleDeletelistUser={handleDeletelistUser}
            />
        </>
    )
}
export default UserTable;