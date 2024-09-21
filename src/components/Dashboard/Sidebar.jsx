import React, { useEffect, useState } from 'react';
import '../Style/Dashboard.css';
import { NavLink } from 'react-router-dom';
import User from '../Data/User.json';
import { SiIndiansuperleague } from "react-icons/si";

function Sidebar() {
  const [loggedinUser, setLoggedinUser] = useState(null);

  const loginUser = (userId) => {
    const user = User.find((u) => u.id === userId);
    setLoggedinUser(user);
  }

  useEffect(() => {
    loginUser(1); // Simulate login for user with ID 1
  }, []);

  return (
    <div className="sidebar">
      <nav>
        <div className="sidebar-logo">
          <div className="sidebar-icon">
            <h1><SiIndiansuperleague /></h1>
          </div>
          <div className="sidebar-name">
            <h3>CPUCSG</h3>
          </div>
        </div>

        <ul className='sidebar-list'>
          <li><NavLink to='/dashboardadmin' className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink></li>
          <li><NavLink to='/project' className={({ isActive }) => (isActive ? 'active' : '')}>Project</NavLink></li>
          <li><NavLink to='/calendar' className={({ isActive }) => (isActive ? 'active' : '')}>Calendar</NavLink></li>
          <li><NavLink to='/meeting' className={({ isActive }) => (isActive ? 'active' : '')}>Meeting</NavLink></li>
          <li><NavLink to='/membar' className={({ isActive }) => (isActive ? 'active' : '')}>Membar</NavLink></li>
          <li><NavLink to='/inventory' className={({ isActive }) => (isActive ? 'active' : '')}>Inventory</NavLink></li>
          <li><NavLink to='/mapbox' className={({ isActive }) => (isActive ? 'active' : '')}>Map</NavLink></li>
          {/* <li><NavLink to='/collab' className={({ isActive }) => (isActive ? 'active' : '')}>Collab</NavLink></li> */}
          <li><NavLink to='/setting' className={({ isActive }) => (isActive ? 'active' : '')}>Setting</NavLink></li>
        </ul>
        <div className="interdepartment">
          <ul>
            <li><NavLink to='/collab' className={({ isActive }) => (isActive ? 'active' : '')}>Collab</NavLink></li>
            <li><NavLink to='/interdepdash' className={({ isActive }) => (isActive ? 'active' : '')}>Connect</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
