import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcomeBack.css";

export default function WelcomeBack() {

    const [person, setPerson] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setPerson(person => ({
            ...person,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://global-circular.onrender.com/create/webtraveller", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(person)
            });

            const bugResearch = response.headers.get("content-type");

            if (!response.ok) {
                if (bugResearch && bugResearch.includes("application/json")) {
                    const trouble = await response.json();
                    alert(trouble.error);
                }
            } else {
                if (bugResearch && bugResearch.includes("application/json")) {
                    const strike = await response.json();
                    localStorage.setItem("secret", strike.secret);
                    navigate("/home");
                } else {
                    const approve = await response.text();
                }
            }

            // const strike = await response.json();

            // if(!response.ok) {
            //     const trouble = await response.json();
            //     alert(trouble.error);
            // } else {
            //     const strike = await response.json();
            //     localStorage.setItem("secret", strike.secret);
            //     navigate("/home");
            // }
        } catch (error) {
            console.error("ERROR", error);
        }
    };

return (
    <>
        <div className="spinal">
            <div id="enter">
                <form id="login" onSubmit={handleSubmit} method="POST">
                    <input type="text" name="username" placeholder="username" value={person.username} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="password" value={person.password} onChange={handleChange} required />
                    <button id="submit" type="submit">Enter!</button>
                </form>
            </div>

            <div id="movement">

                <img id="fashion" src="../media/fabric.gif" alt="An image of moving fabric" />

            </div>


            <div id="page">
                <p id="book">
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!  Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular! Circular!
                    Circular Circular! Circular!
                </p>
            </div>
        </div>
    </>
);
};