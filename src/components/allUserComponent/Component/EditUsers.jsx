import React, { useEffect, useState } from 'react';
import '../Style/EditUsers.css';
import SideNav from './SideNav';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = () => {
  const [lastname, setLastName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const { userId } = useParams();
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swifdropp.onrender.com/api/v1/user/profile/${userId}`);
        setFirstName(response.data.user.firstname);
        setImage(response.data.user.image);
        setLastName(response.data.user.lastname);
        setEmail(response.data.user.email);
        setPhoneNumber(response.data.user.phoneNumber);
        setAddress(response.data.user.address);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `https://swifdropp.onrender.com/api/v1/admin/${adminId}`,
        {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          phoneNumber: phoneNumber.toString()
        }
      );
  
      console.log("Admin user updated successfully", response.data);
      // Redirect or perform any other action after successful update
      navigate('/administrators');
    } catch (error) {
      console.error("Error updating admin user", error);
      // Display an error message to the user
      alert("Failed to update admin user. Please try again later.");
    }
  };

  return (
    <div className=''>
      <h5 className='my-5'>Edit Users</h5>

      <div className='d-flex gap-5 '>
        <div className="sidediv">
          <SideNav userId={userId} />
          <div className='bottomsidediv'>
            <div className='bottomsidediv2'>
              <img src="" alt="" className='bottomsidedivimg'/>
              <button className='bottomsidedivchangephoto'>Change Photo</button>
            </div>
            <hr />
            <div className="bottomsidediv3">
              <button className='bottomsidedivsavesign'>Save Signature</button>
            </div>
          </div>
        </div>

        <div className='bg-white border rounded'>
          <div className='seconddiv'>
            <h4>Users' Profile Information</h4>
            <hr />
            <form>
              <label htmlFor="" className='py-3'>FirstName</label>
              <input type="text" placeholder='' className='w-100 p-2' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
              <label htmlFor="" className='py-3'>LastName</label>
              <input type="text" placeholder='' className='w-100 p-2' value={lastname} onChange={(e) => setLastName(e.target.value)} />
              <label htmlFor="" className='py-3'>Email</label>
              <input type="text" placeholder='' className='w-100 p-2' value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="" className='py-3'>Phone Number</label>
              <input type="number" placeholder='' className='w-100 p-2' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <div className='btndiv' style={{marginTop:'20px'}}>
                <div>
                  <button className='btn1'>Delete</button>
                </div>
                <div>
                  <button type="button" className='btn2' onClick={handleUpdate}>Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;