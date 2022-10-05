import React from "react";
import './Uses.css';
import save from '../assets/saving.png';
import travel from '../assets/travel.png';
import atm from '../assets/Creditcard.png';
import destination from '../assets/Destination.png';
function Uses(){
    return(
        <div className="body">

            <div className="top-level">
     
     
          <img src={save} alt="savings" className="icons-uses" />

            <div className="info">
                <h1 className="intro-text-u">
                    Saving has never been easier
                </h1>

                <p className="sub-text-u">
                    With <span className="Highlight">Go</span><span className="Highlight2">Pay</span> you can set out
                    specific amounts for savings at the end of the month.
                </p>
                {/* closing tag for info */}
            </div>
{/* closing tag for top level */}
            </div>

            <div className="second-level">
                <div className="second-info">
                    <h1 className="intro-text-u">
                        Actualise your dreams to study abroad
                    </h1>

                    <p className="sub-text-u">
                        Keep track of how much you actually rake in.
                        Mismanagement? not under our watch.
                    </p>
                    {/* closing tag for second-info */}
                </div>

                <img src={travel} alt="travel" className="icons-uses" />
                {/* closin gtag for second level */}
            </div>

            <div className="third-level">

                <img src={atm} alt="credit card" className="icons-uses" />

                <div className="third-info">

                    <h1 className="intro-text-card">
                        Get loans at a discounted rate with us
                    </h1>

                    <p className="sub-text-u">
                        With <span className="Highlight">Go</span><span className="Highlight2">Pay</span> you get one 
                        off loans with minimal interest as part of our benefits
                    </p>
                </div>

                {/* closing tag for third-level */}
            </div>

            <div className="fourth-level">

                <div className="fourth-info">
                    <h1 className="intro-text-u">
                            Make those Vacation plans a reality
                    </h1>

                    <p className="sub-text-u">
                        Turn that lifelong getaway plan to fruitionwithout breaking a sweat

                    </p>
                    {/* closing tag for fourth info */}
                </div>

                <img src={destination} alt ="destination" className="icons-uses" />
                {/* closing tag for fourth-level */}
            </div>
{/* closing tag for main div */}
        </div>
    )
};


export default Uses;