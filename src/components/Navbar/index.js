import React from 'react';
import logo from '../../images/logo1.png'; 
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' width="70" height="65"/>
        </NavLink>
        
        <Bars />
        <NavMenu>
          <NavLink to='/scores' activeStyle>
            Live Scores
          </NavLink>
          <NavLink to='/news' activeStyle>
            Latest News
          </NavLink>
          <NavLink to='/updates' activeStyle>
            Updates
          </NavLink>
          <NavLink to='/hallFame' activeStyle>
          Hall of Fame
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/search'>Search</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
