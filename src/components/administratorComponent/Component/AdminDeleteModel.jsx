import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeleteModal({ setShow, handleDelete }) {
  return (
    <Modal show={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this user?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
        <Button variant="primary" onClick={handleDelete}>Delete User</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;