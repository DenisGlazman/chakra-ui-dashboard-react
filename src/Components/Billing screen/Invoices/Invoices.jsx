import './Invoices.css'
import { useState, useEffect } from "react";

export default function Invoices() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch("./invoices.json")
            .then((res) => res.json())
            .then(setInvoices);
    }, []);

    return (
        <div className="invoices-container">
            <div className='invoices-header'>
                <h2>Invoices </h2>
                <button className='view_all'>VIEW ALL</button>
            </div>


            <ul>
                {invoices.map((inv) => (
                    <div className='invoice-row' key={inv.id}>
                        <div className='invoices-icon'>
                            <div className='invoices-date'>{inv.date}</div>
                            <div className='invoices-number' >#{inv.number}</div>
                        </div>
                        <div className='invoices-amount'>${inv.amount} <img src='Billing_page_images/text.svg' alt='text'/><img src='Billing_page_images/PDF.svg' alt='pdf'/></div>

                    </div>
                ))}
            </ul>
        </div>
    );
}
