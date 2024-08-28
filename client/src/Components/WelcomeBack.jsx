import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/welcomeBack.css";

export default function WelcomeBack() {

    const [person, setPerson] = useState({ username: "", hashPassword: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setPerson(person => ({
            ...person,
            [name]: value
        }));
    }

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://interglobal-circular.onrender.com/users/webtraveller", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(person)
            });

            const entrance = await response.json(); 

            if(!response.ok) {
                alert(entrance.error);
            } else {
                alert(entrance.message); 
                navigate("/circular"); 
            }
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
                        <input type="password" name="hashPassword" placeholder="password" value={person.hashPassword} onChange={handleChange} required />
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