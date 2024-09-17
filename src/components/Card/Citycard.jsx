// src/components/Citycard.js

import React from 'react';
import '../Style/CityCard.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const colors = [
  '#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#C5E1A5', 
  '#B9FBC0', '#FF6F61', '#FFB6C1', '#E0F7FA'
];

function Citycard() {
  return (
    <div className="citycard">
      {colors.map((color, index) => (
        <div 
          key={index}
          className="card1"
          style={{ backgroundColor: color }}
        >
          <Link to='/login'>Kolkata</Link>
        </div>
      ))}
    </div>
  );
}

export default Citycard;
