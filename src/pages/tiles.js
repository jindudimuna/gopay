import React from "react";
import './about.css';


function AboutBox({heading, avatar, info}){
    return(
        <div className="tiles-section">
 
            <img src={`../images/${avatar}`} alt="icons" className="tile-icons"/>

            <div className="tile text">
            <h1 className="info-text">{heading}</h1>
            <h1 className="info-text-2">{info}</h1>
            </div>
     
        </div>
    )
}

export default AboutBox;

