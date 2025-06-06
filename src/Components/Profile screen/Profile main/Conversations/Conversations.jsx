import React, { useEffect, useState } from "react";
import "./Conversations.css";

export default function Conversations() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('./conversations.json')
            .then((res) => res.json())
            .then((data) => setMessages(data))
            .catch((error) => console.error("Error fetching data:", error));
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
