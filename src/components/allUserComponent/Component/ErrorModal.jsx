import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ErrorModal({ setShowModal }) {
  return (
    <div className="modal show" style={{ display: 'block', position: 'absolute' }}>
      <Modal show={true} onHide={() => setShowModal(false)}> {/* Control modal visibility */}
        <Modal.Header closeButton>
          <Modal.Title>Not Authorized</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are not authorized to perform this action as a superadmin.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button> {/* Close modal */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ErrorModal;
