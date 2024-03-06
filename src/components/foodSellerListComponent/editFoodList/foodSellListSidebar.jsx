import { Link,useParams } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

export default function FoodSellListSidebar()  {
  const { id } = useParams();
    //const { slug } = useParams();
  return (
    <div>
  
      <div className="card settings-card no-print">
        <div className="card-header bg-white between-flex">
          <div className='between-flex'>
            <img src="/public/profile-logo.svg" />
            <div style={{fontSize: "13px", marginLeft: "15px"}}>
              <span style={{fontWeight: "700"}}>Chicken Ban</span> <br/> <span>Restaurant</span>
            </div>
          </div>
          <div className='three-dot'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM10.5 12C10.5 11.175 11.175 10.5 12 10.5C12.825 10.5 13.5 11.175 13.5 12C13.5 12.825 12.825 13.5 12 13.5C11.175 13.5 10.5 12.825 10.5 12Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div className="card-body p-0 m-0">
          <ul className="nav flex-column nav-pills m-0">
            <li className="nav-item">
            <Link to={`/food-seller-list/${id}`} className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 8.08333C5.74961 8.08333 4.59417 7.41623 3.96895 6.33333C3.34374 5.25042 3.34374 3.91623 3.96895 2.83333C4.59417 1.75042 5.74961 1.08333 7.00004 1.08333C8.93304 1.08333 10.5 2.65033 10.5 4.58333C10.5 6.51632 8.93304 8.08333 7.00004 8.08333ZM11.6667 13.3333H10.5V12.1667C10.5 11.2002 9.71654 10.4167 8.75004 10.4167H5.25004C4.28354 10.4167 3.50004 11.2002 3.50004 12.1667V13.3333H2.33337V12.1667C2.33337 10.5558 3.63921 9.25 5.25004 9.25H8.75004C10.3609 9.25 11.6667 10.5558 11.6667 12.1667V13.3333ZM9.33337 4.58333C9.33337 5.87199 8.2887 6.91666 7.00004 6.91666C5.71138 6.91666 4.66671 5.87199 4.66671 4.58333C4.66671 3.29466 5.71138 2.24999 7.00004 2.24999C8.2887 2.24999 9.33337 3.29466 9.33337 4.58333Z" fill="black"/>
              </svg>
                <span style={{paddingLeft: "8px"}}>Personal Info</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={{ name: 'setup.general' }} className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 6.66667H13.3333C13.7015 6.66667 14 6.96514 14 7.33333V14C14 14.3682 13.7015 14.6667 13.3333 14.6667H2.66667C2.29848 14.6667 2 14.3682 2 14V7.33333C2 6.96514 2.29848 6.66667 2.66667 6.66667H3.33333V6C3.33255 3.83511 4.82076 1.95394 6.92773 1.45651C9.0347 0.959077 11.2071 1.97602 12.1747 3.91267L10.982 4.50867C10.2909 3.12517 8.73902 2.39869 7.23392 2.75412C5.72882 3.10954 4.66584 4.4535 4.66667 6V6.66667ZM3.33333 8V13.3333H12.6667V8H3.33333ZM9.33333 10H6.66667V11.3333H9.33333V10Z" fill="black"/>
              </svg>
                <span style={{paddingLeft: "8px"}}>Change Password</span>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={{ name: 'setup.general' }} className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.66671 3.33334V1.33334C4.66671 0.965149 4.96518 0.666672 5.33337 0.666672H10.6667C11.0349 0.666672 11.3334 0.965149 11.3334 1.33334V3.33334H14C14.3682 3.33334 14.6667 3.63181 14.6667 4V13.3333C14.6667 13.7015 14.3682 14 14 14H2.00004C1.63185 14 1.33337 13.7015 1.33337 13.3333V4C1.33337 3.63181 1.63185 3.33334 2.00004 3.33334H4.66671ZM6.00004 8.66667H2.66671V12.6667H13.3334V8.66667H10V10.6667H6.00004V8.66667ZM2.66671 4.66667H13.3334V7.33334H10V6H6.00004V7.33334H2.66671V4.66667ZM7.33337 7.33334V9.33334H8.66671V7.33334H7.33337ZM6.00004 3.33334V2.00001H10V3.33334H6.00004Z" fill="black"/>
              </svg>
                <span style={{paddingLeft: "8px"}}>Company Information</span>
              </Link>
            </li> */}
            <li className="nav-item mt-3">
              <Link to={`/food-seller-list/add-and-edit-food/${id}`} className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M14 1.33334V14.6667H12.6667V10H10V5.33334C10 3.1242 11.7909 1.33334 14 1.33334ZM12.6667 3.02C12.1133 3.33334 11.3333 4.11334 11.3333 5.33334V8.66667H12.6667V3.02ZM6 14.6667V9.26667C7.55194 8.94935 8.66647 7.58405 8.66667 6V2H7.33333V6.66667H6V2H4.66667V6.66667H3.33333V2H2V6C2.00019 7.58405 3.11473 8.94935 4.66667 9.26667V14.6667H6Z" fill="black"/>
  </svg>
                <span style={{paddingLeft: "8px"}}>Add Food Object (Restaurant)</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={{ name: 'setup.general' }} className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.51197 8.09733L8.94263 8.66667L13.6566 13.3807L12.714 14.3233L7.99997 9.61L3.28597 14.3233L2.3433 13.3807L8.5693 7.15467C8.1773 6.18333 8.58263 4.78467 9.6493 3.71667C10.9513 2.41533 12.7453 2.09867 13.6566 3.01C14.568 3.92133 14.2513 5.71533 12.95 7.01667C11.882 8.08467 10.4833 8.49 9.51197 8.09733ZM2.81463 2.53867L7.29263 7.01667L5.4073 8.90267L2.81397 6.30933C1.77295 5.268 1.77295 3.58 2.81397 2.53867H2.81463ZM12.714 3.952C13.018 4.256 12.8453 5.23533 12.0066 6.07333C11.1686 6.91133 10.1893 7.084 9.88597 6.78067C9.58197 6.47667 9.75463 5.49733 10.5926 4.65867C11.4306 3.82067 12.41 3.648 12.714 3.952Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>Food Categories / Add Category</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={`/food-seller-list/product/${id}`} className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.25 4.66667V12.2459C12.2511 12.4006 12.1907 12.5494 12.082 12.6596C11.9734 12.7698 11.8255 12.8323 11.6707 12.8333H2.32925C2.00957 12.8333 1.75032 12.5743 1.75 12.2547V1.74533C1.75 1.43208 2.01192 1.16667 2.3345 1.16667H8.74825L12.25 4.66667ZM11.0833 5.25H8.16667V2.33333H2.91667V11.6667H11.0833V5.25ZM6.41667 4.08333H4.66667V5.25H6.41667V4.08333ZM4.66667 6.41667H9.33333V7.58333H4.66667V6.41667ZM9.33333 8.75H4.66667V9.91667H9.33333V8.75Z" fill="black"/>
  </svg>
                <span style={{paddingLeft: "8px"}}>Products (Dishes) / Add Product (Dish)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/food-seller-list/coupons" className="nav-link thumb">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.33337 2.66667V6.33333C2.25385 6.33333 3.00004 7.07953 3.00004 8C3.00004 8.92048 2.25385 9.66667 1.33337 9.66667V13.3333C1.33337 13.7015 1.63185 14 2.00004 14H14C14.3682 14 14.6667 13.7015 14.6667 13.3333V9.66667C13.7462 9.66667 13 8.92048 13 8C13 7.07953 13.7462 6.33333 14.6667 6.33333V2.66667C14.6667 2.29848 14.3682 2 14 2H2.00004C1.63185 2 1.33337 2.29848 1.33337 2.66667ZM4.33455 8C4.33455 6.85987 3.68827 5.81828 2.66671 5.312V3.33333H13.3334V5.312C12.3118 5.81828 11.6655 6.85987 11.6655 8C11.6655 9.14013 12.3118 10.1817 13.3334 10.688V12.6667H2.66671V10.688C3.68827 10.1817 4.33455 9.14013 4.33455 8ZM6.00004 6H10V7.33333H6.00004V6ZM10 8.66667H6.00004V10H10V8.66667Z" fill="black"/>
  </svg>
                <span style={{paddingLeft: "8px"}}>Coupons</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={{ name: 'setup.general' }} className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.00004 14.6667C4.31804 14.6667 1.33337 11.682 1.33337 8C1.33337 4.318 4.31804 1.33334 8.00004 1.33334C11.682 1.33334 14.6667 4.318 14.6667 8C14.6667 11.682 11.682 14.6667 8.00004 14.6667ZM8.00004 13.3333C10.9456 13.3333 13.3334 10.9455 13.3334 8C13.3334 5.05448 10.9456 2.66667 8.00004 2.66667C5.05452 2.66667 2.66671 5.05448 2.66671 8C2.66671 10.9455 5.05452 13.3333 8.00004 13.3333ZM11.3334 8H8.66671V4.66667H7.33337V9.33334H11.3334V8Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>Manage Preparation Time</span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/food-seller-list/manage-work-days" className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.334 2.00001H14.0007C14.3688 2.00001 14.6673 2.29848 14.6673 2.66667V13.3333C14.6673 13.7015 14.3688 14 14.0007 14H2.00065C1.63246 14 1.33398 13.7015 1.33398 13.3333V2.66667C1.33398 2.29848 1.63246 2.00001 2.00065 2.00001H4.66732V0.666672H6.00065V2.00001H10.0007V0.666672H11.334V2.00001ZM10.0007 3.33334H6.00065V4.66667H4.66732V3.33334H2.66732V6H13.334V3.33334H11.334V4.66667H10.0007V3.33334ZM2.66732 7.33334H13.334V12.6667H2.66732V7.33334Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>Manage Working Days & Time</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/food-seller-list/all-reviews" className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.334 2.00001H14.0007C14.3688 2.00001 14.6673 2.29848 14.6673 2.66667V13.3333C14.6673 13.7015 14.3688 14 14.0007 14H2.00065C1.63246 14 1.33398 13.7015 1.33398 13.3333V2.66667C1.33398 2.29848 1.63246 2.00001 2.00065 2.00001H4.66732V0.666672H6.00065V2.00001H10.0007V0.666672H11.334V2.00001ZM10.0007 3.33334H6.00065V4.66667H4.66732V3.33334H2.66732V6H13.334V3.33334H11.334V4.66667H10.0007V3.33334ZM2.66732 7.33334H13.334V12.6667H2.66732V7.33334Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>All Reviews</span>
              </Link>
            </li>

            <hr/>
            <li className="nav-item">
              <Link to="/food-seller-list/payout-methods" className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.334 2.00001H14.0007C14.3688 2.00001 14.6673 2.29848 14.6673 2.66667V13.3333C14.6673 13.7015 14.3688 14 14.0007 14H2.00065C1.63246 14 1.33398 13.7015 1.33398 13.3333V2.66667C1.33398 2.29848 1.63246 2.00001 2.00065 2.00001H4.66732V0.666672H6.00065V2.00001H10.0007V0.666672H11.334V2.00001ZM10.0007 3.33334H6.00065V4.66667H4.66732V3.33334H2.66732V6H13.334V3.33334H11.334V4.66667H10.0007V3.33334ZM2.66732 7.33334H13.334V12.6667H2.66732V7.33334Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>Payout Methods</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/food-seller-list/all-reviews" className="nav-link thumb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.334 2.00001H14.0007C14.3688 2.00001 14.6673 2.29848 14.6673 2.66667V13.3333C14.6673 13.7015 14.3688 14 14.0007 14H2.00065C1.63246 14 1.33398 13.7015 1.33398 13.3333V2.66667C1.33398 2.29848 1.63246 2.00001 2.00065 2.00001H4.66732V0.666672H6.00065V2.00001H10.0007V0.666672H11.334V2.00001ZM10.0007 3.33334H6.00065V4.66667H4.66732V3.33334H2.66732V6H13.334V3.33334H11.334V4.66667H10.0007V3.33334ZM2.66732 7.33334H13.334V12.6667H2.66732V7.33334Z" fill="black"/>
                </svg>
                <span style={{paddingLeft: "8px"}}>Payout Management</span>
              </Link>
            </li>
            
            
            {/* Add more list items as needed */}
          </ul>
          <hr/>
          <div className='between-flex pt-0 card-body pb-4'>
            <div className='total-review' style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
              <span className='total-bold text-primary'>25</span>
              <span>Total Items</span>
            </div>
            <div className='total-review' style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
              <span className='total-bold text-primary'>546</span>
              <span>Total Orders</span>
            </div>
            <div className='total-review' style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
              <span className='total-bold text-danger'>$3,450</span>
              <span>Balance</span>
            </div>
            <div className='total-review' style={{display:'flex', flexDirection: 'column', textAlign: 'center'}}>
              <span className='total-bold text-success'>$9,250</span>
              <span>Total Paid</span>
            </div>
          </div>
        </div>
      </div>
      


      <div className="card settings-card no-print mt-3">
        <div className="card-header bg-white between-flex">
          
            
            <div style={{fontSize: "13px", fontWeight: '600'}}>
               <span>Admins Alerts Submission Form</span>
            </div>
          
        </div>
        <div className="card-body">
          <div>
            <div className="form-group col-md-12 mb-2">
                <label htmlFor="title">Title
                    </label>
                <input id="title" type="text" className="form-control"
                    name="title" />

            </div>
            <div className="form-group col-md-12 mb-2">
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" style={{fontSize: '12px'}}  className="form-control"

                    placeholder="Your account is on Pending, Please add your company Identification number as soon as you can" />

            </div>
          </div>
          <div className="mt-3">
            
              <div className="form-group end-flex">
                    <button className='btn btn-primary col-md-6'>SUBMIT</button>
              </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

