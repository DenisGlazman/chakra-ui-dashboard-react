import React, { useEffect, useState } from "react";
import './OrdersOverview.css';

const OrdersOverview = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("./orders.json")
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="orders-container">
            <h2 className="text-xl font-bold mb-1">Orders overview</h2>
            <p className="text-green">+30 <span>this month</span></p>

            <div className="timeline">
                {orders.map((order, index) => (
                    <div key={index} className="timeline-item">
                        <div className="icon-container">
                            <img src={order.icon} alt="icon" className="icon" />
                            {index !== orders.length - 1 && <span className="vertical-line"></span>}
                        </div>
                        <div className="content">
                            <p className="order-title">{order.title}</p>
                            <p className="order-date">{order.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersOverview;
