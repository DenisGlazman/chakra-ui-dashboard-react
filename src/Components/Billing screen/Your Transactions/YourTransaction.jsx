import './Your_Transaction.css'
import { useState, useEffect } from "react";

const YourTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/transactions') // убедись, что json-server запущен
            .then(res => res.json())
            .then(data => setTransactions(data));
    }, []);

    const groupByDay = (data) => {
        const groups = {};
        data.forEach(item => {
            if (!groups[item.dayLabel]) groups[item.dayLabel] = [];
            groups[item.dayLabel].push(item);
        });
        return groups;
    };

    const grouped = groupByDay(transactions);

    const getIcon = (status) => {
        if (status === 'up') {
            return (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
            );
        }
        if (status === 'down') {
            return (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
            );
        }
        if (status === 'pending') {
            return (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                </svg>
            );
        }
    };

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <div className="transactions-title">Your Transactions</div>
                <div className="transactions-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3 4h18M4 8h16M5 12h14M6 16h12" stroke="#a0aec0" strokeWidth="2"/>
                    </svg>
                    23 - 30 March 2020
                </div>
            </div>

            {Object.entries(grouped).map(([day, items]) => (
                <div key={day} className="transaction-group">
                    <div className="transaction-group-label">{day}</div>
                    {items.map((item, index) => (
                        <div key={index} className="transaction-item">
                            <div className="transaction-left">
                                <div className={`transaction-icon ${item.status}`}>
                                    {getIcon(item.status)}
                                </div>
                                <div className="transaction-details">
                                    <div className="transaction-name">{item.name}</div>
                                    <div className="transaction-date">{item.date}</div>
                                </div>
                            </div>
                            <div className={`transaction-amount ${
                                item.amount.includes('-') ? 'negative' :
                                    item.amount === 'Pending' ? 'pending' : 'positive'
                            }`}>
                                {item.amount}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default YourTransactions;
