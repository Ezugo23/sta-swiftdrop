import React, { useEffect, useState } from "react";
import "../Style/Allusers.css";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteModel from "../Component/DeleteModel";
import ErrorModal from "../Component/ErrorModal"
import Search from "../Component/Search";
import {  useParams } from 'react-router-dom';
import { Pencil, Trash2Icon, ThumbsUp, ThumbsDown } from 'lucide-react';

const AllUsers = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [error, setError] = useState(null);

  const { userId } = useParams(); // Extract userId from URL params

  const getData = async () => {
    try {
      let response = await axios.get(
        "https://swifdropp.onrender.com/api/v1/user/profile",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setShowDeleteModal(true);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`https://swifdropp.onrender.com/api/v1/user/profile/delete/${selectedUserId}`);
      setData(data.filter(user => user._id !== selectedUserId)); // Remove deleted user from state
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting user:', error);
      setShowModal(true);
    }
  };

  const handleStatusChange = async (userId, currentStatus, showModal) => {
    try {
      const superadminToken = localStorage.getItem("token");
      if (!superadminToken && showModal) {
        // Show modal if not logged in as superadmin and showModal is true
        setShowModal(true);
        return;
      } else if (!superadminToken) {
        // Display error message if not logged in as superadmin
        setError({ message: "Login as a superadmin" });
        return;
      }
  
      const response = await axios.patch(
        `https://swifdropp.onrender.com/api/v1/${userId}/toggle-user-status`,
        { status: !currentStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${superadminToken}`,
          },
        }
      );
      if (response.status === 200) {
        setData((prevData) => {
          return prevData.map((user) => {
            if (user._id === userId) {
              return { ...user, isActive: !currentStatus };
            }
            return user;
          });
        });
      } else {
        console.log("Failed to toggle user status");
      }
    } catch (error) {
      setError(error); // Set error state with Axios error object
      console.log(error);
    }
  };

  return (
    <> {/* Render error message if error state is not null */}
    <div className="">
    <div className="d-flex justify-content-between my-5">
      <h5 className="">All Users</h5>
      <button className="top-btn">
        <p className="d-flex align-items-center">+</p>
        <span className="span">Add a New User</span>
      </button>
    </div>

    <div className="whitebg mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-3 ">
          <p>Show</p>
          <select name="" id="" className="select">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
          <p>entries</p>
        </div>
        <Search/>
      </div>
      <div className="">
        <table className="tablediv">
          <tbody>
            <tr>
              <th>ID</th>
              <th>IMAGES</th>
              <th>Full Name</th>
              <th>PHONE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>TOTAL PAID</th>
              <th>ACTION</th>
            </tr>
            {data.map((datum) => {
              const { address, firstname, lastname, email, image, phoneNumber, _id } = datum;
              return (
                <tr key={_id}>
                  <td>03DR456</td>
                  <td className="tableimg">
                    <img src={image} alt="" className="rounded-5" style={{width:'2rem'}}/>
                  </td>
                  <td>
                    <h6>{firstname} {lastname}</h6>
                    <div>
                    </div>
                  </td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>
                    {datum.isActive ? (
                      <button className="active" onClick={() => handleStatusChange(_id, true)}>
                        Active
                      </button>
                    ) : (
                      <button className="Suspend" onClick={() => handleStatusChange(_id, true, false)}>
                        Suspended
                      </button>
                    )}
                  </td>
                  <td>$235.55</td>
                  <td style={{display:'flex', justifyContent:'space-between'}}>
                    <Link to={`/all-user/EditUsers/${_id}`} style={{marginTop:'10px'}}>
                    <Pencil size={20}/>
                    </Link>
                    {datum.isActive ? (
                        <p className="" onClick={() => handleStatusChange(_id, true, true)} style={{marginTop:'10px', cursor:'pointer'}}>
                          <ThumbsUp/>
                        </p>
                      ) : (
                        <p className="" onClick={() => handleStatusChange(_id, false, true)} style={{marginTop:'10px', cursor:'pointer'}}>
                          <ThumbsDown/>
                        </p>
                      )}
                    <p className="" onClick={() => handleDelete(_id)} style={{marginTop:'10px', cursor:'pointer'}}> <Trash2Icon size={20}/></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between mt-5">
        <p>Showing 20-30 from {data.length} data</p>
        <p>1</p>
      </div>
    </div>
    {showDeleteModal && <DeleteModel setShow={setShowDeleteModal} userId={selectedUserId} deleteUser={deleteUser} />}
    {/* Display ErrorModal if showModal is true */}
    {showModal && (
     <ErrorModal
     show={showModal}
     setShow={setShowModal}
     errorMessage="Login as a superadmin"
   />
    )}
  </div>
</>
);
};

export default AllUsers;
