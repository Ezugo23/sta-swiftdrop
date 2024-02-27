import "../Style/SideNav.css";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

const SideNav = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swifdropp.onrender.com/api/v1/user/profile/${userId}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { firstname, lastname, image } = userData;

  return (
    <div>
      <div className="topsidediv">
        <div className="topsidehead">
          <div className="d-flex gap-2 align-items-center">
            <img src={image} alt="" className="topsideimg"/>
            <h5>{firstname} {lastname}</h5>
          </div>
          <h1>...</h1>
        </div>
        
        <Link to={`/all-user/EditUsers/${userId}`} className="link">
          <p className="py-1 rounded">Personal Information</p>
        </Link>
        
        <Link to={`/all-user/UsersChangePass/${userId}`} className="link">
          <p className="py-1 rounded">
            {/* <img src={cp} alt="" className="imgw" /> */}
            Change Password
          </p>
        </Link>
        <Link to={`/all-user/AllusersEditAddress/${userId}`} className="link">
          <p className="py-1 rounded">
            {/* <img src={aa} alt="" className="imgw" /> */}
            Additional Address
          </p>
        </Link>
        <Link to={`/all-user/PayMethod/${userId}`} className="link">
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
        <Link to={`/all-user/OrderHistory/${userId}`} className="link">
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