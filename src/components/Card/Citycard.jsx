import React from 'react'
import City from '../Data/City.json'
import '../Style/Citycard.css'
import { Link } from 'react-router-dom';
const colors = [
  '#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#C5E1A5', 
  '#B9FBC0', '#FF6F61', '#FFB6C1', '#E0F7FA'
];

function Citycard() {
  return (
    <div className="citycard">
      {City.map((city , index) => (
        <div 
        key={index}
        name={city.city}
        style={{backgroundColor: colors[index % colors.length]}}
        className="cityname">
            <h1>{city.city}</h1>
            <p>{city.description}</p>
            <Link className='login-btn' to={`/login/${city.city}`}>Login</Link>
        </div>
      ))}
    </div>
  )
}

export default Citycard