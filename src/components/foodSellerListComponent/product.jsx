import FoodSellListSidebar from "./foodSellListSidebar";
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

export default function FoodSellerCustomerComponent() {
    



    

    useEffect(() => {
        
    }, []);
    
    
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 2;
   
    
    const [tableData, setTableData] = useState([
        {
        id: 1,
        image: '/public/soup.png',
        firstName: 'Tikka Masala',
        lastName: 'Best Sellers',
        description: 'Cras blandit consequat sapien ut cursus. Duis in mollis …',
        rating: 4,
        stock: true,
        price: 50,
        status: "active",
        },
        {
        id: 2,
        image: '/public/chicken-tikka-masala-spicy-indian-meat-dish-in-me.png',
        firstName: 'Tikka Masala',
        lastName: 'Best Sellers',
        description: 'Cras blandit consequat sapien ut cursus. Duis in mollis …',
        rating: 4,
        stock: true,
        price: 70,
        status: "inactive",
        },
        {
            id: 3,
            image: '/public/soup.png',
            firstName: 'Tikka Masala',
            lastName: 'Best Sellers',
            description: 'Cras blandit consequat sapien ut cursus. Duis in mollis …',
            rating: 4,
            stock: true,
            price: 25,
            status: "suspend",
            },
        // Add more rows as needed
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

    const renderStarIcons = (rating) => {
        const starColor = rating >= 4 ? 'gold' : 'gray'; // Adjust color logic as needed
        const stars = Array.from({ length: rating }, (_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color={starColor} />
        ));
        return stars;
    };

    const handleStockChange = (id) => {
        setTableData((prevData) =>
        prevData.map((row) =>
            row.id === id ? { ...row, stock: !row.stock } : row
        )
        );
    };

    const handleStatusChange = (id) => {
        setTableData((prevData) =>
        prevData.map((row) => {
            if (row.id === id) {
            switch (row.status) {
                case 'active':
                return { ...row, status: 'inactive' };
                case 'inactive':
                return { ...row, status: 'suspended' };
                case 'suspended':
                return { ...row, status: 'active' };
                default:
                return row;
            }
            }
            return row;
        })
        );
    };

    // const deleteData = (id) => {
        
    //     console.log(`Deleting data with ID: ${id}`);
    // };

    const totalItems = tableData.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentItems = tableData.slice(startIndex, endIndex);

    const changePage = (page) => {
        setCurrentPage(page);
    };

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
                            <div className=''>
                                <button className="btn btn-primary"><span className="px-3">+</span>Add a New Product</button>
                            </div>
                        </div> 
                    </div>
                    <div className="col-12 col-xl-4">
                        <FoodSellListSidebar />
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="card custom-card w-100 mb-3">
                            <div className="card-body position-relative">
                                <div className="row">                        
                                    <div className="">                                  
                                        <p>Products (Dishes)</p>                                  
                                    </div>
                                </div>
                                
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr className="col-12">
                                                <th className="col" colSpan="">ID</th>
                                                <th className="col">IMAGE</th>
                                                <th className="col">NAME</th>
                                                <th className="col-4">
                                                DESCRIPTION
                                                </th>
                                                <th className="col">RATING</th>
                                                <th className="col">STOCK</th>
                                                <th className="col">PRICE</th>
                                                <th className="col">STATUS</th>
                                                <th className="col">ACTION</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {currentItems.map((data) => (
                                            <tr key={data.id} className="col-12">
                                            <td className="col">{data.id}</td>
                                            <td className="col">
                                                <img src={data.image} alt={`Product ${data.id}`} width="50" />
                                            </td>
                                            <td className="col">
                                                {data.firstName} {data.lastName}
                                            </td>
                                            <td className="col-4">
                                                {data.description}
                                            </td>
                                            <td className="col text-center">{renderStarIcons(data.rating)}</td>
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
                                            <td className="col">${data.price}</td>
                                            <td className="col">
                                                <button
                                                className={`btn btn-${
                                                    data.status === 'active'
                                                    ? 'success'
                                                    : data.status === 'inactive'
                                                    ? 'secondary'
                                                    : 'danger'
                                                }`}
                                                onClick={() => handleStatusChange(data.id)}
                                                >
                                                {data.status}
                                                </button>
                                            </td>
                                            <td className="col text-right no-print">
                                                <div className="btn-group">
                                                    <Link data-toggle="tooltip" data-placement="top" title="View" to="/food-seller-list/product/edit" className="btn btn-primary btn-sm">
                                                    <span>👁️</span>

                                                    </Link>
                                                    <Link to="/food-seller-list/product/edit" className="btn btn-info btn-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.82362 11.7455H1.99792V9.1225L9.61325 2.0536C9.87331 1.81227 10.2949 1.81227 10.5549 2.0536L12.4389 3.80243C12.6989 4.04383 12.6989 4.43514 12.4389 4.67654L4.82362 11.7455ZM4.27153 10.5091L11.0258 4.23949L10.0841 3.36538L3.32986 9.63498V10.5091H4.27153ZM13.9853 12.9818H1.99792V14.2182H13.9853V12.9818Z" fill="white"/>
                                                        </svg>
                                                    </Link>
                                                    <button
                                                    onClick=""
                                                    className="btn btn-danger btn-sm"
                                                    >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3223 4.32727H14.6524V5.56364H13.3203V13.6C13.3203 13.9414 13.0221 14.2182 12.6543 14.2182H3.33008C2.96225 14.2182 2.66406 13.9414 2.66406 13.6V5.56364H1.33203V4.32727H4.66211V2.47273C4.66211 2.13131 4.9603 1.85454 5.32813 1.85454H10.6563C11.0241 1.85454 11.3223 2.13131 11.3223 2.47273V4.32727ZM11.9883 5.56364H3.9961V12.9818H11.9883V5.56364ZM7.32618 7.41818H5.99414V11.1273H7.32618V7.41818ZM8.65821 7.41818H9.99024V11.1273H8.65821V7.41818ZM5.99414 4.32727V3.09091H9.99024V4.32727H5.99414Z" fill="white"/>
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
                            {/* Card footer with form and pagination components */}
                            <div className="card-footer">
                                <div className="dtable-footer">
                                    <div className="form-group display-per-page d-flex">
                                    
                                        <div>
                                        
                                            <button
                                            className="btn btn-primary"
                                            onClick={() => changePage(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            >
                                            Previous
                                            </button>
                                            <span className="px-2">{`Page ${currentPage} of ${totalPages}`}</span>
                                            <button
                                            className="btn btn-primary py-1"
                                            onClick={() => changePage(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            >
                                            Next
                                            </button>
                                        </div>
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