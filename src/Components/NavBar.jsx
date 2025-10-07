import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/dots_MWhite.svg';
import Info from '../assets/info.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} className="logo" alt="React logo" />
          </Link>
        </div>

       {/* <div className="navbar-right">
          <Link to="/info" className="nav-link">
            <img src={Info} className="info-icon" alt="Info icon" />
          </Link>
        </div> */}
    </nav>
  )
}

export default Navbar;