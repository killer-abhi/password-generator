import React, { useState } from 'react';
import './App.css';
import Card from "./components/card/Card";

function App() {

  const handlecopy=(e)=>{
    console.log("Clicked To Copy Password");
    // let text = document.getElementById("current-password");
    // console.log(e.target.value);
    // text.select();
    // text.setSelectionRange(0,50);
    navigator.clipboard.writeText("Password");
    window.alert("Text Copied To Clipboard");
  }
  const [oldpassword,newpassword]=useState("password")
  const handleCallback=(childData)=>{
    // newpassword=e.target.value;
    // newpassword(oldpassword);
    console.log(childData);
  }

  return (
    <div className="main">
      <div className="body">
          <div className="header">
            Password Generator
          </div>
          <div className="password">
            <div className="new-password" id='current-password'>
            {oldpassword}
            </div>
            <div className="copy-icon" onClick={(e)=>handlecopy(e)}>
            </div>
          </div>
          <div className="card"><Card parentCallback={(e)=>handleCallback(childData)}/></div>

      </div>
    </div>
  );
}

export default App;
