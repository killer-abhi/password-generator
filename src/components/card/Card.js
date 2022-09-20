import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/card.css";


function Card(){
    
    var check1=0,check2=0,check3=0,check4=0;
    let [oldlength,setlength]=useState(8);
    let [strength,setstrength]=useState("MEDIUM");
    const [oldpassword,newpassword]=useState("Password");
    
    const handleslider=(e)=>{
        setlength(e.target.value);
        let length=e.target.value;
        if(length>4 && length <8)
        {
            setstrength("LOW");
        }
        else if((length>8 ||length===8)&& length<14)
        {
            setstrength("MEDIUM");
        }
        else if((length>14 ||length===14)&& length<20)
        {
            setstrength("HIGH");
        }
        // console.log(setlength);
    }
    var setpassword='';
    function generatepassword(){
        var characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$"
        var password="";
        let uptochar=26;
        let startchar=0;

        if(check1===1)
        {
            uptochar=52;
        }
        else if(check2===1)
        {
            uptochar=52;
            startchar=27;
        }
        else if(check3===1)
        {
            uptochar=62;
        }
        else if(check4===1)
        {
            uptochar=65;
        }

        let characterslength=oldlength;
        console.log(characterslength);
        for(let i=0;i<characterslength;i++)
        {
            let index=Math.floor(Math.random()*uptochar);
            // console.log(index);
            password+=characters.charAt(startchar+index);
        }
        console.log(password);
        setpassword+=password;
        newpassword(password);
    }

    useEffect(generatepassword,[]);
    const handlegenerate=(e)=>{
        console.log("Handle Generate Invoked");
        generatepassword();
    }

    const handlecopy=(e)=>{
        navigator.clipboard.writeText(oldpassword);
        window.alert("Password Copied To Clipboard");
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
            <div className="password" >
                <div className="new-password" id='current-password'>
                    {oldpassword}
                </div>
                <div className="copy-icon" onClick={(e)=>handlecopy(e)}>
                </div>
            </div>
            <div className="data">
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
                        
                        <div className="query-item"><input type="checkbox" id="query1"  onChange={(e)=>handleonclick1(e)}/><span id="query-type">Include Uppercase Letters</span></div><br/>
                        <div className="query-item"><input type="checkbox" id="query2"  onChange={(e)=>handleonclick2(e)}/><span id="query-type">Include Lowercase Letters</span></div><br/>
                        <div className="query-item"><input type="checkbox" id="query3"  onChange={(e)=>handleonclick3(e)}/><span id="query-type">Include Numbers</span></div><br/>
                        <div className="query-item"><input type="checkbox" id="query4"  onChange={(e)=>handleonclick4(e)}/><span id="query-type">Include Special Characters</span></div><br/>
                        {/* <input type="checkbox"id="query2"onChange={(e)=>handleonclick2(e)}/><span id="query-type">Include Lowercase Letters</span><br/>
                        <input type="checkbox"id="query3"onChange={(e)=>handleonclick3(e)}/><span id="query-type">Include Numbers</span><br/>
                        <input type="checkbox"id="query4"onChange={(e)=>handleonclick4(e)}/><span id="query-type">Include Special Characters</span> */}
                    </div>
                    <div className="strength">
                        <div className="heading">
                            STRENGTH
                        </div>
                        <div className="strength-level">
                            <div className="strength-text">
                                {strength}
                            </div>
                            <div className="strength-bars">
                                <div className="level1"></div>
                                <div className="level2"></div>
                                <div className="level3"></div>
                                <div className="level4"></div>
                            </div>
                        </div>
                    </div>
                    <button className="generate" onClick={(e)=>handlegenerate(e)}>GENERATE</button>
                </div>
        </div>
    )
}    
export default Card;