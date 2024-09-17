import React from 'react'
import '../Style/Landing.css'
import landingimage from '../../assets/landingimage.webp'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.webp'
import card3 from '../../assets/card3.jpg'

function Hero() {
  return (
    <div className="landing-hero">
        <div className="landing-heading">
            <h1>CP-UCSG</h1>
            <p>Collaboration Platform For Unified City Management and Smart Governance</p>
            <img src={landingimage} alt="" />
        </div>

        <div className="marquee">
            <marquee>
            <h3>Collaboration Platform For Unified City Management and Smart Governance</h3>
            </marquee>
        </div>


        <div className="landing-body">
            <div className="card1">
                <img src={card1} alt="" />
                <div className="card-text">
                    <span>Urban City Overview</span>
                    <p>Urban cities are vibrant hubs of economic, cultural, and social activity, characterized by dense populations and a high concentration of infrastructure and services. These cities are centers of innovation and growth, attracting people from various regions with their diverse opportunities and amenities. From towering skyscrapers to bustling markets, urban areas offer a dynamic environment where business, education, and entertainment thrive. However, the rapid expansion and increasing complexity of these cities bring about unique challenges 
                        that require sophisticated management strategies
                        </p>
                </div>
            </div>
            <div className="card2">
                <div className="card-text">
                    <span>Challenges in Urban Management</span>
                    <p>The rapid growth of urban cities often leads to a range of challenges, including congestion, pollution, and the strain on public services. As populations increase, the demand for housing, transportation, and sanitation can overwhelm existing infrastructure. This can result in traffic jams, air quality issues, and inadequate waste management systems. Additionally, the coordination between different departments and agencies becomes crucial yet challenging, as fragmented efforts can lead to inefficiencies and delays in addressing urban problems. Effective urban management requires a holistic approach to ensure that all aspects of city life are well-integrated and functioning harmoniously.</p>
                </div>
                <img src={card2} alt="" />
            </div>
            <div className="card3">
                <img src={card3} alt="" />
                <div className="card-text">
                    <span>Benefits of Unified Urban Management</span>
                    <p>Implementing a unified approach to urban management can significantly enhance the quality of life in cities. By fostering inter-departmental collaboration and utilizing advanced technologies, cities can improve service delivery, optimize resource use, and streamline project implementation. For example, a centralized platform for data sharing and project coordination can reduce duplication of efforts and facilitate timely decision-making. Such a system not only helps in addressing immediate issues but also supports long-term planning and sustainable development. Ultimately, a well-managed urban environment promotes economic growth, environmental sustainability, and a higher standard of living for its residents.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero