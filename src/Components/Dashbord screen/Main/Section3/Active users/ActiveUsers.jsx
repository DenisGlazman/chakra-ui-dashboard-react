import React, { useEffect, useState } from "react";
import "./ActiveUsers.css";
import ActiveUserCard from "./ActiveUserCard/ActiveUserCard.jsx";




const ActiveUsers = () => {
    const [cards, setCards] = useState(null);
    const [meta, setMeta] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/activeusers")
            .then((res) => res.json())
            .then((data) => {
                console.log("users", data);
                setCards(data);
            })
            .catch((err) => console.error("Users error:", err.message));

        fetch("http://localhost:5001/activeusersMeta")
            .then((res) => res.json())
            .then((data) => {
                console.log("meta", data);
                setMeta(data);
            })
            .catch((err) => console.error("Meta error:", err.message));
    }, []);

    if (!cards) return <p>Loading...</p>;
    return (
        <div className="active-users">
            {meta && (
                <div className="active-users-header">
                    <h3>Active Users</h3>
                    <p><span className="positive">+({meta[0].change})</span> {meta[0].period}</p>
                </div>
            )}
                <div className='active-users-cards'>
                    {cards.map(({ id, icon, title, value, progress }) => (
                        <ActiveUserCard key={id} icon={icon} title={title} value={value} progress={progress} />
                    ))}
                </div>
        </div>
    );
};

export default ActiveUsers;
