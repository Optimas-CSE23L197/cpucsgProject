import React from 'react';
import '../Style/Landing.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-bar">
        <div className="nav-bar-logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-bar-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/citycard">Login</Link></li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
