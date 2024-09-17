// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Style/Login.css'; // Import the CSS file

function Login() {
  const { city } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement authentication logic here
    if (email === 'user@example.com' && password === 'password') {
      // Redirect or update state for successful login
      Navigate('/dashboardadmin')
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <h1>Login for {city}</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
