import React from 'react';
// import DeviceCard from './DeviceCard';
import '../Style/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="temperature-control">
        <h3>Scarlett’s Home</h3>
        <div className="temp-control-card">
          <h4>Temperature</h4>
          <div className="temp-settings">
            <button>ON</button>
            <div className="temp-display">
              <h1>25°C</h1>
              <p>Living Room</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="device-section">
        <h3>My Devices</h3>
        <div className="device-grid">
          <DeviceCard name="Refrigerator" status="ON" />
          <DeviceCard name="Router" status="ON" />
          <DeviceCard name="Music System" status="OFF" />
          <DeviceCard name="Lamps" status="ON" />
        </div>
      </div> */}

      <div className="members-section">
        <h3>Members</h3>
        <div className="members-list">
          <div className="members">Scarlett</div>
          <div className="members">Nariya</div>
          <div className="members">Riya</div>
          <div className="members">Dad</div>
          <div className="members">Mom</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
