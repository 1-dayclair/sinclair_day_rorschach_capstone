import "../styles/rorschach.css";
import MediaQuery from "react-responsive"; 

export default function Rorschach() {

    const pac = new Audio("../media/Untitled video - Made with Clipchamp (1).mp4");

    const handlePlay = () =>  {

        pac.play(); 
    };


    return (
        <>
            <div id="top">
                <h2 id="headline">CIRCULAR!</h2>
                <h6 id="reasoning">Rorschach</h6>

                <div>
                    <pre>
                    <p style={{display: "inline", color: "blue", fontSize: "30px", fontWeight: "bold" }}>MORALLY STRATEGIC, JEAN MICHEL BASQIAUT &  AND RICHARD PRYOR TAKE A PHOTO, TOGETHER!!,

                        MARJELLY IS A #FAST-PACED METROPOLITAN MUSEUM. !!!ACTIVELY SCOURING COMPANY LOGS FOR SECRETS!!! BIG
                            BIG BUSINESS DISCOVERS IMMORTALITY! ______THIS JUST IN!! HIS DAUGHTER'S NAME IS PANTHER
                HIS SON'S NAME'S IMMACULATE...THERE'S A PIMP AND HIS H@%, "BABY, YOU GOTTA WATCH OUT FOR THAT OPEN-HAND, 
                                    ---***BLAOWWW!!!!***--- HOOK!" #ART-WORLD FETISH-MONGERERS, BEWARE!! 
                                    I REPEAT!! CANNABALIZE YOUR LANDLORD!! AND YOUR DELI MAN!! THEY MAKE MONEY 
                        EXPENSIVE? ROMANCE OF TAXES!! PARASITES IN HIS FISH!!! PARASITES IN HIS SUPER FISH, PARASITES IN 
                                        HIS SUPERFICIAL, SUPERFICIAL, SUPERFICIAL SUPREMACY!! PLEASURE FOREVER, PLEASURE 4EVER 
                                TODAY'S BUDDHA MAN. GIVE ME A SECOND TO DOWNLOAD MY EGO... YOUR EGO IS CONNECTED SIRE. 
                    THERE'S A LARGE LAAARGE MAJOR CRIME SYNDICATE AT LARGE AND THEY ARE MASTERS OF PROFESSIONALISM 
                                ALL HE HAS IS HIS SENSES, AND ALONG WITH HIS SENTIMENT, BOOM!! HE'S POSSESSED BY ONE
                                                OF THE WILLS THAT COLLECTS RECONNAISSANCE AGAINST THE FORTRE$$ ;) STAY TUNED FOR HIS NEXT
                                    SHOW @WHATHAVEYOUHEARDABOUTME?   
                    </p>
                    </pre>
                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>

                <div className="backBone">
                    <button className="american" onClick={handlePlay}>Click Me for a Surprise!</button>
                </div>
                
                <div className="theatre">
                
                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>

                <div> 

                    <a href="../media/Zoom to Fading Supernova in NGC 2525.mp4" target="_blank">
                        <img className="celeb" src="../media/text-1724971226247.png" alt="The word `CELEBRITIES`"/>
                        <img className="before" src="../media/text-1724971238624.png" alt="The word `BEFORE`" />
                        <img className="christ" src="../media/text-1724971251250.png" alt="The word `CHRIST`"/>
                    </a>

                </div>

                <div className="heaven">

                    <img className="spy" src="../media/watch-two.png" alt="An image of a surveillance camera" />
                    <img className="misr" src="../media/sphinx.png" alt="An image of the Sphinx" />

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>

                <div className="hammer">

                    <img className="newYork" src="../media/newyork,newyork.jpg" alt="An photograph of a beautiful woman" />
                    <img className="confidence" src="../media/burning-bridge.png" alt="An image of a burning bridge" /> 
                    <img className="adut" src="../media/adut.jpg" alt="A photograph of beautiful woman" />
                </div>
                
                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>
                
                <div className="sexy">
                    {/* <img className="couple" src="../media/economy.jpeg" alt="An image of a couple"/> */}
                    <img className="power" src="../media/text-1723724505281.png" alt="An image of the word `POWER`" />
                    <img className="surprise" src="../media/surprise.jpg" alt="A couple having fun" />

                </div>

                <div className="sexxy">
                    <img className="surprise2" src="../media/man1.jpg" alt="A man presenting the word `POWER`" />
                    <img className="power2" src="../media/text-1723641526421.png" alt="An image of the word `POWER`" />
                    
                    <img className="power3" src="../media/text-1723724602743.png" alt="An image of the word `POWER`" /> 
                    <img className="surprise3" src="../media/lady.jpg" alt="A woman looking up towards the word `POWER`" />
                </div>

                <div className="sexxxy">
                    <img className="power4" src="../media/text-1724215874600.png" alt="The words `MAXIMUM PROFIT` as an image"/>
                    <img className="surprise4" src="../media/man.jpg" alt="A man points up with his finger, excitedly"/>
                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit">Share</button>
                    </form>
                </div>

                <div> 

                    <img className="together" src="../media/economy.jpeg" alt="An image of a person making a heart with their hands" />
                    <img className="fence" src="../media/white-fence.png" alt="An image of a white pickett fence" />

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

                <div>

                    <img className="stop" src="../media/text-1724885907102.png" alt="The phrase, `STOP WORK`" />
                    <img className="work" src="../media/text-1724885922384.png" alt="The phrase, `STOP WORK`" />
                    {/* <img className="stop2" src="../media/text-1724885938722.png" alt="The phrase, `STOP WORK`" />  */}
                    
                    <video className="dentist" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Untitled video - Made with Clipchamp (2).mp4" type="video/mp4" />
                    </video>

                </div>

                <div>

                    <img className="work2" src="../media/text-1724883600666.png" alt="The phrase, `STOP WORK`" />

                </div>

                <div>

                <video className="dentist" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
                    </video>

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