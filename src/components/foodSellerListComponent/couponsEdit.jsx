/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import FoodSellListSidebar from "./foodSellListSidebar";

import { useState } from 'react';
import {  useParams } from 'react-router-dom';
import Select from 'react-select';
import CheckboxWithLabel from "./checkboxWithLabel";
import CheckboxTwoWithLabel from "./checkboxWithLabel";


export default function CouponsEditComponent() {
  const { id } = useParams();
  
    const discountOptions = [
      { value: 'Percentage Discount', label: 'Percentage Discount' },
      
      
    ];
    const TagsOptions = [
        { value: 'Cake', label: 'Cake' },
      { value: 'Cupcake', label: 'Cupcake' },
      { value: 'Home Chef', label: 'Home Chef' },
      
    ];

    const cuisinesOptions = [
      { value: 'Dessert', label: 'Dessert' },
      
      // Add more options as needed
    ];

    const StatusOptions = [
        { value: 'active', label: 'active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'suspend', label: 'suspend' },
        { value: 'pending', label: 'pending' },
        
        
    ];

    const AdminStatusOptions = [
        { value: 'active', label: 'active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'suspend', label: 'suspend' },
        { value: 'pending', label: 'pending' },
        
        
    ];

    

    const [selectedDiscount, setSelectedDiscount] = useState(null);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    //const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (selectedOptions) => {
      setSelectedCuisines(selectedOptions);
    };
    const handleDiscountChange = (selectedOption) => {
      setSelectedDiscount(selectedOption);
    };
    const handleTagsChange = (selectedOption) => {
      setSelectedTags(selectedOption);
    };
    const handleAdminStatusChange = (selectedOption) => {
        setSelectedAdminStatus(selectedOption);
    };
    const handleStatusChange = (selectedOption) => {
        setSelectedStatus(selectedOption);
    };
    
  
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
  
    const handleCheckboxChange1 = () => {
      setIsChecked1(!isChecked1);
    };
  
    const handleCheckboxChange2 = () => {
      setIsChecked2(!isChecked2);
    };

    
    
       
    return (

        <>

            <div>
                   
            <div className="row">
      <div className="col-12 col-xl-4">
        <FoodSellListSidebar id={id}/>
      </div>
      <div className="col-12 col-xl-8">
        <form role="form">
          <div className="">
            
            <div className="card-body">
              

              {/* inner-card 1 */}
              <div className="card inner-card mb-3">
                <div className="card-header bg-white">
                  Add / Edit Coupon
                </div>
                <div className="card-body">
                  <div className="row">


                    
                    <div className="form-group col-md-12">
                      <div className="row">

                        
                        <div className="form-group col-md-12 col-xl-12 mb-2">
                          <label htmlFor="typeSelect">Discount Type</label>
                          <Select
                            value={selectedDiscount}
                            onChange={handleDiscountChange}
                            options={discountOptions}
                            placeholder="Select Discount"
                            className="select2-single select2-red"
                          />
                        </div>

                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="coupon">Coupon Amount
                            </label>
                          <input type="number" className="form-control" placeholder="0"
                             />
                        </div>



                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="coupon_expire">Coupon Expire Date
                            </label>
                          <input type="date" className="form-control"
                             />
                          
                        </div>

                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="min_spend">Min Spend
                            </label>
                          <input type="text" className="form-control" placeholder="No Minimum"
                             />
                        </div>

                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="max_spend">Max Spend
                            </label>
                          <input type="text" className="form-control" placeholder="No Minimum"
                             />
                        </div>
                         <div className="form-group col-md-12 my-2">
                          <CheckboxWithLabel
                            label="Check this box if the coupon can not be used in conjunction with other coupons."
                            isChecked={isChecked1}
                            onChange={handleCheckboxChange1}
                          />
                          <CheckboxTwoWithLabel
                            label="Check this box if the coupon should not apply to items on sale."
                            isChecked={isChecked2}
                            onChange={handleCheckboxChange2}
                          />
                        </div>

                    
                      

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="Product">
                            Product (s)
                          </label>
                          <Select
                            isMulti
                            value={selectedTags}
                            onChange={handleTagsChange}
                            options={TagsOptions}
                            placeholder="Select Product"
                            className="select2-multiple select2-red"
                          />
                        </div>
                        

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="MenuCategory">
                          Menu Category(s)
                          </label>
                          <Select
                            isMulti
                            value={selectedCuisines}
                            onChange={handleChange}
                            options={cuisinesOptions}
                            placeholder="Select Menu Category"
                            className="select2-multiple select2-red"
                          />
                        </div>

                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="limit_coupon">Usage Limit Per Coupon
                            </label>
                          <input type="text" className="form-control" placeholder="Unlimited"
                             />
                        </div>

                        <div className="form-group col-md-12 my-2">
                          <label htmlFor="limit_user">Usage Limit Per User
                            </label>
                          <input type="text" className="form-control" placeholder="Unlimited"
                             />
                        </div>



                        <div className="form-group col-md-12">
                            <label htmlFor="statusSelect">Status</label>
                            <Select
                                value={selectedStatus}
                                onChange={handleStatusChange}
                                options={StatusOptions}
                                placeholder="Select Status"
                                className="select2-single select2-red"
                            />
                        </div>

                        

                      

                        
                      </div>

                      
                     
                    </div>

                    
                    
                  </div>
                      
                  <div className="col-md-12 mt-4 pb-3">
                    <div className="row">

                      <div className="form-group col-md-6">
                          {/* <button className='btn border-gray col-md-6'>Reset</button> */}
                      </div>
                      <div className="form-group col-md-6 end-flex">
                            <button className='btn btn-success col-md-6'>Submit</button>
                      </div>
                    </div>
                  
                  </div>
                  
                </div>
              </div>

              

            </div>

            {/* White Footer */}

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
                                
                                <button type="submit" className='btn btn-yellow border-white text-white col-md-12'>Save</button>
                            </div>
                        </div>
                    
                    </div>
                
                </div>
            </div>
            
            
          </div>
        </form>
      </div>
    </div>
                
            </div>
            
        </>

    )

}