import { Link, Route, Routes } from "react-router-dom";
import AllUsers from "../allUserComponent/Component/AllUsers.jsx";
import EditUsers from "../allUserComponent/Component/EditUsers.jsx";
import UserChangePass from "../allUserComponent/Component/UsersChangePass.jsx";
import PayMethod from "../allUserComponent/Component/PayMethod.jsx";
import AllUsersEditAddress from "../allUserComponent/Component/AllUsersEditAddress.jsx";
import AddAddress from "../allUserComponent/Component/AddAddress.jsx";
import OrderHistory from "../allUserComponent/Component/OrderHistory.jsx";
export default function allUserSection() {

    return (

        <>

            <div className="">
                <div className="breadcrumb-flex">

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  pt-2 rounded-3">
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Application</a></li>
                            <li className="breadcrumb-item"><a href="#"  className="text-dark text-decoration-none">Users</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><Link to="/all-user" className="text-decoration-none" style={{ color: "#F8B602" }}>All Users</Link></li>
                        </ol>
                    </nav>
                </div>
                <div>
                    
                    <Routes>
                    <Route path="" element={<AllUsers/>} />
                    <Route path="EditUsers/:adminId" element={<EditUsers/>} />
                    <Route path="OrderHistory" element={<OrderHistory />} />
                    <Route path="PayMethod" element={<PayMethod/>} />
                    <Route path="UsersChangePass" element={<UserChangePass />} />
                    <Route path="AllusersEditAddress" element={<AllUsersEditAddress />} />
                    <Route path="AddAddress" element={<AddAddress />} />
                    </Routes>
                </div>
            </div>

        </>

    )

}