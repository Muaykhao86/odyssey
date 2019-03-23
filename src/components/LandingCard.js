import React from 'react';
import {
  Link
 } from 'react-router-dom'
import logo from'../img/logo.png';



const LandingCard = ({title, link}) => {
{/* <span role="img" aria-label="Rocket ">🚀</span> */}
  
    return (
      <div className="landing__card ">
      <h1>{title}</h1>
      <Link className="landing__link"to={link}><img className="landing__logo" src={logo} alt="logo"/></Link>  
      </div>
    );
  }

export default LandingCard;