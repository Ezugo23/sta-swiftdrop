import React, { useState, useEffect } from 'react';
import '../Style/OrderHistory.css'
import SideNav from './SideNav'
import axios from 'axios';
import {  useParams } from 'react-router-dom';


const OrderHistory = () => {
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swifdropp.onrender.com/api/v1/orders/user-orders/${userId}`);
        setOrders(response.data); // Assuming response.data is an array of orders
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <div className="">
        <h5 className='my-5'>All Users / Order History</h5>
        <div className='d-flex gap-5 mb-5'>
          <SideNav userId={userId} />
          <div>
            <div className="whitebg">
              <h4>All users / Order History</h4>
              <hr />
            {orders.length === 0 ? (
              <p>No order available</p>
            ) : (
              <table className='ttttt'>
                <thead>
                  <tr className='text-center'>
                    <th>ID</th>
                    <th>Image</th>
                    <th>DATE</th>
                    <th>SELLER</th>
                    <th>Food Title</th>
                    <th>Method</th>
                    <th>PICKUP LOCATION</th>
                    <th>DROP OFF LOCATION</th>
                    <th>AMOUNT</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    order.orderItems.map((item, index) => (
                      <tr key={`${order.orderId}_${index}`}>
                        <td>{order.orderId}</td>
                        <td><img src={item.foodImage} alt="Food" style={{width:'40px', height:'40px'}} /></td>
                        <td>{new Date(order.orderDate).toLocaleString()}</td>
                        <td>{order.restaurantName}</td>
                        <td>{item.foodTitle}</td>
                        <td>{order.paymentMethod}</td>
                        <td>{order.pickUpLocation}</td>
                        <td>{order.drpOffLocation}</td>
                        <td>{index === 0 ? order.grandTotal : ''}</td>
                        <td>{order.orderStatus}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            )}
              <div className='d-flex justify-content-between mt-5'>
                <p>Showing {orders.length} entries</p>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;