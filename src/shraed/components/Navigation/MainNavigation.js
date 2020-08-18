import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation_menu-btn"></button>
      <h2 className="main-navigation_title">
        <Link to="/">YourPlaces</Link>
      </h2>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
