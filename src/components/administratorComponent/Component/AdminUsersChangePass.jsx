import React, { useEffect, useState } from 'react'
import SideNav from './AdminSideNav'
import '../Style/UsersChangePass.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UsersChangePass = () => {

  const [ currentPassword, setCurrentPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('');
  const { adminId } = useParams()
  // const {adminId} = useParams()

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

  const passChange = async()=>{
    try {
      const response = await axios.post(`https://swifdropp.onrender.com/api/v1/admin/changepassword/${adminId}`, { currentPassword, newPassword }
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
       <SideNav  adminId={adminId}/>

       <div>
       <div className='bg-white rounded-4 p-3'>
       <h4>Change Password</h4>
       <hr />
       
       <form action="">
        <label htmlFor="" className='py-2'>Old Password</label>
        <input type="text" className='w-100 p-2' placeholder='**************************' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}/>
        <div className='text-danger'>{passwordStrength}</div>
        <label htmlFor="" className='py-2'>New Password</label>
        <input type="text" className='w-100 p-2' placeholder='**************************' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
        <div className='text-danger'>{passwordStrength}</div>

        </form>
       <div><button className='tbn' onClick={passChange} >CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass