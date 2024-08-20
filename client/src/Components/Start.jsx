import { Link } from "react-router-dom";
import "../styles/start.css";

export default function Start() {
    return (
        <>
            <div className="foundation">
                <div className="cradle">
                    <div className="start">
                        <p id="intro" style={{ color: "fuchsia" }}>
                            Within this application, one shall remain himself. Though I do not speak for any person due to the constant advancement of time and sentiments, I can whole heartedly say I also do not even speak for myself!
                        </p>
                    </div>
                    <div className="buttons">
                        
                        <Link to="/quick">
                            <button className="signUp">Sign Up!</button>

                        </Link>

                        <Link to="/welcome">
                            <button className="login">Login!</button>
                        </Link>

                    </div>
                    <div className="flashingLights">
                        <img src="../media/famous!.gif " alt="An image of flashing lights from cameras" />
                    </div>
                </div>
            </div>
        </>
    );
};