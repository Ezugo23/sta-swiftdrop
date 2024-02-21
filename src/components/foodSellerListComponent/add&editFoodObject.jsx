/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import FoodSellListSidebar from "./foodSellListSidebar";

import { useState } from 'react';
import Select from 'react-select';


export default function AddEditFoodObjectComponent() {
  const [zipcode, setZipcode] = useState('');
  const [logoUrl, setLogoUrl] = useState('/public/logo2.svg');

  const handleZipcodeChange = (e) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setZipcode(value);
    } 
  };
  const handleFileChange = (e) => {
    console.log('File change event triggered');
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log('Image loaded successfully');
        const imageUrl = event.target.result;
        setLogoUrl(imageUrl);
        console.log('logoUrl state updated:', logoUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
    // Trigger file input click when the button is clicked
    document.getElementById('fileInput').click();
  };
  

    const typeOptions = [
      { value: 'Restaurant', label: 'Restaurant' },
      { value: 'Canteen', label: 'Canteen' },
      { value: 'Cafe', label: 'Cafe' },
      
    ];
    const ratingOptions = [
      { value: '$$', label: '$$' },
      { value: 'NN', label: 'NN' },
      
    ];

    const cuisinesOptions = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'India', label: 'India' },
      { value: 'Senegal', label: 'Senegal' },
      { value: 'canada', label: 'canada' },
      // Add more options as needed
    ];

    const countryOptions = [
      { value: 'Nigeria', label: 'Nigeria' },
      { value: 'India', label: 'India' },
      { value: 'Senegal', label: 'Senegal' },
      { value: 'canada', label: 'canada' },
      
    ];
    const [idtype] = useState([
      // Your initial data goes here
      {name: "Restaurant"},
      {name: "Cafe"},
      {name: "Canteen"}
      // Add more rows as needed
    ]);

    const [selectedType, setSelectedType] = useState(null);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleChange = (selectedOptions) => {
      setSelectedCuisines(selectedOptions);
    };
    const handleTypeChange = (selectedOption) => {
      setSelectedType(selectedOption);
    };
    const handleRatingChange = (selectedOption) => {
      setSelectedRating(selectedOption);
    };
    const handleCountryChange = (selectedOption) => {
      setSelectedCountry(selectedOption);
    };
    return (

        <>

            <div>
                   
            <div className="row">
      <div className="col-12 col-xl-4">
        <FoodSellListSidebar />
      </div>
      <div className="col-12 col-xl-8">
        <form role="form">
          <div className="">
            
            <div className="card-body">
              

              {/* inner-card 1 */}
              <div className="card inner-card mb-3">
                <div className="card-header bg-white">
                    Add / Edit Food Objects (Restaurant)
                </div>
                <div className="card-body">
                  <div className="row">


                    <div className="form-group col-md-5">

                        <div className="mb-2">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Add Logo (size: 80x80)
                            </label>
                            <div className="border">

                              <div className="column-flex pl10">
                                <div className="addLogoBox">
                                  <img src={logoUrl} className="addLogo" alt="Logo" />
                                </div>

                                {/* Hidden file input */}
                                <input
                                  id="fileInput"
                                  type="file"
                                  accept="image/*"
                                  style={{ display: 'none' }}
                                  onChange={handleFileChange}
                                />
                                <button className="btn btn-primary" onClick={handleButtonClick}>
                                  Add Logo Image
                                </button>
                              </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Food Object (restaurant) Picture (size: 300x230)
                            </label>
                            <div className="border ">

                            <div className='column-flex pl10'>
                                <img src='/public/cafe-1.png' className="imageUpload"/>

                                <button className='btn btn-primary'>Add Signature</button>
                                {/* <input type="file" value="Change Image" /> */}
                            </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Signature (size: 194x90)
                            </label>
                            <div className="border ">

                            <div className='column-flex pl10'>
                                <img src='/public/Asset-1.svg' className="imageUpload"/>

                                <button className='btn btn-primary'>Change Photo</button>
                                {/* <input type="file" value="Change Image" /> */}
                            </div>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="uploadImage" style={{fontSize: "13px"}}>Location
                            </label>
                            <div className="border ">

                            <div className='column-flex pl10'>
                                <img src='/public/Mask location.png' className="imageUpload"/>

                                
                                {/* <input type="file" value="Change Image" /> */}
                            </div>
                            </div>
                        </div>



                    </div>
                    
                    <div className="form-group col-md-7">
                      <div className="row">

                        
                        <div className="form-group col-md-12 col-xl-12 mb-2">
                          <label htmlFor="typeSelect">Add Type</label>
                          <Select
                            value={selectedType}
                            onChange={handleTypeChange}
                            options={typeOptions}
                            placeholder="Select Type"
                            className="select2-single select2-red"
                          />
                        </div>



                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">Food Object (restaurant) Name
                            </label>
                          <input type="number" className="form-control"
                             />
                          
                        </div>

                        
                        <div className="form-group col-md-12 col-xl-12 mb-2">
                          <label htmlFor="ratingSelect">Price Rating</label>
                          <Select
                            value={selectedRating}
                            onChange={handleRatingChange}
                            options={ratingOptions}
                            placeholder="Select Type"
                            className="select2-single select2-red"
                          />
                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">Phone Number
                            </label>
                          <input type="number" className="form-control"
                             />
                          
                        </div>

                        <div className="form-group col-md-12 mb-2">
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

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">
                            Phostal Zip Code
                            <span className="required">*</span>
                          </label>
                          <input
                            id="zipcode"
                            type="text"  // Change type to text
                            className="form-control"
                            name="zipcode"
                            placeholder="021110"
                            value={zipcode}
                            onChange={handleZipcodeChange}
                          />
                        </div>

                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="city">City
                                </label>
                            <input id="city" type="text" className="form-control"
                                name="city" />

                        </div>

                        <div className="form-group col-md-12 col-xl-12 mb-2">
                          <label htmlFor="ratingSelect">Country</label>
                          <Select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            options={countryOptions}
                            placeholder="Select Country"
                            className="select2-single select2-red"
                          />
                        </div>



                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="address">Address</label>
                            <textarea id="address"  className="form-control"

                                placeholder="70., Charter str. Apartment: 59a" />

                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">Latitude
                            </label>
                          <input type="number" className="form-control"
                             />
                          
                        </div>

                        <div className="form-group col-md-12 mb-2">
                          <label htmlFor="zipcode">Longitude
                            </label>
                          <input type="number" className="form-control"
                             />
                          
                        </div>
                        <div className="form-group col-md-12 mb-2">
                            <label htmlFor="address">Editional Information</label>
                            <textarea id="eduinfo" style={{minHeight: "200px"}}  className="form-control"

                                placeholder="Write editional information about your company here" />

                        </div>

                        {/* <div className="form-group col-md-12 mb-2">
                          <label htmlFor="parent_tag">
                            Country
                          </label>
                          <select
                            id="parent_tag"
                            className="form-control"
                          >
                            {country.map((it, i) => (
                              <option key={i} value={it.id}>
                                {it.name}
                              </option>
                            ))}
                          </select>
                        </div> */}

                        
                      </div>

                      
                     
                    </div>

                    
                    
                  </div>
                      
                  <div className="col-md-12 mt-4 pb-3">
                    <div className="row">

                      <div className="form-group col-md-6">
                          <button className='btn border-gray col-md-6'>Reset</button>
                      </div>
                      <div className="form-group col-md-6 end-flex">
                            <button className='btn btn-success col-md-6'>Submit</button>
                      </div>
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