import React from "react";
import './hero.css'
import Hero1 from '../assets/user4.JPG'
import Hero2 from '../assets/user2.JPG'
import Hero3 from '../assets/user3.JPG'

function Hero(){

return(
<>
    <div className="hero">
<div className="hero-text">
<h1 className="intro-text"> Easy Way To Process Your <span className="highlight">Payments</span></h1> 
<h1 className="sub-text"> Pay for transactions with ease to anywhere around the world with your mobile device</h1>

<div  className="btn">

<button className="buttons">Get Started</button>
<button className="buttons">Contact Sales</button>



</div>

</div>

<div className="hero-images">
<div className="hero-image-1">
    <img src={Hero1} alt="White man smiling" className="users"/>
</div>
<div className="hero-image-2">
    <img src={Hero2} alt="Black girl smiling for representation" className="usersF"/>
    <img src={Hero3} alt="white girl smiling for representation" className="usersF"/>


</div>
</div>
    </div>


    </>


)

}
export default Hero;