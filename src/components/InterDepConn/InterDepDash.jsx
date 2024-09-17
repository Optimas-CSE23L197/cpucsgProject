import React, { useState, useEffect } from 'react';
import '../Style/InterDepDash.css'; // Include the CSS for styling
import Sidebar from '../Dashboard/Sidebar';
import InventoryData from '../Data/InventoryData.json';
import Projectdep from '../Data/Projectdep.json'; // Make sure to create this file

function InterDepDash() {
  const [inventory, setInventory] = useState([]);
  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMembersPopup, setShowMembersPopup] = useState(false);
  const [selectedProjectMembers, setSelectedProjectMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch inventory data
    setInventory(InventoryData);
  }, []);

  const handleShowProjectPopup = (project) => {
    setSelectedProject(project);
    setShowProjectPopup(true);
  };

  const handleCloseProjectPopup = () => {
    setShowProjectPopup(false);
    setSelectedProject(null);
  };

  const handleShowMembersPopup = (members) => {
    setSelectedProjectMembers(members);
    setShowMembersPopup(true);
  };

  const handleCloseMembersPopup = () => {
    setShowMembersPopup(false);
    setSelectedProjectMembers([]);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, type: 'sent' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="interdepdash">
      <Sidebar />
      <div className="interdepdash-body">
        <div className="main-content">
          <div className="width70">
            <div className="member-dep">
              <button onClick={() => handleShowMembersPopup(Projectdep[0].members)}>Show Project Members</button>
            </div>
            <div className="project-dep">
              <button onClick={() => handleShowProjectPopup(Projectdep[0])}>Show Project Details</button>
            </div>
          </div>
          <div className="inventory-dep">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Supplier</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>{item.supplier}</td>
                    <td>{item.category}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="width30">
          <div className="chat-dep">
            <div className="chat-room">
              <div className="chat-message">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showProjectPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleCloseProjectPopup}>X</button>
            <h2>Project Details</h2>
            {selectedProject && (
              <div className="project-details">
                <p><strong>Title:</strong> {selectedProject.title}</p>
                <p><strong>Status:</strong> {selectedProject.status}</p>
                <p><strong>Funding:</strong> ${selectedProject.funding}</p>
                <p><strong>Total Cost:</strong> ${selectedProject.totalCost}</p>
                <p><strong>Description:</strong> {selectedProject.description}</p>
                <p><strong>Start Date:</strong> {selectedProject.startDate}</p>
                <p><strong>End Date:</strong> {selectedProject.endDate}</p>
                <div className="progress-bar">
                  <label>Progress: {selectedProject.progress}%</label>
                  <progress value={selectedProject.progress} max="100"></progress>
                </div>
                <div className="project-chats">
                  <h3>Project Chats</h3>
                  <ul>
                    {selectedProject.chats.map((chat, index) => (
                      <li key={index}>{chat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showMembersPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={handleCloseMembersPopup}>X</button>
            <h2>Project Members</h2>
            <table className="members-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Role</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {selectedProjectMembers.map((member) => (
                  <tr key={member.id}>
                    <td><img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="profile-pic" /></td>
                    <td>{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>{member.role}</td>
                    <td>{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterDepDash;
