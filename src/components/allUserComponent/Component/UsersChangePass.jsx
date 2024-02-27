import React, { useState } from 'react'
import SideNav from './SideNav'
import '../Style/UsersChangePass.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UsersChangePass = () => {
  const [newPassword, setNewPassword] = useState('');
  const { userId } = useParams();

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
       
       <form action="">
        <label htmlFor="">New Password</label>
        <input type="password"
                id="newPassword"
                className="w-100 p-2"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}/>
        </form>
       <div><button className='tbn' onClick={passChange} >CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass