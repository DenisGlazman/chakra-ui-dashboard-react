import React, { useEffect, useState } from "react";
import './OrdersOverview.css';



const OrdersOverview = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="orders-container">


            <h2 className="text-xl font-bold mb-4">Orders overview</h2>
            <p >+30 <span>this month</span></p>

            {orders.map((order, index) => (
                <div key={index} className="order-item">
                    <div className="order-icon">
                        <div className="order-content">
                            <img src={order.icon} alt="icon"/>
                            <span className="vertical-line"></span>
                        </div>
                        <div>
                            <p className="order-title">{order.title}</p>
                            <p className="order-date">{order.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

    export default OrdersOverview;
