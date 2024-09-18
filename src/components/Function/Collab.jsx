import React, { useState } from 'react';
import '../Style/Dashboard.css';
import Sidebar from '../Dashboard/Sidebar';

const Collab = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showReceivedPopup, setShowReceivedPopup] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    projectTitle: '',
    departments: '',
    status: '',
    projectManager: '',
    projectLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleSendRequest = () => {
    setShowPopup(true);  // Show the input form popup
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowReceivedPopup(false); // Hide both popups
  };

  const handleReceivedRequest = () => {
    setShowReceivedPopup(true);  // Show the received request popup
  };

  return (
    <div className="collab">
      <Sidebar />
      <div className="collab-body">
        <h1>Cooperation</h1>
        {/* Send Request Button */}
        <button className="send-button" onClick={handleSendRequest}>
          Send Request
        </button>

        {/* Received Request Button */}
        <button className="receive-button" onClick={handleReceivedRequest}>
          View Received Request
        </button>

        {/* Popup for Send Request */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Send Collaboration Request</h2>
              <div className="form-group">
                <label>Project Title:</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={projectDetails.projectTitle}
                  onChange={handleInputChange}
                  placeholder="Enter Project Title"
                />
              </div>

              <div className="form-group">
                <label>Collaborating Departments:</label>
                <input
                  type="text"
                  name="departments"
                  value={projectDetails.departments}
                  onChange={handleInputChange}
                  placeholder="Enter Departments"
                />
              </div>

              <div className="form-group">
                <label>Status:</label>
                <select name="status" value={projectDetails.status} onChange={handleInputChange}>
                  <option value="">Select Status</option>
                  <option value="Initiated">Initiated</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Manager:</label>
                <input
                  type="text"
                  name="projectManager"
                  value={projectDetails.projectManager}
                  onChange={handleInputChange}
                  placeholder="Enter Project Manager Name"
                />
              </div>

              <div className="form-group">
                <label>Project Details Link:</label>
                <input
                  type="url"
                  name="projectLink"
                  value={projectDetails.projectLink}
                  onChange={handleInputChange}
                  placeholder="Enter Project Details URL"
                />
              </div>

              <button className="close-button" onClick={closePopup}>
                Send
              </button>
            </div>
          </div>
        )}

        {/* Popup for Received Request */}
        {showReceivedPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Received Collaboration Request</h2>
              <p><strong>Project Title:</strong> {projectDetails.projectTitle}</p>
              <p><strong>Collaborating Departments:</strong> {projectDetails.departments}</p>
              <p><strong>Status:</strong> {projectDetails.status}</p>
              <p><strong>Project Manager:</strong> {projectDetails.projectManager}</p>
              <p><strong>Project Details Link:</strong> <a href={projectDetails.projectLink}>{projectDetails.projectLink}</a></p>
              <button className="accept-button">Accept</button>
              <button className="close-button" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}

        {/* Add blur effect when either popup is open */}
        {(showPopup || showReceivedPopup) && <div className="screen-overlay"></div>}
      </div>
    </div>
  );
};

export default Collab;
