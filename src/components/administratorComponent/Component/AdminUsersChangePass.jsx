import React, { useEffect, useState } from 'react'
import SideNav from './AdminSideNav'
import '../Style/UsersChangePass.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const UsersChangePass = (adminId) => {

  const [ currentPassword, setCurrentPassword ] = useState('')
  const [ newPassword, setNewPassword ] = useState('')
  // const {adminId} = useParams()

  const passData ={
    currentPassword,
    newPassword
  }

  const passChange = async()=>{
    try {
      const data = await axios(`https://swifdropp.onrender.com/api/v1/admin/changepassword/${adminId}`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(passData)
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=''>
        <h5 className='my-5'>Edit Users</h5>
       <div className='d-flex gap-5 mb-5'>
       <SideNav/>

       <div>
       <div className='bg-white rounded-4 p-3'>
       <h4>Change Password</h4>
       <hr />
       
       <form action="">
        <label htmlFor="" className='py-2'>Old Password</label>
        <input type="text" className='w-100 p-2' placeholder='**************************' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}/>
        <label htmlFor="" className='py-2'>New Password</label>
        <input type="text" className='w-100 p-2' placeholder='**************************' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
        <label htmlFor="">Comfirm Password</label>
        <input type="text" className='w-100 p-2' placeholder='**************************'/> 

        </form>
       <div><button className='tbn' onClick={passChange} >CHANGE PASSWORD</button></div>

       </div>
        </div>

       </div>
    </div>
  )
}

export default UsersChangePass