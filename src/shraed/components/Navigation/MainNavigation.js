import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';
const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation_menu-btn"></button>
      <h1 className="main-navigation_title">
        <Link to="/">Your Places</Link>
      </h1>
    </MainHeader>
  );
};

export default MainNavigation;
