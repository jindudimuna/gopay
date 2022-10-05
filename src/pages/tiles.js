import React from "react";
import './about.css';


function AboutBox({heading, avatar, info}){
    return(
        <div className="tiles-section">
 
            <img src={`../images/${avatar}`} alt="icons" className="tile-icons"/>

            <div className="tile text">
            <p className="info-text">{heading}</p>
            <p className="info-text-2">{info}</p>
            </div>
     
        </div>
    )
}

export default AboutBox;

