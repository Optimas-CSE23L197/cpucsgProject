import React, { useEffect, useState } from 'react';
import '../Style/Dashboard.css';
import User from '../Data/User.json';

function Header() {

  const [loggedinUser, setLoggedinUser] = useState(null);

  const loginUser = (userId) => {
    const user = User.find((u) => u.id === userId);
    setLoggedinUser(user);
  }

  useEffect(() => {
    loginUser(1); // Simulate login for user with ID 1
  }, []);

  return (
    <div className="header">
      <div className="welcome-message">
        <h2>Hello, Scarlett!</h2>
        <p>Welcome Home! The air quality is good & fresh today.</p>
      </div>
      <div className="user-info">
      <div className="sidebar-profile">
          {loggedinUser ? (
            <>
              <div className="sidebar-image">
                <img 
                  src={loggedinUser.image}
                  alt={loggedinUser.name} />
              </div>
              <div className="sidebar-info">
                <h4>{loggedinUser.name}</h4>
                <p>Role: {loggedinUser.role}</p>
              </div>
            </>
          ) : (
            <div className="sidebar-info">
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
