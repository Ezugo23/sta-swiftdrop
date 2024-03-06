import React, { useState, useEffect } from 'react'
import SideNav from './SideNav'
import '../Style/UsersChangePass.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UsersChangePass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const { userId } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
        setPasswordStrength("");
    }, 1000);

    // Clear timeout if the component is unmounted or passwordStrength changes
    return () => clearTimeout(timer);
}, [passwordStrength]);

  const checkPasswordStrength = (pass) => {
    // Regular expressions for checking password criteria
    const atLeast8Chars = pass.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSymbol = /[^\w\s]/.test(pass);

    if (atLeast8Chars && hasUpperCase && hasLowerCase && hasNumber && hasSymbol) {
      return 'Strong';
    } else {
      return 'Invalid Password';
    }
  };

  const handlePasswordChange = (e) => {
    const pass = e.target.value;
    const strength = checkPasswordStrength(pass);
    setPasswordStrength(strength);
    setNewPassword(pass);
  };

  const passChange = async () => {
    try {
      const response = await axios.post(
        `https://swifdropp.onrender.com/api/v1/user/changepassword/verifyadmin/${userId}`,
        { newPassword }
      );
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error changing password:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className=''>
      <h5 className='my-5'>Edit Users</h5>
      <div className='d-flex gap-5 mb-5'>
        <SideNav userId={userId} />
        <div>
          <div className='pass'>
            <h4>Change Password</h4>
            <hr />
            <form action=''>
              <label htmlFor='newPassword'>New Password</label>
              <input
                type='password'
                id='newPassword'
                className='w-100 p-2'
                placeholder='Enter new password'
                value={newPassword}
                onChange={handlePasswordChange}
              />
            </form>
            <div className='text-danger'>{passwordStrength}</div>
            <div>
              <button className='tbn' onClick={passChange}>
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersChangePass;