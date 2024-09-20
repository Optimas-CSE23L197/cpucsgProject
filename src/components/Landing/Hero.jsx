import React from 'react'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.webp'
import card3 from '../../assets/card3.jpg'
import '../Style/Landing.css'


function Hero() {
    return (
      <div className="hero">
        <div className="marquee">
          <div className="marquee-content">
          <marquee >
              <h1>
                Welcome to Collaboration Platform For Unified City Management and Smart Governance
              </h1>
            </marquee>
          </div>
        </div>
        <div className="features">
          <div className="f1">
            <img src={card1} alt="Accessible Information Hub" />
            <p>
            In today’s fast-paced world, having immediate access to reliable information is crucial for individuals and communities alike.
             Our web page serves as a comprehensive information hub,
            designed to provide the public with easy access to vital resources and services.
             We recognize that in an age where misinformation is rampant, users need a trusted platform where they can find accurate,
              up-to-date information tailored to their needs.
            At the heart of our platform is a user-friendly interface that makes navigation intuitive and straightforward. Users can easily
             browse through various categories, from health and education to employment and legal services. Each category is carefully curated,
              ensuring that the most relevant and important information is readily available. By consolidating resources in one convenient location,
               we save users valuable time that would otherwise be spent searching across multiple websites or platforms.
            </p>
          </div>
          <div className="f2">
            <p>Welcome to our platform, where we strive to create an accessible and user-friendly space for everyone. Our mission is to empower individuals by providing a
                 comprehensive hub of information, resources, and services that cater to diverse needs and interests.
                At the core of our web page is the belief that everyone should have easy access to vital information that can help them 
                navigate everyday challenges and make informed decisions. Whether youre seeking guidance on community services, health resources, 
                educational opportunities, or simply looking for the latest updates, we are here to assist you.</p>
            <img src={card2} alt="Community Collaboration" />
          </div>
          <div className="f3">
            <img src={card3} alt="Real-Time Support" />
            <p>
            Our vision is to create a connected and informed community where every individual has easy access to vital information and resources.
             We strive to empower users through transparency and inclusivity, ensuring that everyone, regardless of their background, can make informed
              decisions that enhance their quality of life. By fostering collaboration, encouraging knowledge sharing, and embracing innovation, we aim to 
              be the leading platform for community engagement and support, driving positive change and improving lives.
            </p>
          </div>
        </div>
      </div>
    );
  }
  

export default Hero