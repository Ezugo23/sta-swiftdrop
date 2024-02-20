import React, { useEffect, useState } from 'react'
import '../Style/SideNav.css'
// import Editimg from '../assets/EditUsers/Bitmap.jpg'
// import cp from '../assets/EditUsers/Shape.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'



const SideNav = ({adminId}) => {

  const [ data, setData ] = useState([])
  const [image, setImage] = useState('')
  const [name, setName] = useState('')

  const getData = async ()=>{
    try{
    const data = await axios.get(`https://swifdropp.onrender.com/api/v1/admin/${adminId}`)
    // const res = await data.json()
    console.log(data.data.admin);
    setName(data.data.admin.firstname)
    setImage(data.data.admin.image)
    setData(data.data.admin)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [adminId]);

  return (
    <div>
        <div className='topsidediv'>
            <div className='topsidehead'>
           <div className='d-flex gap-2 align-items-center'>
           <img src={image} alt="" className="topsideimg" />
            <h5>
              {name}
            </h5>
           </div>
            <h1>...</h1>
            </div>
           <Link 
           to={`/administrators/AdminEditUsers/${adminId}`}
            className='link'> <p className='linkpara'>Personal Information</p></Link>
            <Link 
            to={`/administrators/AdminUsersChangePass`}
             className='link'><p className='linkpara'>
              {/* <img src={cp} alt="" className='imgw'/> */}
             Change Password</p></Link>
           
            
          </div>
    </div>
  )
}

export default SideNav