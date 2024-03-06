import FoodSellListSidebar from "./foodSellListSidebar";
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import React Router Link
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

import Select from 'react-select';


//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ManageWorkDaysComponent() {
    
    const { id } = useParams();


    

    useEffect(() => {
        
    }, []);
    
    
 
   
    
    const [tableData, setTableData] = useState([
        {
          id: 1,
          day: 'Monday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 2,
          day: 'Tuesday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 3,
          day: 'Wednesday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 4,
          day: 'Wednesday',
          time: '10:00 AM - 06:00 PM',
          stock: true,
        },
        {
          id: 5,
          day: 'Thursday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 6,
          day: 'Friday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 7,
          day: 'Saturday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
        {
          id: 8,
          day: 'Sunday',
          time: '09:00 AM - 05:00 PM',
          stock: true,
        },
      ]);
      
    //const [currentPage, setCurrentPage] = useState(1);
    //const perPage = 5; 
    // const renderStarIcons = (rating) => {
    //     const starColor = rating >= 4 ? 'gold' : 'gray'; // Adjust color logic as needed
    //     const stars = Array.from({ length: rating }, (_, index) => (
    //     <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
    //     ));
    //         return stars;
    // };

   

    const handleStockChange = (id) => {
        setTableData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, stock: !row.stock } : row
          )
        );
    };
      

   

    // const deleteData = (id) => {
        
    //     console.log(`Deleting data with ID: ${id}`);
    // };

   
    

    const AdminStatusOptions = [
        { value: 'active', label: 'active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'suspend', label: 'suspend' },
        { value: 'pending', label: 'pending' },
        
        
    ];
    const [selectedAdminStatus, setSelectedAdminStatus] = useState(null);

    const handleAdminStatusChange = (selectedOption) => {
        setSelectedAdminStatus(selectedOption);
      };


    return (

        <>

            <div>
                   
                <div className="row">
                    <div>
                        <div className="between-flex mb-2">
                            <div className=''>
                                <p>Restaurants’ Profile</p>
                            
                            </div>
                            
                        </div> 
                    </div>
                    <div className="col-12 col-xl-4">
                        <FoodSellListSidebar id={id}/>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="card custom-card w-100 mb-3">
                            <div className="card-body position-relative">
                                <div className="row">                        
                                    <div className="">                                  
                                        <p>Working Days Setting by Week Days</p>                                  
                                    </div>
                                    <hr/>
                                </div>
                                
                                <div className="table-responsive">
                                    <table className="table">
                                        

                                        <tbody className="">
                                        {tableData.map((data) => (
                                            <tr key={data.day} className="col-12">
                                            
                                            
                                            <td className="col">
                                                <div className="btn-group gap-3">
                                                    <span><strong>{data.day}</strong> <br/><span>{data.time}</span></span>
                                                    <Link to="/food-seller-list/product/edit" className="btn-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.82362 11.7455H1.99792V9.1225L9.61325 2.0536C9.87331 1.81227 10.2949 1.81227 10.5549 2.0536L12.4389 3.80243C12.6989 4.04383 12.6989 4.43514 12.4389 4.67654L4.82362 11.7455ZM4.27153 10.5091L11.0258 4.23949L10.0841 3.36538L3.32986 9.63498V10.5091H4.27153ZM13.9853 12.9818H1.99792V14.2182H13.9853V12.9818Z" fill="black"/>
                                                        </svg>Edit
                                                        
                                                    </Link>
                                                    
                                                </div>
                                            </td>
                                            

                                            <td className="col">
                                            <div className="form-check form-switch cursor-pointer">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    style={{cursor: "pointer"}}
                                                    checked={data.stock}
                                                    onChange={() => handleStockChange(data.id)}
                                                />
                                                </div>
                                            </td>
                                            
                                           
                                            
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>

                                    

                                    <div className="form-group col-md-6 text-right end-flex" style={{float:'right'}}>
                                            <button type="submit" className='btn btn-primary text-white col-md-6'>Save</button>
                                    </div>
                                        
                                
                                        
                                </div>
                            </div>
                            
                        </div>

                        {/* Red Footer */}

                        <div className="card inner-card bg-danger text-white mb-3">
                            <div className="card-header between-flex">
                            <span>Important Information!</span>
                            <button className="btn btn-white bg-white text-danger">New</button>
                            </div>
                            <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-12">
                                <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum est id eros maximus, tincidunt tempus erat accumsan. Fusce suscipit volutpat libero quis ultricies. Suspendisse ornare laoreet commodo. Ut aliquam magna odio, ut efficitur est tincidunt fringilla. Vestibulum non ante et arcu maximus condimentum id in sapien. Suspendisse consequat elit sed hendrerit convallis. Fusce sit amet elementum elit. Mauris elementum sed dui eu semper.</span>
                                </div>
                            </div>

                            <div className="col-md-12 mt-4 pb-3">
                                <div className="row">

                                <div className="form-group col-md-6">
                                    <button className='btn border-white text-white col-md-6'>Take Action</button>
                                </div>
                                <div className="form-group col-md-6 end-flex">
                                        <button type="submit" className='btn border-white text-white col-md-6'>Dismiss</button>
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
                </div>
                
            </div>
            
        </>

    )

}