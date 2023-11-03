import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
        <p className='brand-logo'>SUPREMEs</p>
  
        
        <ul className="links">
          <li><a href="/">League</a></li>
          <li><a href='/about'>SCL</a></li>
          <li><a href='/contact'>Teams</a></li>
        </ul>
    </nav> 
  )
}

export default Navbar;