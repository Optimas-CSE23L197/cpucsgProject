import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from '../Function/Dashboard';
import '../Style/Dashboard.css';

function Dashboardadmin() {
  return (
    <div className="dashboardadmin">
      <div className="top">
        <Header />
      </div>
      <div className="middle">
        <Sidebar />
      </div>
      <div className="main">
        <Dashboard />
      </div>
    </div>
  );
}

export default Dashboardadmin;
