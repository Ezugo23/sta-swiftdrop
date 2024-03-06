import React, { useEffect, useState } from "react";
import "../Style/Allusers.css";
// import dele from "../assets/delete-bin-line.jpg";`
// import susp from "../assets/Suspend.jpg";
// import edit from "../assets/Edit (2).jpg";`
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteModel from "./AdminDeleteModel"
import Search from "./AdminSearch";
import { Pencil, Trash2Icon, ThumbsUp, ThumbsDown } from 'lucide-react';

const AllUsers = (_id) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);

  const getData = async () => {
    try {
      let data = await fetch("https://swifdropp.onrender.com/api/v1/admin/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });

      const respond = await data.json();
      console.log(respond.admins);
      setData(respond.admins);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://swifdropp.onrender.com/api/v1/admin/${userId}/delete`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      getData(); // Refresh data after deletion
      setShow(false); // Hide modal after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const openDeleteModal = (userId) => {
    setShow(true);
    setUserId(userId);
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
                <th>NAME,ADDRESS</th>
                <th>PHONE</th>
                <th>EMAIL</th>
                <th>TOTAL PAID</th>
                <th>ACTION</th>
              </tr>

              {data.map((datum) => {
                const { address, username, email, image, phoneNumber, _id } =
                  datum;
                return (
                  <tr key={_id}>
                    <td>03DR456</td>
                    <td className="tableimg">
                      {" "}
                      <img src={image} alt="" className="rounded-5 w-25" style={{width:'70px', height:'70px'}} />
                    </td>
                    <td>
                      <h6>{username}</h6>
                    </td>
                    <td>{`${phoneNumber}`}</td>
                    <td>{email}</td>
                    <td>$235.55</td>
                    <td style={{display:'flex', justifyContent:'space-between'}}>
                      <Link to={`/administrators/AdminEditUsers/${_id}`}  style={{marginTop:'10px', cursor:'pointer'}}>
                        <Pencil size={20}/>
                      </Link>
                      <p className="" onClick={() => openDeleteModal(datum._id)} style={{ marginTop: '10px', cursor: 'pointer' }}>
                        <Trash2Icon size={20} />
                      </p>
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
      {show && <DeleteModel setShow={setShow} handleDelete={handleDelete} />}
      </div>
    </>
  );
};

export default AllUsers;