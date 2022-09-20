import React, { useState } from 'react';
import './App.css';
import Card from "./components/card/Card";

function App() {
  return (
    <div className="main">
      <div className="body">
          <div className="header">
            Password Generator
          </div>
          <div className="card"><Card/></div>

      </div>
    </div>
  );
}

export default App;
