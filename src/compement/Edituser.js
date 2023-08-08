import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PustuserEditUser } from '../reviceAPI/Userservice';
import { toast } from 'react-toastify';
const EditUser = (props) => {
    const { show, handleClose, dataEditUser, handleUpdestUsertable } = props;
    const [name, setname] = useState("");
    const [job, setjob] = useState("");
    const handleEdituser = async () => {
        let res = await PustuserEditUser(name, job)
        if (res && res.updatedAt) {
            setname('');
            setjob('');
            handleUpdestUsertable({
                first_name: name,
                id: dataEditUser.id,
                last_name: job
            })
            toast.success("Edit success !");
            handleClose()
        }
        else {
            toast.error("Edit error!");
        }
    }
    useEffect(() => {
        if (show) {
            setname(dataEditUser.first_name);
            setjob(dataEditUser.last_name);
        }
    }, [dataEditUser])
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='body-add-user'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Name"
                                value={name}
                                onChange={(event) => setname(event.target.value)}
                            />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Job"
                                value={job}
                                onChange={(event) => setjob(event.target.value)}
                            />
                            <label for="floatingPassword">Last name</label>
                        </div>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEdituser()}>
                        Cofirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EditUser;