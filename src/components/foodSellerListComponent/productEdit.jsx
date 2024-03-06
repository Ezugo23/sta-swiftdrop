/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import FoodSellListSidebar from "./foodSellListSidebar";

import { useState } from 'react';
import Select from 'react-select';


export default function ProductEditComponent() {
  
    const categoryOptions = [
      { value: 'Best Sellers', label: 'Best Sellers' },
      
      
    ];
    const TagsOptions = [
        { value: 'Cake', label: 'Cake' },
      { value: 'Cupcake', label: 'Cupcake' },
      { value: 'Home Chef', label: 'Home Chef' },
      
    ];

    const cuisinesOptions = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'India', label: 'India' },
      { value: 'Senegal', label: 'Senegal' },
      { value: 'canada', label: 'canada' },
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

    

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    //const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (selectedOptions) => {
      setSelectedCuisines(selectedOptions);
    };
    const handleCategoryChange = (selectedOption) => {
      setSelectedCategory(selectedOption);
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
                    Add / Edit Product
                </div>
                <div className="card-body">
                  <div className="row">


                    <div className="form-group col-md-4">

                        <div className="mb-2">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Small image (size: 55x55)
                            </label>
                            <div className="border">

                                <div className='column-flex img-height pl10'>
                                    <img src='/public/steak.png' style={{borderRadius: '50%'}} className="imageUpload"/>

                                    <button className='btn btn-primary mt-2'>Change Photo</button>
                                    {/* <input type="file" value="Change Image" /> */}
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Big image (size: 170x170)
                            </label>
                            <div className="border">

                                <div className='column-flex img-height pl10'>
                                    <img src='/public/steak.png' style={{borderRadius: '50%'}} className="imageUpload"/>

                                    <button className='btn btn-primary mt-2'>Change Photo</button>
                                    {/* <input type="file" value="Change Image" /> */}
                                </div>
                            </div>
                        </div>

                        
                       



                    </div>
                    
                    <div className="form-group col-md-8">
                      <div className="row">

                        
                        <div className="form-group col-md-12 col-xl-12 mb-3">
                          <label htmlFor="typeSelect">Category</label>
                          <Select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            options={categoryOptions}
                            placeholder="Select Category"
                            className="select2-single select2-red"
                          />
                        </div>



                        <div className="form-group col-md-12 my-3">
                          <label htmlFor="zipcode">Name
                            </label>
                          <input type="text" className="form-control" placeholder="steck"
                             />
                          
                        </div>

                        <div className="form-group col-md-12 my-3">
                            <label htmlFor="address">Description 1 (Max 110 symbols)</label>
                            <textarea id="address"  className="form-control"

                                placeholder="Write second editional information about this food product here" />

                        </div>

                        <div className="form-group col-md-12 my-3">
                          <label htmlFor="price">Price
                            </label>
                          <input type="number" className="form-control" placeholder="21.45"
                             />
                        </div>

                        <div className="col-md-12 my-1">
                            <div className="row" styl={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                                <div className="form-group mt-3 col-md-6">
                                    <label htmlFor="price">Order Now / Preparation Time
                                        </label>
                                    <input type="number" className="form-control" placeholder="21.45"
                                        />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="price">Pre-Order / Preparation Time (min 00:00 before)
                                        </label>
                                    <input type="number" className="form-control" placeholder="21.45"
                                        />
                                </div>
                            </div>
                        
                        </div>

                        <div className="form-group col-md-12 my-3">
                          <label htmlFor="price">Weight
                            </label>
                          <input type="text" className="form-control" placeholder="21gr"
                             />
                        </div>

                        <div className="form-group col-md-12 mb-3">
                          <label htmlFor="Tags">
                             Tags (filter)
                          </label>
                          <Select
                            isMulti
                            value={selectedTags}
                            onChange={handleTagsChange}
                            options={TagsOptions}
                            placeholder="Select Tag"
                            className="select2-multiple select2-red"
                          />
                        </div>
                        

                        <div className="form-group col-md-12 mb-3">
                          <label htmlFor="Cuisines">
                            Cuisines
                          </label>
                          <Select
                            isMulti
                            value={selectedCuisines}
                            onChange={handleChange}
                            options={cuisinesOptions}
                            placeholder="Select Tag"
                            className="select2-multiple select2-red"
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