import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";
import "./styles/card.css";


function Card(props){
    
    var check1=0,check2=0,check3=0,check4=0;
    
    let [oldlength,setlength]=useState(8);
    const handleslider=(e)=>{
        setlength(e.target.value);
        // console.log(setlength);
    }
    var characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$"
    var setpassword='';
    function generatepassword(){
        var password="";
        let uptochar=65;
        let startchar=0;

        var characterslength=oldlength;
        console.log(characterslength);
        for(let i=0;i<characterslength;i++)
        {
            let index=Math.floor(Math.random()*uptochar);
            // console.log(index);
            password+=characters.charAt(startchar+index);
        }
        console.log(password);
        setpassword+=password;
    }

    const handlegenerate=(e)=>{
        console.log("Handle Generate Invoked");
        generatepassword();
        props.parentCallback(e.setpassword);
        e.preventDefault();
    }
    const handleonclick1=('click',(e)=>{
        if(check1===0)
        {
                check1=1;
        }
        else{
            check1=0;
        }
        console.log(check1);
        console.log("Include Uppercase Activated");
    });
    const handleonclick2=('click',(e)=>{
        if(check2===0)
        {
                check2=1;
        }
        else{
            check2=0;
        }
        console.log(check2);
        console.log("Include LowerCase Activated");
    });
    const handleonclick3=('click',(e)=>{
        if(check3===0)
        {
                check3=1;
        }
        else{
            check3=0;
        }
        console.log(check3);
        console.log("Include Numbers Activated");
    });
    const handleonclick4=('click',(e)=>{
        if(check4===0)
        {
                check4=1;
        }
        else{
            check4=0;
        }
        console.log(check4);
        console.log("Include Special Characters Activated");
    });
    
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
                    <input type="checkbox" id="query1"  onChange={(e)=>handleonclick1(e)}/><span id="query-type">Include Uppercase Letters</span><br/>
                    <input type="checkbox"id="query2"onChange={(e)=>handleonclick2(e)}/><span id="query-type">Include Lowercase Letters</span><br/>
                    <input type="checkbox"id="query3"onChange={(e)=>handleonclick3(e)}/><span id="query-type">Include Numbers</span><br/>
                    <input type="checkbox"id="query4"onChange={(e)=>handleonclick4(e)}/><span id="query-type">Include Special Characters</span>
                </div>
                <div className="strength">
                    <div className="heading">
                        STRENGTH
                    </div>
                    <div className="strength-bars">
                        MEDIUM
                    </div>
                </div>
                <button className="generate" onClick={(e)=>handlegenerate(e)}>Generate</button>

        </div>
    )
}    
export default Card;