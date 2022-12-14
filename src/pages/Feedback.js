import React from "react";
import './feedback.css';


function Feedback({quote1, quote2, exp, ppic, Name, job}){
    return(
        <div className="box-section">

      <h1 className="quotes"><span className="quote1">{quote1}</span><span className="quote2">{quote2}</span></h1>
      
      <div className="exp-layer">
      <p className="exp">{exp}</p>
{/* closing tag for exp-layer */}
      </div>

        <div className="user-data">
            <img src= {ppic} alt="avatars" className="profile-pics" />

            <div className="profile">
                <p className="name">{Name}</p>
                <p className="job">{job}</p>
            </div>
            {/* closing tag for user data */}
        </div>
        </div>
    )
};

export default Feedback;
