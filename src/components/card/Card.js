import React from "react";
import { useState } from "react";
import "./styles/card.css";


function Card(props){
    
    var slider,output;
    let [oldlength,setlength]=useState(8);
    const handleslider=(e)=>{
        slider=e.target.value;
        // console.log(e.target.value);
        setlength(e.target.value);
        // console.log(setlength);
    }
    return(
        <div className="card">
            <div className="password-strength">
                <div className="card-header">
                    <div className="heading">
                        Character Length
                    </div>
                    <div className="character-count" id="characters">
                        {oldlength}
                    </div>
                </div>
                <div className="slider">
                    <input type="range" id="MyRange" min={4} value={oldlength} max={20} onChange={(e) => handleslider(e)} />
                </div>
            </div>
                <div className="query">
                    <input type="checkbox"/><span id="query-type">Include Uppercase Letters</span><br/>
                    <input type="checkbox"/><span id="query-type">Include Lowercase Letters</span><br/>
                    <input type="checkbox"/><span id="query-type">Include Numbers</span><br/>
                    <input type="checkbox"/><span id="query-type">Include Special Characters</span>
                </div>
                <div className="strength">
                    <div className="heading">
                        STRENGTH
                    </div>
                    <div className="strength-bars">
                        MEDIUM
                    </div>
                </div>
                <button className="generate">Generate</button>

        </div>
    )
}    
export default Card;