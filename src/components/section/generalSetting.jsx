import { Link, useNavigate } from "react-router-dom";
import GeneralSettingComponent from "../generalSettingComponent/hello";
import GeneralSettings from "../generalSettingComponent/GeneralSettings";
import React, { useEffect, useState } from 'react';

export default function generalSetting() {
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
        navigate('/SuperLogin');
      }
    }, [history]);
    return (

        <>

            <div className="height">
                
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/general-setting" className="text-decoration-none" style={{ color: "#F8B602" }}>General Setting</Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="py-2">
                <div className="flex">
                <div className="main">
                {authenticated && (
              <>
                    <GeneralSettingComponent/>
                    <GeneralSettings/>
                    </>
                )}
                    </div>
                    </div>
                </div>
            </div>
        </>

    )

}