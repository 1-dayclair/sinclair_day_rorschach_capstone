import App from "../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/rorschach.css";

export default function Rorschach() {
    const navigate = useNavigate();

    // useEffect handles the token/ authenticates the user
    // useEffect(() => {
    //     const token = localStorage.getItem("token");

    //     console.log("Here's a secret", token)
    //     if(!token) {
    //         navigate("/welcome");
    //         console.log("Secret passed along successfully.")
    //     }
    // }, [navigate]);
    // Navigate redirects user to login page if login information isn't valid^^



    return (
        <>
            <div id="top">
                <h2 id="headline">CIRCULAR!</h2>
                <h6 id="reasoning">Rorschach</h6>
                <div className="sexy">
                    <img className="couple" src="../media/economy.jpeg" alt="An image of a couple"/>

                </div>




                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>
                <div className="fortresses">
                    <img className="pov" src="../media/fortress-3.png" alt="The word, 'fortress', written in graffiti" />
                    <img className="pov2" src="../media/fortress-4.png" alt="The word, 'fortress', written in graffiti" />
                    <img className="pov3" src="../media/fortress-6.png" alt="The word, 'fortress', written in graffiti" />
                    <img className="will" src="../media/will-graffiti.png" alt="The word, 'will', written in graffiti" />
                    <img className="will2" src="../media/will-graffiti.png" alt="The word, 'will', written in graffiti" />
                    <img className="will3" src="../media/will-graffiti.png" alt="The word, 'will', written in graffiti" />
                    <img className="will4" src="../media/will-graffiti.png" alt="The word, 'will', written in graffiti" />
                    <img className="will5" src="../media/will-graffiti.png" alt="The word, 'will', written in graffiti" />
                </div>
                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="Stand atop your soapbox..." />
                        <button type="submit">Share</button>
                    </form>
                </div>
                {/* <div className="adjust">
                    <p className="libre-barcode-39-regular" id="voice">
                        <em><b>!!!EXTRA EXTRA!!!</b></em> READ, READ, <b>READ!!!</b> It's all very super serious to be/
                        LOOK!! It's fascinating, this fascination, a dominant <em><b>force</b></em> to be ON TOP!!
                    </p>
                </div> */}
                <div id="hebrew">
                    <img id="first" src="../media/hebrew.jpg" alt="An image of the Hebrew symbol" />
                    <img id="second" src="../media/christianity.jpg" alt="An image of the Christian cross" />
                    <img id="third" src="../media/crescent.jpg" alt="An image of the representational symbol of Islam" />
                    <img id="supreme" src="../media/money-eye.jpg" alt="An image of the eye of providence?" />
                </div>
                <div id="usa">
                    <img id="merica" src="../media/usa-usa.gif" alt="An American flag blowing in the wind." />
                    <img id="shark" src="../media/shark-2.gif" alt="A shark swimming on the Internet" />
                </div>
                <div id="medicine">
                    <div id="doctor">
                        <img id="patient" src="../media/turtle.gif" alt="A turtle swim towards lettuce, or as a matter of fact, a yummy Dollar sign" />
                        <img id="cash" src="../media/dollar-sign.gif" alt="Cash sign, dollar sign money. money baby" />
                        <img id="hypno" src="../media/hypnoo-2.gif" alt="A pink and purple hypnotizing spinning circle" />
                    </div>
                </div>
                <div className="future">
                    <img id="river" src="../media/river.GIF" alt="A flowing river" />
                </div>
                <div className="cross">
                    <video id="mlk" width="565" height="565" controls={false} autoPlay loop muted>
                        <source src="../media/My Movie 2.mp4" type="video/mp4" />
                    </video>
                    <img id="cross" src="../media/earth-spin.gif" alt="A processional cross from ca.1500" />
                    <video id="shoot" width="385" height="425" controls={false} autoPlay loop muted>
                        <source src="../media/Video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="fabric">
                    <img id="optimistic" src="../media/space-space.gif" alt="An image of space, where we live." />
                </div>
            </div>
        </>
    );
};