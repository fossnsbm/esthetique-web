import Group from './assets/Group 5.png';
import './Prizes.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="rectangle">
        <p className="head">PRIZES</p>  
        <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud </p>     
        <div>
          <img src={Group} className="img1" alt="gropu5"/>
          <div className="first">1st Place</div>
          <p className="Prize1">15,000 LKR</p>
        </div>
        <div>
          <img src={Group} className="img2" alt="group6"/>
          <p className="second">2nd Place</p>
          <p className="Prize2">12,000 LKR</p>
        </div>
        <div>
          <img src={Group} className="img3" alt="group7"/>
          <p className="third">3rd Place</p>
          <p className="Prize3">9,000 LKR</p>
        </div>
        
        
      </div>
      
        </div>
  );
}

export default App;
