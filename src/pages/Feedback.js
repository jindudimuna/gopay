import React from "react";
import './feedback.css';


function Feedback({quote1, quote2, exp, ppic, Name, job}){
    return(
        <div className="box">
            <div>

      <h1 className="quotes"><span className="quote1">{quote1}</span><span className="quote2">{quote2}</span></h1>

      <h1 className="exp">{exp}</h1>
      </div>

        <div className="user-data">
            <img src= {ppic} alt="avatars" className="profile-pics" />

            <div className="profile">
                <h1 className="name">{Name}</h1>
                <h1 className="job">{job}</h1>
            </div>
            {/* closing tag for user data */}
        </div>
        </div>
    )
};

export default Feedback;
