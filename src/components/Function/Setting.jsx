import React, { useState } from 'react';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import '../Style/Dashboard.css';

function Setting() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation: check if new password and confirm password match
    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm password do not match!');
    } else {
      // Perform password change logic here (e.g., API call)
      // For now, just display a success message
      setSuccess('Password changed successfully!');
      
      // Clear input fields after success
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-body">
        <h1>Change Password</h1>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
