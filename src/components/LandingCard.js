import React from 'react';
import {
  Link
 } from 'react-router-dom'
import logo from'../img/logo.png';



const LandingCard = ({title, link}) => {

  
    return (

      <Link className="landing__link"to={link}>
      <div className="landing__card ">
      <h1>{title}</h1>
      <img className="landing__logo" src={logo} alt="logo"/>  
      </div>
      </Link>
    );
  }

export default LandingCard;