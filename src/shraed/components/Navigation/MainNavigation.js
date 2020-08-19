import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Backdrop from '../UIElements/Backdrop';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation_drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      )
      <MainHeader>
        <button
          className="main-navigation_menu-btn"
          onClick={openDrawerHandler}
        >
          <span>...</span>
        </button>
        <h2 className="main-navigation_title">
          <Link to="/">YourPlaces</Link>
        </h2>
        <nav className="main-navigation_header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
