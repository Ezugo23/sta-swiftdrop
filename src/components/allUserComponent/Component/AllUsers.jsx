import React, { useEffect, useState } from "react";
import "../Style/Allusers.css";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteModel from "../Component/DeleteModel";
import ErrorModal from "../Component/ErrorModal";
import Search from "../Component/Search";
import {  useParams } from 'react-router-dom';

/*const AllUsers = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

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
    setShow(true);
    setSelectedUserId(userId);
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      // Retrieve the superadmin token from localStorage
      const superadminToken = localStorage.getItem("token");
  
      // Check if the user is authenticated as a superadmin
      if (!superadminToken) {
        console.log("User not authenticated as superadmin");
        return;
      }
  
      // Make a request to toggle the user status
      const response = await axios.patch(
        `https://swifdropp.onrender.com/api/v1/${userId}/toggle-user-status`,
        { status: !currentStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${superadminToken}`, // Include the superadmin token in the request headers
          },
        }
      );
  
      // If the request is successful, update the user's status in the UI
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
      console.log(error);
    }
  };

  return (
    <>
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
              <button className="active" onClick={() => toggleUserStatus(_id, true)}>
                Active
              </button>
            ) : (
              <button className="Suspend"  onClick={() => toggleUserStatus(_id, false)}>
                Suspended
              </button>
            )}
          </td>
          <td>$235.55</td>
          <td>
            <Link to={`/all-user/EditUsers/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
              {datum.isActive ? (
              <button className="btn" onClick={() => toggleUserStatus(_id, true)}>
                Suspend
              </button>
            ) : (
              <button className="btn"  onClick={() => toggleUserStatus(_id, false)}>
                 Activate
              </button>
            )}
            <button className="btn" onClick={() => handleDelete(_id)}>Delete</button>
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
      {show && <DeleteModel setShow={setShow} userId={selectedUserId} />} {/* Pass selected user ID to DeleteModel }
      </div>
    </>
  );
};*/


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
      setShowErrorModal(true);
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
            {error && <div>Error: {error.message}</div>}
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
                      <td>
                        <Link to={`/all-user/EditUsers/${_id}`}>
                          <button className="btn">Edit</button>
                        </Link>
                        {datum.isActive ? (
                          <button className="btn" onClick={() => handleStatusChange(_id, true, false)}>
                            Suspend
                          </button>
                        ) : (
                          <button className="btn" onClick={() => handleStatusChange(_id, false)}>
                            Activate
                          </button>
                        )}
                        <button className="btn" onClick={() => handleDelete(_id)}>Delete</button>
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
        {showModal && <ErrorModal setShow={setShowModal} />}
        {/* Pass selected user ID to DeleteModel */}
      </div>
     
    </>
  );
};

export default AllUsers;
