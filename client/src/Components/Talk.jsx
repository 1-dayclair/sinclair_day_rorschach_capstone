import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "./Father";
import {io} from "socket.io-client";

const HitMe = () => {
    const { currentUser } = useUser();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {

        if(!currentUser) return; 

        const socket = io("https://interglobal-circular.onrender.com", {
            path: "/socket.io",
            transports: ["websocket"], 
        });

        socket.on("newMessage", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from WebSocket server :(");
        });

        return () => {
            socket.off("newMessage");
            socket.disconnect();
        };
}, [currentUser]);

const handleSubmit = async (e) => {
    e.preventDefault();

    if(!currentUser) {
        alert("Only logged in users can send messages...")
        return;
    }

    const newMessage = { message, username: currentUser.id};

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
        const response = await fetch("https://interglobal-circular.onrender.com", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMessage),
        });

        const data = await response.json();
        if (!data.success) {
            console.error("Error sending message:", data.error);
        }
    } catch (error) {
        console.error("Error communicating:", error);

        setMessage("");
    };

    return (
        <div>
            <h2><strong>Intl Communications Center</strong></h2>
            <h3>Welcome {currentUser?.username || "Anonymous" }</h3>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}:</strong> {msg.message}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="All ears"
                required />
                <button type="submit">Send it</button>
            </form>
        </div>
    )
}
}

export default HitMe;