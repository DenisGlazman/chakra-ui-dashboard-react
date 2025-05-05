import React, {useEffect, useState} from "react";


const OrdersOverview = () => {
    const[orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/orders") // https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/projects замените на ваш реальный API
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-96">
            <h2 className="text-lg font-bold">Orders overview</h2>
            <p className="text-green-500 font-medium">+30% this month</p>
            <div className="mt-4">
                {orders.map((order, index) => (
                    <div key={index} className="flex items-start gap-3 py-2 border-l-2 border-gray-200 pl-3">
                        <span className="text-2xl"><img src={order.icon} alt="icon" className="members"/></span>
                        <div>
                            <p className="font-semibold">{order.title}</p>
                            <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersOverview;