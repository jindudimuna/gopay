import React from "react";
import './quest.css';


function Questions({question, answer}){
    return(
        <div className="replies">
        
             <h2 className="question">{question}</h2>
            <h2 className="answer">{answer}</h2>
   
         
        </div>
    )
}

export default Questions;