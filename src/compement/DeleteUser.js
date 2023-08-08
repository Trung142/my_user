import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeletelistUser } from '../reviceAPI/Userservice';
import { toast } from 'react-toastify';
const DeleteUser = (props) => {
    const { show, handleClose, isdataDeleteUser, handleDeletelistUser } = props;
    const handleDeleteUser = async () => {
        let res = await DeletelistUser();
        if (res && res.statusCode === 204) {
            handleDeletelistUser(isdataDeleteUser);
            toast.success("Delete a User success!");
            handleClose();
        } else {
            toast.error("Delete user not success ! please again ")
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
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='body-add-user'>
                        This action can't be undone! Do you want sure delete this User ?
                        <br />
                        <b>Email : {isdataDeleteUser.email}</b>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDeleteUser()} >
                        Cofirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteUser;