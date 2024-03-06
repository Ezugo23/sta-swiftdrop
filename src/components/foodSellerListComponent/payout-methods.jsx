/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import FoodSellListSidebar from "./foodSellListSidebar";

import { useState } from 'react';
import Select from 'react-select';
import {  useParams } from 'react-router-dom';
// Assuming you have a RadioInputWithLabel component
const RadioInputWithLabel = ({ label, name, value, checked, onChange }) => (
    <div className="form-check">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-check-input"
      />
      <label htmlFor={value} className="form-check-label">
        {label}
      </label>
    </div>
  );

export default function PayoutMethodsComponent() {
    const [numberInput, setNumberInput] = useState('');
    const { id } = useParams();

  const handleNumberChange = (e) => {
    let inputValue = e.target.value;

    // Remove any non-digit characters
    inputValue = inputValue.replace(/\D/g, '');

    // Limit to 3 digits
    inputValue = inputValue.slice(0, 3);

    setNumberInput(inputValue);
  };
  
    const [selectedDate, setSelectedDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Generate an array of options for the date numbers from 1 to 31
  const dateOptions = Array.from({ length: 31 }, (_, index) => ({
    value: (index + 1).toString(),
    label: (index + 1).toString(),
  }));

  // Generate an array of options for the years (adjust the range as needed)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => ({
    value: (currentYear + index).toString(),
    label: (currentYear + index).toString(),
  }));

  const handleDateChange = (selectedOption) => {
    setSelectedDate(selectedOption);
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
  };

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

    
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    //const [selectedCountry, setSelectedCountry] = useState(null);

   
    const handleAdminStatusChange = (selectedOption) => {
        setSelectedAdminStatus(selectedOption);
    };
    const handleStatusChange = (selectedOption) => {
        setSelectedStatus(selectedOption);
    };
    
    const [selectedOption, setSelectedOption] = useState(null);
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
    const handleRadioChangeTwo = (e) => {
        setSelectedOptionTwo(e.target.value);
    };

    return (
        <>
            <div>
                   
                <div className="row">
                    <div className=''>
                        <p>Restaurants’ Profile</p>                
                    </div>
                    
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
                                    Paypal
                                    </div>
                                    <div className="card-body">
                                        <div className="row">


                                            
                                            <div className="form-group col-md-12">
                                                <div className="row">
                                                    
                                                    <div className="form-group col-md-12 my-2">
                                                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center'}}>
                                                            <label>Set as primary</label>
                                                            <RadioInputWithLabel
                                                                label="sales@gmail.com"
                                                                name="couponOption"
                                                                value="option1"
                                                                checked={selectedOption === 'option1'}
                                                                onChange={handleRadioChange}
                                                            />
                                                        </div>
                                                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'ce'}}>
                                                            <label>Set as primary</label>
                                                            <RadioInputWithLabel
                                                                label="paypal@gmail.com"
                                                                name="couponOption"
                                                                value="option2"
                                                                checked={selectedOption === 'option2'}
                                                                onChange={handleRadioChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-12 my-2">
                                                        <input type="email" className="form-control" placeholder="Enter Paypal email address"
                                                            />
                                                            
                                                    </div>
                                                    
                                                </div>  
                                            </div>

                                            
                                            
                                        </div>
                                            
                                        <div className="col-md-12 mt-4 pb-3">
                                            <div className="row">

                                            <div className="form-group col-md-6">
                                                <button className='btn btn-primary border-gray col-md-12'><span>+</span>Add a New PayPal Address</button>
                                            </div>
                                            <div className="form-group col-md-6">
                                                    <button className='btn btn-success col-md-6'>Save</button>
                                            </div>
                                            </div>
                                        
                                        </div>                                
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                {/* inner-card 1 */}
                                <div className="card inner-card mb-3">
                                    <div className="card-header bg-white">
                                    Credit Card
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
             
                                            <div className="form-group col-md-12">
                                                <div className="row">
                                                    
                                                    <div className="form-group col-md-12 my-2">
                                                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center'}}>
                                                            <label>Set as primary</label>
                                                            <RadioInputWithLabel
                                                                label="MasterCard***********5344"
                                                                name="couponOptionTwo"
                                                                value="optiona"
                                                                checked={selectedOptionTwo === 'optiona'}
                                                                onChange={handleRadioChangeTwo}
                                                            />
                                                        </div>
                                                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'ce'}}>
                                                            <label>Set as primary</label>
                                                            <RadioInputWithLabel
                                                                label="Visa********3210"
                                                                name="couponOptionTwo"
                                                                value="optionb"
                                                                checked={selectedOptionTwo === 'optionb'}
                                                                onChange={handleRadioChangeTwo}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-12 my-2">
                                                        <label>Card Number</label>
                                                        <input type="number" className="form-control" placeholder="Enter Card Number"
                                                        />
                                                        
                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-12">
                                                        <label htmlFor="dateSelect">Expire Date/Month</label>
                                                        <Select
                                                            value={selectedDate}
                                                            onChange={handleDateChange}
                                                            options={dateOptions}
                                                            placeholder="Select Date"
                                                            className="select2-single select2-red"
                                                        />
                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-12">
                                                        <label htmlFor="yearSelect">Expire Year</label>
                                                        <Select
                                                        value={selectedYear}
                                                        onChange={handleYearChange}
                                                        options={yearOptions}
                                                        placeholder="Select Year"
                                                        className="select2-single select2-red"
                                                        />
                                                    </div>
                                                    <div className="form-group col-md-4 col-sm-12">
                                                        <label htmlFor="numberInput">CW/CVC</label>
                                                        <input
                                                            type="number"
                                                            id="numberInput"
                                                            className="form-control"
                                                            value={numberInput}
                                                            onInput={handleNumberChange}
                                                            maxLength="3"
                                                            placeholder="3 digit number"
                                                        />
                                                    </div>
                                                    <div className="form-group col-md-12 my-2">
                                                        <label>Card Holder Name</label>
                                                        <input type="text" className="form-control" placeholder="Card Holder Name"
                                                        />
                                                        
                                                    </div>
                
                                                </div>  
                                            </div>

                                            
                                            
                                        </div>
                                            
                                        <div className="col-md-12 mt-4 pb-3">
                                            <div className="row">

                                            <div className="form-group col-md-6">
                                                <button className='btn btn-primary border-gray col-md-12'><span>+</span>Add a New Credit Card</button>
                                            </div>
                                            <div className="form-group col-md-6">
                                                    <button className='btn btn-success col-md-6'>Save</button>
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