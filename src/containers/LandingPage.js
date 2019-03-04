import React from 'react';
import LandingCard from '../components/LandingCard';




const LandingPage = () => {
  
    return (
      <div className="landing">
        <LandingCard title = 'This Weeks Techniques' link="/TechniquePage" />
        <LandingCard title = 'In depth positional notes' link="/TechniquePage"/>
        <LandingCard title = 'Library' link="/Library" />
      </div>
    );
  }


export default LandingPage;