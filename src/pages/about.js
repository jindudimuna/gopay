import React from "react";
import './about.css'

function About (){
    return(
        <div className="main">
       
        <div className="header">
            <h1 className="header-text">
                Allocate payments as you see fit
            </h1>

            <h2 className="header-text-2">
                With Gopay  you can set out specific amounts for expenses over the course of the month.

            </h2>
            {/* closing tag for header */}
        </div>
       {/* closing tag for main */}
        </div>
    )
};

export default About;