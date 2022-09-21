import React from "react";
import './about.css'
import AboutBox from "./tiles";
import { tiles } from "../data/tilesdata";
import banner from '../assets/user1.JPG';
function About (){

    const tileElements = tiles.map(tile=>{
        return (
            <AboutBox key={tile.id}
            {...tile} 
            />
        )
    })

    return(
        <div className="main">

        <div className="header">
            <h1 className="header-text">
                Allocate payments as you see fit
            </h1>

            <h2 className="header-text-2">
                With Gopay  you can set out specific amounts for expenses over the course of the month.

            </h2>
        
      
                {tileElements}
                
                    {/* closing tag for header */}
        </div>

    
            <div className="banner">
            <img src={banner} alt="white man on his PC" className="banner-pic" />
            {/* closing tag for banner */}
        </div>

       {/* closing tag for main */}
        </div>
    )
};

export default About;