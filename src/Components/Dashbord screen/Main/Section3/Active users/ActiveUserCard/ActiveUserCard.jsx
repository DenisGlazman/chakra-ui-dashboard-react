import React from "react";
import './ActiveUserCard.css'

const ActiveUserCard = ({ icon, title, value, progress }) => {
    return (
        <div className="active-user-card">
            <div className="card-header">
                <div className="card-icon">
                    <img src={icon} alt={title} />
                </div>
                <span className="card-title">{title}</span>
            </div>
            <div className="card-value">{value}</div>
            <div className="card-progress">
                <div className="card-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};
export default ActiveUserCard;