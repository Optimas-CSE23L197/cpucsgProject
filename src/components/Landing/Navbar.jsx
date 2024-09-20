import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Landing.css';
import logo from '../../assets/logo.png';
import Crousal from './Crousal';

function Navbar() {
  return (
    <div className="nav-crousal">
      {/* Carousel positioned underneath the navbar */}
      <Crousal />
      {/* Navbar on top */}
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="middle-nav">
            <div className="upper">
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing</h4>
            </div>
            <div className="lower">
              <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Contact Us</li>
                <button id="complain">Complain</button>
                <button id="login"><Link to='/citycard'>Login</Link></button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
