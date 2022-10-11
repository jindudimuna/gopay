import React from "react";
import './Hero2.css';

function Hero2(){
    return(
        <div className="hero2-section">
            <div>
            <h1 className="hero2-header"> Why not give it a quick try?</h1>

            <p className="hero2-info">Pay for transactions with ease to anywhere around the world with your mobile device</p>
            {/* closing tag for left section div */}
            </div>

            <div className="hero2-button">

                <button className="get-started">Get started</button>
                {/* closing tag for hero-2 button ie right side */}
            </div>
            {/* closing tag for hero2-section */}
        </div>
    )
}

export default Hero2;