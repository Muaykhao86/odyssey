import React from 'react';
import {
  Link
 } from 'react-router-dom'



const LandingCard = () => {
  
    return (
      <div className="landing__card ">
        <h1>Card Section</h1>
        <h2> Tecnique of the Week</h2>
        <h2>Library</h2>
        <Link to="/LandingPage">X</Link>
      </div>
    );
  }


export default LandingCard;