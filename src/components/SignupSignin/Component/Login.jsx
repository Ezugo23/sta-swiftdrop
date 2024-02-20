import React, { useContext, useState } from 'react'
// import logo from '../assets/Navlogo.jpg'
import { Link } from 'react-router-dom'
import RegisterImage  from '../../../Asset/image container.svg'
import star from '../../../Asset/star 1.svg'
import toast from 'react-hot-toast';
import profile from '../../../Asset/BG.svg'
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyPassword, setCompanyPassWord] = useState('');
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  // localStorage.setItem('done','doings')


  async function login(e) {
    e.preventDefault()

    const regData ={
      email,
      password,
      companyPassword
    }

    try {
      setLoading(true)
      const response = await fetch("https://swifdropp.onrender.com/api/v1/login-admin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(regData),
      });
      const responseData = await response.json();
    console.log(responseData);
    // toast.success(responseData.errorDetails)
    
    if (responseData.token) {
      localStorage.setItem('token', responseData.token)
      navigate('/MainDashboard')
       }

       if(responseData.error){
        toast.error(responseData.error)
      }

       if(responseData.errorDetails){
        toast.error("All field are required")
        setLoading(false)
      }

       if(responseData.message){
        toast.success(responseData.message)
      }

    // if (responseData.errorDetails === "Invalid email format") {
    //  toast.error(responseData.errorDetails)
    //    }


    } catch (error) {
      console.log(error);
      // toast.error(error.error)
    }
  }

  return (
    <div className=''>
        <div className='d-flex justify-content-between gap-5 align-items-center '>
        <div  style={{backgroundColor:'#4CAF50' , color:'#FFFFFF'}}>
         <div className="p-5">
         <img src={RegisterImage} alt="" className="bg-white rounded-5"/>
         <div className="my-5">
         <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
         </div>
          <div className="w-75">
            <p >"We love SwifDrop! we've been getting and managing orders seamlessly, It's definately a restaurant's dream come true"</p>
            <div className="d-flex align-items-center">
            <img src={profile} alt="" />
            <div>
            Fiyin Oladejo
            <p>Founder, Tasty Natives</p>
            </div>
            </div>
          </div>
         </div>
        </div>
           <div className=''>
          
          
           <h3>Welcome Back</h3>
           <p className='w-75'> SwifDrop gives you the blocks and components you need to take your sales to the next level.</p>
           {loading && <Spinner animation="border" variant="success" />}

           <div className='mt-5'>
            <form >
                <label htmlFor="" className='my-2'>Email:</label>
                <input type="text" className='w-100 rounded p-3 ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="" className='my-2'>Password:</label>
                <input type="password" className='w-100 rounded p-3 ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="" className='my-2'>Company:</label>
                <input type="text" className='w-100 rounded p-3 ' value={companyPassword} onChange={(e)=>setCompanyPassWord(e.target.value)}/>
                <div className='d-flex justify-content-between my-4'>
                   <div>
                   <input type="checkbox" /> <label htmlFor="">Remember me</label>
                   </div>
                   <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
                <div className='text-center'>
                <button className="btn btn-success px-5 py-2 text-white my-3" onClick={login}>LogIn</button>
                </div>
            </form>
           <div className="text-center d-flex justify-content-between  justify-content-lg-center ">
           <h5>Don't have an account?</h5>
            <Link to='/Register'><h5>Create free account</h5></Link>
           </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Login