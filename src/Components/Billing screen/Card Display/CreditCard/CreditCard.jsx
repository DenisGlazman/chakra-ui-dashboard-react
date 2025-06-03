import './CreditCard.css'

import React from "react";
import "./CreditCard.css";

const CreditCard=()=> {
    return (
        <div className="credit-card">
            <h4 className="brand">Purity UI</h4>

            <div className="card-logo">
                <div className="circle red" />
                <div className="circle yellow" />
            </div>

            <div className="card-number">7812&nbsp;2139&nbsp;0823&nbsp;XXXX</div>

            <div className="card-info">
                <div>
                    <span className="label">VALID&nbsp;THRU</span>
                    <span className="value">05/24</span>
                </div>
                <div>
                    <span className="label">CVV</span>
                    <span className="value">09X</span>
                </div>
            </div>
        </div>
    );
}
export default CreditCard;