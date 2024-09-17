import React from 'react';
import '../Style/Landing.css'; // Create and add custom CSS for styling the Features page

function Features() {
  return (
    <div className="features-container">
      <section className="features-intro">
        <h1>Platform Features</h1>
        <p>Discover the powerful features of CP-UCSG that make urban management seamless and efficient.</p>
      </section>
      
      <section className="features-list">
        <div className="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 1" />
          <h2>Real-time Data Analytics</h2>
          <p>Access and analyze real-time data to make informed decisions quickly and efficiently. Our platform provides up-to-date information to help you stay ahead in urban management.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 2" />
          <h2>Seamless Collaboration</h2>
          <p>Facilitate collaboration between different departments and stakeholders with our integrated tools. Share information, coordinate efforts, and streamline processes effortlessly.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 3" />
          <h2>Advanced Reporting</h2>
          <p>Generate detailed reports and visualizations to track performance and progress. Customize reports to suit your needs and gain insights into various aspects of city management.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 4" />
          <h2>Interactive Maps</h2>
          <p>View and interact with detailed maps of urban areas. Our platform allows you to visualize spatial data and analyze geographical information effectively.</p>
        </div>
        <div className="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 5" />
          <h2>Automated Alerts</h2>
          <p>Receive automated alerts for critical issues and updates. Stay informed about important events and actions required with timely notifications and alerts.</p>
        </div>
      </section>
    </div>
  );
}

export default Features;
