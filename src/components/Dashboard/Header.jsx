import React, { useState, useEffect } from 'react';
import '../Style/Dashboard.css';
import User from '../Data/User.json';
import logo from '../../assets/logo.png';
import { MdNotificationsActive } from "react-icons/md";

function Header() {
  const [loggedinUser, setLoggedinUser] = useState(null);
  const [countNotification, setCountNotification] = useState(10);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New comment on your post' },
    { id: 2, message: 'You have a new follower' },
    { id: 3, message: 'Server maintenance scheduled' }
  ]); // example notifications
  const [showNotification, setShowNotification] = useState(false);

  // Toggle the notification dropdown visibility
  const handleNotification = () => {
    setShowNotification(!showNotification);
  };

  // Function to simulate login and set the logged-in user
  const loginUser = (userId) => {
    const user = User.find((u) => u.id === userId);
    setLoggedinUser(user);
  };

  // Simulate login for user with id 1 when component mounts
  useEffect(() => {
    loginUser(1); // Change this later to dynamically get the logged-in user
  }, []);

  return (
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </div>
      <div className="user-details">
        {loggedinUser ? (
          <div className="user-info">
            <div className="right-user">
              <MdNotificationsActive className='notification-icon' onClick={handleNotification} />
              {countNotification > 0 && (
                <span className='notification-badge'>{countNotification}</span>
              )}
              {showNotification && (
                <div className="notification-list">
                  <ul>
                    {notifications.map((notification) => (
                      <li key={notification.id}>{notification.message}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='left-user'>
              <img
                src={loggedinUser.image}
                alt={loggedinUser.name}
                className="user-icon"
              />
              <div className="user-details-name">
                <h4>Welcome, {loggedinUser.name}</h4>
                <p>Role: {loggedinUser.role}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="user-not-logged-in">
            User Not Logged In
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
