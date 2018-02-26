import React from 'react';
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header className="header" style={{padding: '20px'}}>
    <img src={logo} style={{height:'60px'}} alt="Nathan Simpson" />
    <nav className="nav">
      <ul>
        <li><NavLink exact to="/" className="nav__item" activeClassName="nav__item--active">Home</NavLink></li>
        <li><NavLink to="/portfolio" className="nav__item" activeClassName="nav__item--active">Portfolio</NavLink></li>
        <li><NavLink to="/about" className="nav__item" activeClassName="nav__item--active">About</NavLink></li>
        <li><NavLink to="/resume" className="nav__item" activeClassName="nav__item--active">Resume</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
