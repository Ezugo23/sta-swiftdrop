import React, { useEffect, useState } from "react";
import "../Style/SideNav.css";
// import Editimg from "../assets/EditUsers/Bitmap.jpg";
// import cp from "../assets/EditUsers/Shape.jpg";
// import aa from "../assets/locationlogo.png";
// import pm from "../assets/EditUsers/Shape (2).jpg";
// import ich from "../assets/EditUsers/Shape (3).jpg";
// import oh from "../assets/EditUsers/Shape (4).jpg";
import { Link, useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

const SideNav = ({adminId}) => {
  const [ data, setData ] = useState([])
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  // const {adminId} = useParams()


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
  }, []);

  return (
    <div>
      <div className="topsidediv">
        <div className="topsidehead">
          <div className="d-flex gap-2 align-items-center">
            <img src={image} alt="" className="topsideimg" />
            <h5>
              {name}
            </h5>
          </div>
          <h1>...</h1>
        </div>
        
          <Link to={`/all-user/EditUsers/${data._id}`} className="link">
          <p className="py-1 rounded">Personal Information</p>
        </Link>
        
        <Link to={"/all-user/UsersChangePass"} className="link">
          <p className="py-1 rounded">
            {/* <img src={cp} alt="" className="imgw" /> */}
            Change Password
          </p>
        </Link>
        <Link to="/all-user/AllusersEditAddress" className="link">
          <p className="py-1 rounded">
            {/* <img src={aa} alt="" className="imgw" /> */}
            Additional Address
          </p>
        </Link>
        <Link to="/all-user/PayMethod" className="link">
          <p className="py-1 rounded">
            {/* <img src={pm} alt="" className="imgw" /> */}
            Payment Method
          </p>
        </Link>
        <Link to="#" className="link">
          <p className="py-1 rounded">
            {/* <img src={ich} alt="" className="imgw" /> */}
            Invite Code History (Share and Earn)
          </p>
        </Link>
        <Link to="/all-user/OrderHistory" className="link">
          <p className="py-1 rounded ">
            {/* <img src={oh} alt="" className="imgw" /> */}
            Order History
          </p>
        </Link>

        <hr />

        <div className="d-flex justify-content-between pt-4">
          <p>Delivery Review</p>
          <p>74%</p>
        </div>

        <ProgressBar now={74} className="" />

        <hr />

        <div className="d-flex justify-content-between px-4 text-center">
          <div>
            <p>
              <span className="d-block text-success fw-bold">17</span>
              Success Order
            </p>
          </div>
          <div>
            <p>
              <span className="d-block text-danger fw-bold ">$1,125.38</span>
              Total Paid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;