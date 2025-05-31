import React, { useEffect, useState } from "react";
import "./Conversations.css";

export default function Conversations() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/conversations")
            .then(res => res.json())
            .then(setMessages);
    }, []);

    return (
        <div className="conversations_card">
            <h3>Conversations</h3>
            {messages.map(conv => (
                <div key={conv.id} className="conversation">
                    <img src={conv.avatar} alt={conv.name} />
                    <div>
                        <p><strong>{conv.name}</strong></p>
                        <p className="message">{conv.message}</p>
                    </div>
                    <button className="reply-btn">REPLY</button>
                </div>
            ))}
        </div>
    );
}
