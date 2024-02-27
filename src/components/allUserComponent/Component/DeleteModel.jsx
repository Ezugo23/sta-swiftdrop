import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeleteModel({ setShow, userId, deleteUser }) {
  const handleDelete = async () => {
    deleteUser();
  };

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this user?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShow(false)} variant="secondary">Cancel</Button>
          <Button onClick={handleDelete} variant="danger">Delete User</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteModel;