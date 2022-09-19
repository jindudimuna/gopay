import React from "react";
import Nav from '../assets/Gopay.png'
import './Navbar.css'
function NavBar(){
    return(
        <div className="navigation">
            <div className="logo">
            <img src={Nav} alt="logo" className="logo-icon"/>

            </div>

       <ul className="nav-links">
         <li>Business</li>      
         <li>Pricing</li>
         <li>Features</li>
         <li>About</li>


       </ul>

        </div>
    )
};

export default NavBar;