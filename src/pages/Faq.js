import React from "react";
import { FAQuestions } from "../data/FaqData";
import './faq.css';
import Questions from "./questions.js";


function Faq(){

    const response = FAQuestions.map(response =>{
        return(
            <Questions key={response.id}
            {...response}
            />
        )
    })

    return(
        <div className="faq-container">


        <div className="faq-section">
        <h1 className="Faq-header">Frequently Asked Questions</h1>
        
        
        {/* closing tag for faq-section */}
        </div>


            <div className="response-section">
            {response}
            {/* closing tag for response-section */}
            </div>


<div className="hidden">


           
    <div className="extra">
        <h2 className="question">Are Virtual cards available?</h2>
        <h2 className="answer">Yes we have virtual cards which work for payments in USD, EUR, GDP</h2>
        {/* closing tag for extra-1 */}
    </div>
        
{/*         
    <div className="faq-section-2">
        <h1 className="Faq-header"> See more Frequently asked questions</h1>
{/* closing tag of faq-section-2 */}
      

    {/* </div>  */}



    <div className=" extra">
        <h2 className="question">How much can I start with?</h2>
        <h2 className="answer">We don't have a minimum opening balance, we're ready when you are!</h2>
        {/* closing tag for extra-2 */}
    </div>
        
        {/* closing tag for hidden */}
    </div>    
     
{/* closing tag for faq-container */}
        </div>
    )
}

export default Faq; 