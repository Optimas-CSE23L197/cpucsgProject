import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from '../Function/Dashboard';
import '../Style/Dashboard.css';

function Dashboardadmin() {
  return (
    <div className="dashboardadmin">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default Dashboardadmin;
