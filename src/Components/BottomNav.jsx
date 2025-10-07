import React from 'react';
import { Link } from "react-router-dom";
import './BottomNav.css';


const BottomNavbar = () => {
  return (
    <nav className="bottomnav">

        <div className="homeContent">
            <Link to="/design" className="navButtonBottom">
              Design
            </Link>
            <Link to="/develop" className='navButtonBottom'>
              Develop
            </Link>
            <Link to="/clothes" className='navButtonBottom'>
              Clothes
            </Link>
            <Link to="/info" className='navButtonBottom'>
              [info]
            </Link>
        </div>
    </nav>
  )
}

export default BottomNavbar;