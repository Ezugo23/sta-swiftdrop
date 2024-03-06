import { Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import AllUsers from "../allUserComponent/Component/AllUsers.jsx";
import EditUsers from '../allUserComponent/Component/EditUsers.jsx';
import UserChangePass from "../allUserComponent/Component/UsersChangePass.jsx";
import PayMethod from "../allUserComponent/Component/PayMethod.jsx";
import AllUsersEditAddress from "../allUserComponent/Component/AllUsersEditAddress.jsx";
import AddAddress from "../allUserComponent/Component/AddAddress.jsx";
import OrderHistory from "../allUserComponent/Component/OrderHistory.jsx";
export default function allUserSection() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Check if the token is present in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        // If token is present, set authentication to true
        setAuthenticated(true);
      } else {
        // If token is not present, redirect the user to the login page
        navigate('/');
      }
    }, [history]);

    return (

        <>

            <div className="">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Users</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/all-user" className="text-decoration-none" style={{ color: "#F8B602" }}>All Users</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>
                {authenticated && (
              <>
                    <Routes>
                    <Route path="" element={<AllUsers/>} />
                    <Route path="EditUsers/:userId" element={<EditUsers/>} />
                    <Route path="OrderHistory/:userId" element={<OrderHistory />} />
                    <Route path="PayMethod/:userId" element={<PayMethod/>} />
                    <Route path="UsersChangePass/:userId" element={<UserChangePass />} />
                    <Route path="AllusersEditAddress/:userId" element={<AllUsersEditAddress />} />
                    <Route path="AddAddress/:userId" element={<AddAddress />} />
                    </Routes>
                    </>
                )}
                </div>
            </div>

        </>

    )

}