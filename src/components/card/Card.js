import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/card.css";

function Card() {

  let [oldlength, setlength] = useState(6);
  let [oldstrength, setstrength] = useState("LOW");
  const [oldpassword, newpassword] = useState("Password");


  let defaultchecks = [0, 0, 0, 0, oldlength];
  let [oldchecks,newchecks]=useState(defaultchecks);

  function resetchecks(){
    newchecks = [0, 0, 0, 0, oldlength];
  }
  function error(){
    newpassword("!!! ERROR");
  }
  const handleslider = (e) => {
    setlength(e.target.value);
    strength();
  };
  
  var setpassword="";
  function generatepassword() {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var special = "@#$";

    let uptochar = 0;
    var characters ="";
    var password = "";
    var count=0;
    for(let i=0;i<4;i++){
      if(oldchecks[i]===0)
      {
        count++;
      }
    }
    // console.log(count);
    // console.log(oldlength);
    if(count===4){
      error();
    }

    if (oldchecks[0] === 1) {
      uptochar +=26;
      characters+=upper;
      // console.log(characters);
    } 
    
    if (oldchecks[1] === 1) {
      // console.log(characters);
      characters+=lower;
      uptochar+= 26;
    } 
    if (oldchecks[2] === 1) {
      characters+=numbers;
      uptochar +=10 ;
      // console.log(characters);
    } 
    if (oldchecks[3] === 1) {
      characters+=special;
      uptochar +=3;
      // console.log(characters);
    }

    for (let i = 0; i < oldlength; i++) {
        let index = Math.floor(Math.random() * uptochar);
        password += characters.charAt(index);
    }
    // console.log(password);
    setpassword += password;
    newpassword(password);
  }
  useEffect(()=>{
    oldchecks[1]=1;
    newchecks(oldchecks);
    // console.log(document.getElementById("query1").defaultChecked);
    generatepassword();
  },[]);
  
  const handlegenerate = (e) => {
    console.log("Handle Generate Invoked");
    generatepassword();
  };

  const handlecopy = (e) => {
    navigator.clipboard.writeText(oldpassword);
    window.alert("Password Copied To Clipboard");
  };

  function strength() {
    let count = 0;

    for(let p=0;p<4;p++){
      if((oldchecks[p])===1){
        count++;
      }
    }
    console.log(count);
    
    console.log(oldlength);
    if (count===2 && oldlength>4) 
    {
      setstrength("MEDIUM");
    }  
    else if (count>2 && oldlength>5) 
    {
      setstrength("HIGH");
    }
    else if(oldlength>8){
      setstrength("MEDIUM");
    }
    else if(oldlength>12){
      setstrength("HIGH");
    }
    else{
      setstrength("LOW");
    }
  }
  function handleonclick(id) {
    // console.log("Handle On Click Activated");
    // console.log(id);
    if (oldchecks[id] === 1) {
      oldchecks[id] = 0;
      // console.log(oldchecks[id]);
    } else {
      oldchecks[id] = 1;
      // console.log(oldchecks[id]);
    }
    newchecks(oldchecks);
    for (let i = 0; i < 5; i++) {
    }
    strength();
  }

  return (
    <div className="card">
      <div className="password">
        <div className="new-password" id="current-password">
          {oldpassword}
        </div>
        <div className="copy-icon" onClick={(e) => handlecopy(e)}></div>
      </div>
      <div className="data">
        <div className="password-strength">
          <div className="card-header">
            <div className="heading">Character Length</div>
            <div className="character-count" id="characters">
              {oldlength}
            </div>
          </div>
          <div className="slider">
            <input
              type="range"
              id="MyRange"
              min={4}
              value={oldlength}
              max={16}
              onChange={(e) => handleslider(e)}
            />
          </div>
        </div>
        <div className="query">
          <div className="query-item">
            <input
              type="checkbox"
              id="query1"
              onChange={() => handleonclick(0)}
            />
            <span id="query-type">Include Uppercase Letters</span>
          </div>
          <br />
          <div className="query-item">
            <input
              type="checkbox"
              id="query2"
              onClick={() => handleonclick(1)}
            />
            <span id="query-type">Include Lowercase Letters</span>
          </div>
          <br />
          <div className="query-item">
            <input
              type="checkbox"
              id="query3"
              onClick={() => handleonclick(2)}
            />
            <span id="query-type">Include Numbers</span>
          </div>
          <br />
          <div className="query-item">
            <input
              type="checkbox"
              id="query4"
              onClick={() => handleonclick(3)}
            />
            <span id="query-type">Include Special Characters</span>
          </div>
          <br />
          {/* <input type="checkbox"id="query2"onChange={(e)=>handleonclick2(e)}/><span id="querytype">Include Lowercase Letters</span><br/>
                        <input type="checkbox"id="query3"onChange={(e)=>handleonclick3(e)}/><span id="query-type">Include Numbers</span><br/>
                        <input type="checkbox"id="query4"onChange={(e)=>handleonclick4(e)}/><span id="query-type">Include Special Characters</span> */}
        </div>
        <div className="strength">
          <div className="heading">STRENGTH</div>
          <div className="strength-level">
            <div className="strength-text">{oldstrength}</div>
            {/* <div className="strength-bars">
              <div className="level1"></div>
              <div className="level2"></div>
              <div className="level3"></div>
              <div className="level4"></div>
            </div> */}
          </div>
        </div>
        <button className="generate" onClick={(e) => handlegenerate(e)}>
          GENERATE
        </button>
      </div>
    </div>
  );
}
export default Card;
