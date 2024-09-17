import React from 'react';
import '../Style/Dashboard.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><NavLink to='/dashboardadmin' className={({isActive}) =>
            (isActive ? 'active' : '')
          }>Dashboard</NavLink></li>
          <li><NavLink to='/project'>Project</NavLink></li>
          <li><NavLink to='/calendar'>Calender</NavLink></li>
          <li><NavLink to='/meeting'>Meeting</NavLink></li>
          <li><NavLink to='/membar'>Membar</NavLink></li>
          <li><NavLink to='/inventory'>Inventory</NavLink></li>
          <li><a href="#map">Map</a></li>
          <li><NavLink to='/collab'>Collab</NavLink></li>
          <li><NavLink to='/setting'>Setting</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
