import React, { useState } from 'react'
import SideNav from './SideNav'
import '../Style/AddAddress.css'
import axios from 'axios'


const AddAddress = () => {

 

  const token = localStorage.getItem('token')
  const [code, setCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [userid, setUserid] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault()

    const location = {
      address,
      country,
      state,
      city,
      code,
      userid
    }

    try {
      const data = await axios('https://swifdropp.onrender.com/api/v1/location/',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(location)
      })
    console.log(data);
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <>
    <div className=''>
    <h5 className="my-5">All Users / Edit Address</h5>
    <div className='d-flex gap-5 mb-5'>
        <SideNav/>
        <div>
          <div className='addform'>
          <h4 >Add / Edit Address</h4>
          <hr />
          <label htmlFor="">Postal Zip Code</label>
          <input value={code} onChange={(e)=>setCode(e.target.value)} type="text" className='input'/>
          <label htmlFor="">City</label>
          <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" className='input'/>
          <label htmlFor="">State</label>
          <input value={state} onChange={(e)=>setState(e.target.value)} type="text" className='input'/>
          <label htmlFor="">Country</label>
          <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" className='input'/>
          <label htmlFor="">UserID</label>
          <input value={userid} onChange={(e)=>setUserid(e.target.value)} type="text" className='input'/>
          <label htmlFor="">Address</label>
          <textarea className='w-100'  onChange={(e)=>setAddress(e.target.value)}></textarea>
          <div className='btndi'>
          <button onClick={handleSubmit} className='button'>SAVE</button>
          </div>
          </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default AddAddress