import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodSellListSidebar from './foodSellListSidebar';
import ImageUploadButton from './uploadImage';
import { useNavigate } from 'react-router-dom';


export default function FoodSellerCustomerComponent() {
  const { id } = useParams();
  const navigate = useNavigate(); // Corrected hook name
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch(`https://swifdropp.onrender.com/api/v1/restaurant/byId/${id}`);
        const data = await response.json();

        console.log('API response:', data);

        if (data && data.restaurant) {
          console.log('Restaurant data:', data.restaurant);
          setRestaurant(data.restaurant);
        } else {
          console.error('Invalid API response:', data);
        }
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [id]);



;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Submitting data:', restaurant);
      const response = await fetch(`https://swifdropp.onrender.com/api/v1/restaurant/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ restaurant }),
      });
      console.log('API Response:', response);
      
      if (response.ok) {
        console.log(' successfully updated');
        // redirect to all 
        navigate('/food-seller-list');
   
      } else {
        console.error('Failed to update task');
            }
    } catch (error) {
      console.error('Error updating task:', error);
      
    }
  };
  


  const handleCancel = () => {
  
    console.log('Form submission cancelled');
  };

  return (
    <div className="row">
      <div className="col-12 col-xl-4">
        <FoodSellListSidebar />
      </div>
      <div className="col-12 col-xl-8">
        <form role="form" onSubmit={handleFormSubmit}>
          <div className="card-body">
            <div className="card inner-card mb-3">
              <div className="card-header bg-white">Restaurant Information</div>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-md-4">
                    <ImageUploadButton />
                  </div>
                  <div className="form-group col-md-8">
                    <div className="row">
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="restaurantName">Restaurant Name</label>
                        <input
                          id="restaurantName"
                          type="text"
                          className="form-control"
                          name="restaurantName"
                          placeholder="Enter restaurant name"
                          value={restaurant.restaurantName || ''}
                          onChange={(e) => setRestaurant({ ...restaurant, restaurantName: e.target.value })}
                        />
                      </div>
                      <div className="form-group col-md-12 mb-2">
  <label htmlFor="firstname">First Name</label>
  <input
    id="firstname"
    type="text"
    className="form-control"
    name="firstname"
    placeholder="Enter first name"
    value={restaurant.firstname || ''}
    onChange={(e) => setRestaurant({ ...restaurant, firstname: e.target.value })}
  />
</div>

<div className="form-group col-md-12 mb-2">
  <label htmlFor="lastname">Last Name</label>
  <input
    id="lastname"
    type="text"
    className="form-control"
    name="lastname"
    placeholder="Enter last name"
    value={restaurant.lastname || ''}
    onChange={(e) => setRestaurant({ ...restaurant, lastname: e.target.value })}
  />
</div>
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="address">Address</label>
                        <textarea
                          id="address"
                          className="form-control"
                          placeholder="Enter restaurant address"
                          value={restaurant.address || ''}
                          onChange={(e) => setRestaurant({ ...restaurant, address: e.target.value })}
                        />
                      </div>
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          id="phoneNumber"
                          type="number"
                          className="form-control"
                          name="phoneNumber"
                          placeholder="Enter phone number"
                          value={restaurant.phoneNumber || ''}
                          onChange={(e) => setRestaurant({ ...restaurant, phoneNumber: e.target.value })}
                        />
                      </div>
                      
                      <div className="form-group col-md-12 mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter email"
                          value={restaurant.email || ''}
                          onChange={(e) => setRestaurant({ ...restaurant, email: e.target.value })}
                        />
                      </div>
                      {/* Add other fields based on your data structure */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4 pb-3">
              <div className="row">
                <div className="form-group col-md-6">
                  <button type="button" className="btn border-gray col-md-6" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
                <div className="form-group col-md-6 end-flex">
                  <button type="submit" className="btn btn-success col-md-6">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
