import "../styles/rorschach.css";
import "../styles/rorschach_v2.css";

export default function Rorschach() {

    const pac = new Audio("../media/Untitled video - Made with Clipchamp (1).mp4");

    const handlePlay = () =>  {

        pac.play(); 
    };

    const handleShare = (e) => {
        alert("Your input is not needed on this one. There are some ideas that may be interested in your opinion.");
        e.preventDefault();
    }


    return (
        <>
            <div id="top">
                <h2 id="headline">CIRCULAR!</h2>
                <h6 id="reasoning">Rorschach</h6>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div>
                    <div>
                        <img className="forests" src="../media/forest.jpg" alt="An image of a forest" />
                        <img className="intellectForest" src="../media/intelligence.png" alt="An image of the word, `Intelligence`" />
                        <img className="intellectAgainForest" src="../media/intelligence.two.png" alt="An image of the word, `Intelligence`" />
                    </div>

                    {/* <div>
                        <img className="intellectAgain" src="../media/intelligence.two.png" alt="An image of the word, `Intelligence`" />
                        <img className="intellect" src="../media/intelligence.png" alt="An image of the word, `Intelligence`" />
                        <img className="intellectAgain" src="../media/intelligence.two.png" alt="An image of the word, `Intelligence`" />
                    </div> */}

                </div>

                



                <div className="philosopher">
                    <img className="geeez" src="../media/geeeez.png" alt="An image of Jesus on the cross" />
                    <img className="mask" src="../media/mask.png" alt="An image of a smiling drama mask" />
                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="set">
                    <img className="armor" src="../media/image1.png" alt="An image of armor" />
                    <img className="armor2" src="../media/IMG_7880_front_armor.jpg" alt="An image of armor" />
                    <img className="armor3" src="../media/IMG_7879_back_armor.jpg" alt="An image of armor" />
                    <img className="heart" src="../media/Screenshot 2024-09-14 141738.png" alt="An image of a heart" />
                    <img className="listen" src="../media/Screenshot 2024-09-14 141652.png" alt="An image of a man listening" />
                    <img className="crown" src="../media/image0.png" alt="An image of a crown" />

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="fun">
                    <img className="mascot" src="../media/Screenshot 2024-09-06 212615.png" alt="A picture of several mascots" />
                    <img className="ebt" src="../media/Screenshot 2024-09-06 212734.png" alt="An image of an EBT card" />
                    <img className="lottery" src="../media/New_York_Lottery-1024x1020.png" alt="An image of the NYC lottery logo" />
                </div>

                <div className="utilities">
                    <img className="left" src="../media/human-leg-thigh-cartoon-animation-clip-art-cartoon-leg.jpg" alt="An image of the left leg" />
                    <img className="right" src="../media/right.jpg" alt="An image of the right leg" />
                    <img className="arm" src="../media/rightarm.jpg" alt="An image of the right arm" />
                    <img className="armLeft" src="../media/arms-clipart-arm-leg-2.jpg" alt="An image of the left arm" />
                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="backBone">
                    <button className="american" onClick={handlePlay}>Click Me for a Surprise!</button>
                </div>
                
                <div className="theatre">    
                
                    <video className="ticket1" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket2" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket3" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket4" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket5" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (1).mp4" type="video/mp4" />
                    </video>

                    <video className="ticket6" width="195" height="365" controls={false} autoPlay loop muted>
                        <source src="../media/Video (2).mp4" type="video/mp4" />
                    </video>

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="bc"> 

                    <a href="../media/Zoom to Fading Supernova in NGC 2525.mp4" target="_blank">
                        <img className="celeb" src="../media/text-1724971226247.png" alt="The word `CELEBRITIES`"/>
                        <img className="before" src="../media/text-1724971238624.png" alt="The word `BEFORE`" />
                        <img className="christ" src="../media/text-1724971251250.png" alt="The word `CHRIST`"/>
                    </a>

                </div>

                <div className="security">

                    <div className="security2">
                        <img className="spy" src="../media/watch-two.png" alt="An image of a surveillance camera" />
                    </div>

                    <div className="heaven">

                    <a href="../media/image0.jpeg">
                        <img className="misr" src="../media/sphinx.png" alt="An image of the Sphinx" />
                    </a>

                    </div>

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="hammer">

                    <img className="newYork" src="../media/newyork,newyork.jpg" alt="An photograph of a beautiful woman" />
                    <img className="adut" src="../media/adut.jpg" alt="A photograph of beautiful woman" />
                    <img className="confidence" src="../media/burning-bridge.png" alt="An image of a burning bridge" /> 
                </div>
                
                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
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
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div>

                    <img className="lockedIn" src="../media/unbreakable-chain.jpeg" alt="An image an unbreakable chain" />
                    <img className="arrow" src="../media/point-no-background.png" alt="An image of an arrow with points on both ends" /> 
                   
                </div>

                <div className="here">

                        <img className="humanBody" src="../media/text-1725083261005.png" alt="An image of the words `Human Body`" /> 

                        <img className="spirit" src="../media/text-1725083074688.png" alt="An image of the word `Spirit` " />

                </div>

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div className="boundary">

                    <div> 

                        <img className="together" src="../media/economy.jpeg" alt="An image of a person making a heart with their hands" />

                    </div>

                    <div className="lovely">

                        <img className="fence" src="../media/white-fence.png" alt="An image of a white pickett fence" />
                    </div>

                </div>   

                <div className="pieceOfMind">
                    <h6 id="thoughts">Opinions</h6>
                    <form action="opinions/soapbox" method="post">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="comments" placeholder="What do you see?" />
                        <button type="submit" onClick={handleShare}>Share</button>
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
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>

                <div>

                    <img className="stop" src="../media/text-1724885907102.png" alt="The phrase, `STOP WORK`" />
                    <img className="work" src="../media/text-1724885922384.png" alt="The phrase, `STOP WORK`" />
                    
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
                        <button type="submit" onClick={handleShare}>Share</button>
                    </form>
                </div>
                
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
                    {/* <video id="mlk" width="565" height="565" controls={false} autoPlay loop muted>
                        <source src="../media/My Movie 2.mp4" type="video/mp4" />
                    </video> */}
                    
                    <img id="cross" src="../media/earth-spin.gif" alt="An image of the Erth spinning" />
                    
                    {/* <video id="shoot" width="385" height="425" controls={false} autoPlay loop muted>
                        <source src="../media/Video.mp4" type="video/mp4" />
                    </video> */}
                </div>
                <div className="fabric">
                    <img id="optimistic" src="../media/space-space.gif" alt="An image of space, where we live." />
                </div>
            </div>
        </>
    );
};