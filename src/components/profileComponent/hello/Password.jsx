import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../profileComponent/style/App.css';
import { useState } from 'react';

export default function Password() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'old-password') setOldPassword(value);
    else if (name === 'new-password') setNewPassword(value);
    else if (name === 'confirm-password') setConfirmPassword(value);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setModalMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!newPassword || newPassword.length < 8) {
      setModalMessage('New password must be at least 8 characters long');
      setModalShow(true);
      return;
    }
  
    if (!/[A-Z]/.test(newPassword)) {
      setModalMessage('New password must contain at least one uppercase letter');
      setModalShow(true);
      return;
    }
  
    if (!/[a-z]/.test(newPassword)) {
      setModalMessage('New password must contain at least one lowercase letter');
      setModalShow(true);
      return;
    }
  
    if (!/\d/.test(newPassword)) {
      setModalMessage('New password must contain at least one number');
      setModalShow(true);
      return;
    }
  
    if (!/[^\w\s]/.test(newPassword)) {
      setModalMessage('New password must contain at least one symbol');
      setModalShow(true);
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setModalMessage('New password and confirm password must match');
      setModalShow(true);
      return;
    }
  
    try {
      const response = await fetch('https://swifdropp.onrender.com/api/v1/company/changepassword/6581527dc96a438562098fef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: oldPassword,
          newPassword,
        }),
      });
  
      if (response.ok) {
        setModalMessage('Password changed successfully');
        setModalShow(true);
      } else {
        const errorData = await response.json();
  
        if (errorData.errorDetails && errorData.errorDetails.length > 0) {
          const errorMessage = errorData.errorDetails[0];
          setModalMessage(`Failed to change password. Error: ${errorMessage}`);
        } else {
          const errorMessage = errorData.message || 'Unknown error occurred';
          setModalMessage(`Failed to change password. Error: ${errorMessage}`);
        }
  
        setModalShow(true);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setModalMessage('An error occurred while changing password');
      setModalShow(true);
    }
  };

  const customModalStyle = {
    maxWidth: '400px', 
    color: 'black',
   
  };
    
  return(
    <>
      <div className='company-info-container'style={{ width: '900px', height: '95%', right: '20', border: '1px groove'}}>
        <h3 className='company-info-heading '>Change Password</h3>
      
     <div className='flex-container'>

<Form className='custom-form' onSubmit={handleSubmit}>
    <div className='custom-row align-items-center'>
        <div className='custom-form-group group' id='formBasicEmail'>
            <label >Old Password</label>
            <input type='password' name='old-password' id='old-password' placeholder='Old Password' autoComplete='family-name' className='custom-input-pass' value={oldPassword}
           onChange={handleChange}/>
        </div>
        <div className='custom-form-group group' id='formBasicEmail'>
            <label>New Password</label>
            <input type='password' name='new-password' id='new-password' placeholder='New Password' autoComplete='family-name' className='custom-input-pass' value={newPassword}
                  onChange={handleChange}/>
        </div>
        <div className='custom-form-group group' id='formBasicEmail'>
            <label>Confirm Password</label>
            <input type='password' name='confirm-password' id='confirm-password' placeholder='Confirm Password' autoComplete='family-name' className='custom-input-pass' value={confirmPassword}
                  onChange={handleChange}/>
        </div>
        <div className=''>
            <button type='submit' className='custom-button'>
                Submit
            </button>
        </div>
    </div>
</Form>
     </div>
     </div>
     {/* Modal for displaying success/failure message */}
     <Modal show={modalShow} onHide={handleCloseModal} >
        <Modal.Header closeButton style={customModalStyle}>
          <Modal.Title>Password Change</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}