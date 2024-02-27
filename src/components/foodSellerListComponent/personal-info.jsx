import React, { useState, useEffect } from 'react';
import FoodSellListSidebar from "./foodSellListSidebar";
import ImageUploadButton from "./uploadImage";
import { useParams } from 'react-router-dom';
import Select from 'react-select';

export default function FoodSellerCustomerComponent() {
    const [restaurant, setRestaurant] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);

    const AdminStatusOptions = [
        { value: 'approved', label: 'approve' },
        { value: 'Inactive', label: 'Inactive' },
    ];

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

    const handleAdminStatusChange = (selectedOption) => {
        setSelectedAdminStatus(selectedOption);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://swifdropp.onrender.com/api/v1/approve-restaurant/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    approved: selectedAdminStatus.value === 'approved' ? true : false,
                }),
            });
            const data = await response.json();
            console.log('Approval response:', data);
            // You may want to handle success or display a message to the user upon successful update.
        } catch (error) {
            console.error('Error updating approval status:', error);
            // Handle error cases here
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-xl-4">
                    <FoodSellListSidebar />
                </div>
                <div className="col-12 col-xl-8">
                    <form role="form">
                        <div className="">
                            <div className="card-body">
                                <div className="card inner-card mb-3">
                                    <div className="card-header bg-white">
                                        Restaurant Information
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="form-group col-md-4">
                                            <ImageUploadButton restaurantImage={restaurant.image} />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <div className="row">
                                                    <div className="form-group col-md-12 mb-2">
                                                        <label htmlFor="fullName">Full Name
                                                            <span className="required">*</span></label>
                                                        <input id="fullName" type="text" className="form-control"
                                                            name="fullName" placeholder="George Smith" value={restaurant.firstname + ' ' + restaurant.lastname} readOnly />
                                                    </div>
                                                    <div className="form-group col-md-12 mb-2">
                                                        <label htmlFor="phoneNumber">Phone Number
                                                            <span className="required">*</span></label>
                                                        <input id="phoneNumber" type="number" className="form-control"
                                                            name="phoneNumber" placeholder="+234 80123456" value={restaurant.phoneNumber} readOnly />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="emailAddress">Email
                                                            <span className="required">*</span></label>
                                                        <input id="emailAddress" type="email" className="form-control"
                                                            name="emailAddress" placeholder="mail@yourmail.com" value={restaurant.email} readOnly />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="emailAddress">Business Licencse
                                                            <span className="required">*</span></label>
                                                        <input id="emailAddress" type="email" className="form-control"
                                                            name="emailAddress" placeholder="mail@yourmail.com" value={restaurant.businessLicense} readOnly />
                                                    </div>
                                                    {/* Additional Information */}
                                                    <div className="form-group col-md-12 mb-2">
                                                        <label htmlFor="address">Address
                                                            <span className="required">*</span></label>
                                                        <input id="address" type="text" className="form-control"
                                                            name="address" placeholder="14 Oba Palace" value={restaurant.address} readOnly />
                                                    </div>
                                                    <div className="form-group col-md-12 mb-2">
                                                        <label htmlFor="availability">Availability</label>
                                                        <input id="availability" type="text" className="form-control"
                                                            name="availability" value={restaurant.isAvailable ? 'Available' : 'Not Available'} readOnly />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="restaurantName">Restaurant Name</label>
                                                        <input id="restaurantName" type="text" className="form-control"
                                                            name="restaurantName" value={restaurant.restaurantName} readOnly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card inner-card mb-3">
                            <div className="card-header between-flex">
                                <span>Admins’ Review Status</span>
                            
                            </div>
                            <div className="card-body">
                                

                                <div className="col-md-12  pb-3">
                                    <div className="row" style={{}}>

                                    
                                        <div className="form-group col-md-9">
                                            <label htmlFor="statusSelect">Review Status</label>
                                            <Select
                                                value={selectedAdminStatus}
                                                onChange={handleAdminStatusChange}
                                                options={AdminStatusOptions}
                                                placeholder="Select Status"
                                                className="select2-single select2-red"
                                            />
                                        </div>
                                        <div className="form-group col-md-3 mt-4">
                                            
                                        <button type="submit" onClick={handleSubmit} className='btn btn-yellow border-white text-white col-md-12'>Save</button>

                                        </div>
                                    </div>
                                
                                </div>
                            
                            </div>
                        </div>
                                {/* Add more sections as needed */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}