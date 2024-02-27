/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function FoodSellListComponent() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); // Removed dependencies as they were not defined

  const fetchData = async () => {
    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/restaurant/`);
      const data = await response.json();
      setTableData(data.restaurants.map(restaurant => ({
        ...restaurant,
        roundedAverageRating: Math.round(restaurant.averageRating), // Add roundedAverageRating
      })));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStarIcons = (rating) => {
    const starColor = rating >= 4 ? 'gold' : 'gray';
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
    ));
    return stars;
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/restaurant/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`Data with ID ${id} deleted successfully`);
        // Refresh data after deletion
        fetchData();
      } else {
        console.error(`Failed to delete data with ID ${id}`);
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const toggleRestaurantStatus = async (id, currentStatus) => {
    try {
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/${id}/toggle-restaurant-status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: !currentStatus, // Toggle the status
        }),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to toggle restaurant status. Server response: ${errorMessage}`);
      }
  
      console.log(`Restaurant status toggled successfully`);
      fetchData();
    } catch (error) {
      console.error('Error toggling restaurant status:', error);
    }
  };
  




  const getStatusStyle = (approved, isActive) => {
    if (!approved) {
      return { borderColor: 'orange', color: 'orange', borderRadius: '8px' };
    } else if (isActive) {
      return { borderColor: 'green', color: 'green', borderRadius: '8px' };
    } else {
      return { borderColor: 'red', color: 'red', borderRadius: '8px' };
    }
  };
  
  const getStatusText = (approved, isActive) => {
    if (!approved) {
      return 'Pending';
    } else if (isActive) {
      return 'Active';
    } else {
      return 'Suspended';
    }
  };

  return (
    <>
      <div>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div className="col-12">
            <div className="card custom-card w-100">
              <div className="card-body position-relative">
                <div className="row between-flex">
                  <div className="col-md-6">
                    <p>All Reviews</p>
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="input-group input-flex">
                      <input
                        className="form-control bg-white border text-dark rounded-pill"
                        type="text"
                        placeholder="search"
                        id="example-search-input"
                      />
                      <span className="input-group-append">
                        <button className="btn ms-n5" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM22.314 20.899L19.485 18.071L18.071 19.485L20.899 22.314L22.314 20.899Z" fill="black" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="table-responsive index table-custom mt-3" id="printMe">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">SELLER NAME</th>
                        <th className="text-center">IMAGE</th>
                        <th className="text-center">BALANCE</th>
                        <th className="text-center">TOTAL SOLD</th>
                        <th className="text-center">WITHDRAW</th>
                        <th className="text-center">RATING</th>
                        <th className="text-center">STATUS</th>
                        <th className="text-right no-print">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((data) => (
                        <tr key={data._id}>
                          <td className="text-center">{data._id}</td>
                          <td className="text-start">
                            <strong>{data.restaurantName}</strong>
                            <br />
                            {data.address}
                          </td>
                          <td className="text-center">
                            <img src={data.image} alt={data.restaurantName} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                          </td>
                          <td className="text-center">$345.45</td>
                          <td className="text-center">356</td>
                          <td className="text-center">$345.55</td>
                          <td className="text-center">{renderStarIcons(data.roundedAverageRating)}</td>
                          <td className="text-center">
                          <button className={`btn rounded-pill`} style={getStatusStyle(data.approved, data.isActive)}>
        {getStatusText(data.approved, data.isActive)}
      </button>
                          </td>
                          <td className="text-right no-print">
                            <div className="btn-group">
                              <Link
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                                to={`/food-seller-list/${data._id}`}
                                className="btn btn-sm"
                              >
                                <span>👁️</span>
                              </Link>
                              <Link 
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                                to={`/edit-food-seller-list/${data._id}`} className="btn btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M4.82362 11.7455H1.99792V9.1225L9.61325 2.0536C9.87331 1.81227 10.2949 1.81227 10.5549 2.0536L12.4389 3.80243C12.6989 4.04383 12.6989 4.43514 12.4389 4.67654L4.82362 11.7455ZM4.27153 10.5091L11.0258 4.23949L10.0841 3.36538L3.32986 9.63498V10.5091H4.27153ZM13.9853 12.9818H1.99792V14.2182H13.9853V12.9818Z" fill="black" />
                                </svg>
                              </Link>
                              <button   className="btn btn-sm"
                             onClick={() => toggleRestaurantStatus(data._id,data.isActive)}
                              
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.3334 5.378L10.624 1.66667H5.37735L1.66669 5.37733V10.624L5.37735 14.3333H10.624L14.3334 10.6247V5.378ZM5.92935 3H10.0714V3.00067L13.0007 5.92933V10.072L10.0714 13.0013H5.92935L3.00069 10.072V5.93L5.92935 3ZM7.33335 10H8.66669V11.3333H7.33335V10ZM8.66669 4.66667H7.33335V8.66667H8.66669V4.66667Z" fill="black"/>
                                </svg>
                              
                            </button>
                              {/* <Link
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Suspend"
                                to="/edit-food-seller-list" className="btn btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M14.3334 5.378L10.624 1.66667H5.37735L1.66669 5.37733V10.624L5.37735 14.3333H10.624L14.3334 10.6247V5.378ZM5.92935 3H10.0714V3.00067L13.0007 5.92933V10.072L10.0714 13.0013H5.92935L3.00069 10.072V5.93L5.92935 3ZM7.33335 10H8.66669V11.3333H7.33335V10ZM8.66669 4.66667H7.33335V8.66667H8.66669V4.66667Z" fill="black"/>
                                </svg>
                              </Link> */}
                            
                              
                              <button
                                onClick={() => deleteData(data._id)}
                                className="btn btn-sm"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11.3223 4.32727H14.6524V5.56364H13.3203V13.6C13.3203 13.9414 13.0221 14.2182 12.6543 14.2182H3.33008C2.96225 14.2182 2.66406 13.9414 2.66406 13.6V5.56364H1.33203V4.32727H4.66211V2.47273C4.66211 2.13131 4.9603 1.85454 5.32813 1.85454H10.6563C11.0241 1.85454 11.3223 2.13131 11.3223 2.47273V4.32727ZM11.9883 5.56364H3.9961V12.9818H11.9883V5.56364ZM7.32618 7.41818H5.99414V11.1273H7.32618V7.41818ZM8.65821 7.41818H9.99024V11.1273H8.65821V7.41818ZM5.99414 4.32727V3.09091H9.99024V4.32727H5.99414Z" fill="black" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}