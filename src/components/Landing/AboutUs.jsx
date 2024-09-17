import React from 'react';
import '../Style/Landing.css'; // Create and add custom CSS for styling the About page

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to CP-UCSG, a leading platform dedicated to Unified City Management and Smart Governance. Our mission is to transform urban management through innovative solutions and collaboration.
        </p>
      </section>
      
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to enhance city management efficiency by integrating advanced technologies and fostering collaboration between various departments. We aim to improve quality of life in urban areas by addressing challenges and implementing sustainable solutions.
        </p>
      </section>
      
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
      
      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or would like to get in touch with us, please feel free to <a href="/contact-us">contact us</a>.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
