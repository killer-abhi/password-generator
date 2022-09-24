import React, { useState } from 'react';
import './App.css';
import Card from "./components/card/Card";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="main">
          <div className="header">Password Generator</div>
          <div className="card"><Card/></div>
          <div className="footer"><Footer/></div>
      </div>
  );
}

export default App;
