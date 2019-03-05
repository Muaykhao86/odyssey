import React from 'react';
import {
  Link
 } from 'react-router-dom'



const LandingCard = ({title, link}) => {
  
    return (
      <div className="landing__card ">
      <h1>{title}</h1>
      <Link className="landing__link"to={link}><span role="img" aria-label="Rocket ">🚀</span></Link>  
      </div>
    );
  }


export default LandingCard;