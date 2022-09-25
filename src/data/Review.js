import React from "react";
import './review.css'
import Feedback from "../pages/Feedback";
import { review } from "./reviewdata";
function Review(){
    const experience = review.map(user=>{
        return(
            <Feedback key={user.id}
            {...user} 
            />
        )
    })

    return(
        <div>

<div>
<h1 className="review-header"> What People are saying</h1>
{experience}
</div>


        </div>
    )
};

export default Review;