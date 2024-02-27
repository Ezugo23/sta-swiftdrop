import React, { useEffect, useState } from 'react'
// import dele from '../assets/delete-bin-line.jpg'
// import { Icon } from '@iconify/react';
// import deleteFill from '@iconify/icons-mingcute/delete-fill';
// import edit from '../assets/Edit (2).jpg'
// import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import '../Style/AllUsersEditAddress.css'
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';

const AllUsersEditAddress = () => {
  const [addressData, setAddressData] = useState([]);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`https://swifdropp.onrender.com/api/v1/location/${userId}`);
      setAddressData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=''>
        <h5 className='my-5'>All Users / Edit Address</h5>
        <div className='d-flex gap-5 mb-5'>
          <SideNav userId={userId} />
          <div className='w-100'>
            <div className='border-none rounded p-2' style={{ backgroundColor: 'white', width: '100%' }}>
              <h4>Address List</h4>
              <hr />
              <table className='tt w-100'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>POSTAL CODE</th>
                    <th>ADDRESS</th>
                    <th>STATE</th>
                    <th>COUNTRY</th>
                    <th>ACTIVE</th>
                  </tr>
                </thead>
                <tbody>
                  {addressData.map((address, index) => (
                    <tr key={index} className='tr'>
                      <td className='td'>{index + 1}</td>
                      <td className='td'>{address.code}</td>
                      <td className='td'>{address.address}</td>
                      <td className='td'>{address.state}</td>
                      <td className='td'>{address.country}</td>
                      <td className='tdr'>
                        <input type='radio' name='btn' /> <label htmlFor=''>Primary</label>
                      </td>
                      <td className='td'>
                        <button className='btn'>Edit</button>
                        <button className='btn'>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link to='/all-user/AddAddress'>
                <button className='top-btn my-3'>
                  <p className='d-flex align-items-center'>+</p>
                  <span className='span'>Add a New User</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsersEditAddress;