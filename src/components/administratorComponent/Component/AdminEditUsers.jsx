import React, { useEffect, useState } from 'react'
import '../Style/EditUsers.css'
// import Editimg from '../assets/EditUsers/Bitmap.jpg'
// import signBox from '../assets/EditUsers/Signature box.jpg'
import SideNav from './AdminSideNav'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import ProfilePictureForm from './AdminProfilPictureForm'

 


const EditUsers = () => {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [username, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const { adminId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swifdropp.onrender.com/api/v1/admin/${adminId}`);
        const adminData = response.data.admin;
        setLastName(adminData.lastname);
        setFirstName(adminData.firstname);
        setUserName(adminData.username); 
        setEmail(adminData.email);
        setPhoneNumber(adminData.phoneNumber);
        // Set other state variables as needed
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchData();
  }, [adminId]);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `https://swifdropp.onrender.com/api/v1/admin/${adminId}`,
        {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          phoneNumber: phoneNumber,
          // Add other fields you want to update here
        }
      );

      console.log("Admin user updated successfully", response.data);
      // Redirect or perform any other action after successful update
      navigate('/administrators');
    } catch (error) {
      console.error("Error updating admin user", error);
      // Handle error
    }
  };
  

  return (
    <div className=''>
      <h5 className='my-5'>Edit Users</h5>

      <div className='d-flex gap-5'>
      <div className="sidediv">
          <SideNav adminId={adminId}/>
           <div className='bottomsidediv'>
           <ProfilePictureForm adminId={adminId}/>
           <hr />
            <div className="bottomsidediv3">
            {/* <img src={signBox} alt="" className='bottomsidedivsign'/> */}
            <button className='bottomsidedivsavesign'>Save Signature</button>
            </div>


          </div>
        </div>        

        <div className='bg-white border rounded'>
          <div className='seconddiv'>
          <h4>Users' Profile Information</h4>
          <hr />
          <form action="">
            <label htmlFor="" className='py-3'>UserName</label>
            <input type="text"  placeholder='' className='w-100 p-2' value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <label htmlFor="" className='py-3'>FirstName</label>
            <input type="text"  placeholder='' className='w-100 p-2' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
            <label htmlFor="" className='py-3'>LastName</label>
            <input type="text"  placeholder='' className='w-100 p-2' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
            <label htmlFor="" className='py-3'>Email</label>
            <input type="text"  placeholder='' className='w-100 p-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="" className='py-3'>Phone Number</label>
            <input type="number"  placeholder='' className='w-100 p-2' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
          </form>
          <div className='btndiv'>
          <div>
          <button className='btn1'>Delete</button>
          </div>
          <div>
          <button className='btn2'onClick={handleUpdate} >Save</button>
          </div>
          </div>
          </div>
        </div>
      </div>

        </div>
  
  )
}

export default EditUsers