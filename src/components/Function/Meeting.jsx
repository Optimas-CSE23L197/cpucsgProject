import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import "../Style/Dashboard.css";
import Meetingdata from '../Data/Meetingdata.json';  // Import JSON file

function Meeting() {
  return (
    <div className="meeting">
        {/* <Header /> */}
        <Sidebar />
        <div className="meeting-body">
            <div className="meeting-text">
                <h1>Meeting</h1>
            </div>
            <div className="meeting-content">
              <button>Create Meeting</button>
              <button>Join Meeting</button>
            </div>
            
            {/* Meeting Status Table */}
            <div className="meeting-status">
              <h2>Meeting Status</h2>
              <table className="meeting-table">
                <thead>
                  <tr>
                    <th>Meeting ID</th>
                    <th>Topic</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Total Members</th>
                  </tr>
                </thead>
                <tbody>
                  {Meetingdata.map((meeting, index) => (
                    <tr key={index}>
                      <td>{meeting.meetingId}</td>
                      <td>{meeting.topic}</td>
                      <td>{new Date(meeting.startTime).toLocaleString()}</td>
                      <td>{new Date(meeting.endTime).toLocaleString()}</td>
                      <td>{meeting.totalMembers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}

export default Meeting;
