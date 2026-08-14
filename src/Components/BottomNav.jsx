import React from 'react';
import { Link } from "react-router-dom";
import '../styles/BottomNav.css';


const BottomNavbar = () => {
  return (
    <nav className="bottomnav">

        <div className="homeContent">
            <Link to="/software" className="navButtonBottom">
              Software
            </Link>
            <Link to="/clothes" className='navButtonBottom'>
              Clothes
            </Link>
            {/* <Link to="/info" className='navButtonBottom'>
              [info]
            </Link> */}
        </div>
    </nav>
  )
}

export default BottomNavbar;