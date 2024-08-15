import "../styles/signUp.css";
import { useState } from "react";

export default function SignUp() {
    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/create/newuser", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            const timing = await response.json();

            if (!response.ok) {
                alert(timing.error);
            } else {
                alert(timing.message);
                window.location.href = "/welcome";
            }
        } catch (error) {
            console.error("ERROR", error);
        }
    };

    return (
        <>
            <div className="information">
                <div id="begin">
                    <form className="gather" onSubmit={handleSubmit} method="POST">
                        <input type="text" name="email" placeholder="email" value={newUser.email} onChange={handleChange} required />
                        <input type="text" name="username" placeholder="username" value={newUser.username} onChange={handleChange} required />
                        <input type="password" name="password" placeholder="password" value={newUser.password} onChange={handleChange} required />
                        <button id="go">Submit</button>
                    </form>
                </div>
                <div id="structureOnce">
                    <img id="structureTwice" src="../media/structure!.png" alt="The word `Structure!!` written in graffiti" />
                </div>
                <div id="circular">
                    <p style={{ color: "darkolivegreen" }}>
                        Circular! Circular!Circular!Circular!
                    </p>
                </div>
                <div id="circular2">
                    <p>Circular! Circular!Circular!Circular!</p>
                </div>
                <div id="circular3">
                    <p style={{ color: "crimson" }}>
                        Circular! Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!Circular!
                    </p>
                </div>
            </div>
        </>
    );
};