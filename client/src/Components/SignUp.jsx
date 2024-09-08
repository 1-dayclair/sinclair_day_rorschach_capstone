import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signUp.css";

export default function SignUp() {
    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const navigate = useNavigate();

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

            console.log("Data in transit :)", newUser);

            if (!newUser || !newUser.username || !newUser.email) {
                throw new Error("Some requirements are missing here...");
            } 

            const response = await fetch("https://interglobal-circular.onrender.com/create/newuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            console.log(response.status);
            
            const timing = await response.json();

            if (!response.ok) {
                alert(timing.error);
            } else {
                alert(timing.message);
                navigate("/login");
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

                <div className="info">
                    <h3><em>Notice: Upon signing up or logging into the site, our system may take one to five minutes to communicate the data. Patiently wait or hit enter a few times.</em></h3>
                </div>
                <div id="structureOnce">
                    <img className="building" id="structureTwice" src="../media/structure!.png" alt="The word `Structure!!` written in graffiti" />
                </div>
                <div id="circular">
                    <p style={{ color: "darkolivegreen" }}>
                        Circular! Circular!Circular!Circular!
                    </p>
                </div>
                <div id="circular2">
                    <p>Circular! Circular!Circular!Circular!</p>
                </div>
            </div>
        </>
    );
};