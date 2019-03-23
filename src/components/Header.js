import React from 'react';
import {
  Link
 } from 'react-router-dom';

const Header = ({signedIn}) => {
  
    return (
      <nav className="header">
        <header className="header__title">Odyssey BJJ Instructors</header>
        {signedIn === true ?  
        
        <ul className="header__container">
          <li className="header__item"><Link to="/LandingPage" className="header__link">DashBoard</Link></li>
          <li className="header__item"><Link to="/Library" className="header__link">Library</Link></li>
          <li className="header__item"><Link to="/QuickTech" className="header__link">QuickTechnique</Link></li>
        </ul>

        : null}
      </nav>
    );
  }


export default Header;