
import React, { useEffect, useState } from 'react';
import './Billing_Information.css';

const BillingInformation = () => {
    const [billing, setBilling] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/billingInfo')
            .then(res => res.json())
            .then(data => setBilling(data));
    }, []);

    return (
        <div className="billing-information-container">
            <h2>Billing Information</h2>
            <ul className="billing-list">
                {billing.map((item) => (
                    <div className="billing-card" key={item.id}>
                        <div className="billing-info">
                            <div className="billing-info-header">
                                <p className="billing-name">{item.name}</p>
                                <div className="billing-actions">
                                    <button className="delite-btn"><img src='/Billing page images/Delete.svg' alt='delete'/></button>
                                    <button className="edit-btn">
                                        <img src='/Billing page images/Edit .svg' alt='edit'/>
                                        <img src='/Billing page images/EDIT.svg' alt='edit' className='edit-icon'/>
                                    </button>
                                </div>

                            </div>

                            <div className="billing-company">Company Name: <span>{item.company}</span></div>
                            <div className="billing-email">Email Address: <span>{item.email}</span></div>
                            <div className="billing-vat">VAT Number: <span>{item.vat}</span></div>
                        </div>

                    </div>
                ))}
            </ul>
        </div>
    );
};

export default BillingInformation;