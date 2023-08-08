
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PostuserAddModal } from '../reviceAPI/Userservice';
import { toast } from 'react-toastify';
const ModaleUser = (props) => {
    const { show, handleClose, handleUpdestUser } = props;
    const [name, setname] = useState("");
    const [job, setjob] = useState("");
    const handleSaveuser = async () => {
        let res = await PostuserAddModal(name, job);
        console.log(res)
        if (res && res.id && (res.name || res.job)) {
            setname("");
            setjob("");
            toast.success("Add user success !");
            handleUpdestUser({ first_name: name, id: res.id, last_name: job })
            handleClose();
        }
        else {
            toast.error("error add user !");
            handleClose();
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='body-add-user'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Name"
                                value={name}
                                onChange={(event) => setname(event.target.value)}
                            />
                            <label for="floatingInput">First name</label>
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
                    <Button variant="primary" onClick={() => handleSaveuser()}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModaleUser;