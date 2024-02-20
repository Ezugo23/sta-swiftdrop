import React from 'react'
import '../Style/Navbar.css'
// import arrow from '../assets/download-removebg-preview.png'
// import { FaSearch } from "react-icons/fa"
// import notify from '../assets/images__1_-removebg-preview.png'
// import topnavimg from '../assets/top-nav/top-nav image.jpg'
// import menuline from '../assets/top-nav/menu-2-line.png'

const Navbar = () => {
  return (
    <div className='sticky-top navbg'>

        <div className='d-none d-lg-block  container'>

       <div className='navflex'>
       <div className='rightdiv '>
                <p>Application</p>
                <p>Users</p>
                <p>All Users</p>
                
            </div>

        {/* <div className='leftdiv'>
                <img src={notify} alt="" />
                <img src={topnavimg} alt="" className='rounded-pill '/>
                <img src={menuline} alt="" />
            </div> */}
       </div>
        </div>


        <div className="d-lg-none">
        <div className="collapse" id="navbarToggleExternalContent">
 
</div>
<nav className="navbar navbar-dark bg-primary">
<div className='navflex'>
  <div className="container-fluid d-flex justify-content-left">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>

</div>
</nav>
        </div>
      
    </div>
  )}
export default Navbar