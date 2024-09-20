import React from 'react'
import '../Style/Landing.css'
import { MdOutlineQueryStats , MdOutlineReport } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { SiGooglemaps } from "react-icons/si";
import { TbAlertSquare } from "react-icons/tb";

function Features() {
  return (
    <div className="features-content">
      <div className="features-list">
      <div className="upper-features">
        <h1>Features</h1>
        {/* <p>Our web page is designed to be a comprehensive resource hub, featuring a user-friendly interface that ensures easy navigation for all users,
           regardless of their technical expertise. It boasts a vast library of resources covering essential topics such as health, education, and community
            services, all continuously updated to provide the most relevant information. With real-time updates on important news and events, users stay informed
             and empowered to make informed decisions. The platform fosters community interaction through forums, enabling users to share experiences and seek
              support from one another</p> */}
      </div>
      <div className="lower-features">
        <div className="lf1">
          <MdOutlineQueryStats className='icon-features'/>
          <h3>Real-time Data Analytics</h3>
        </div>
        <div className="lf2">
          <FcCollaboration className='icon-features'/>
          <h3>Seamless Collaboration</h3>
        </div>
        <div className="lf3">
          <MdOutlineReport className='icon-features'/>
          <h3>Advanced Reporting</h3>
        </div>
        <div className="lg4">
          <SiGooglemaps className='icon-features'/>
          <h3>Interactive Maps</h3>
        </div>
        <div className="lf5">
          <TbAlertSquare className='icon-features'/>
          <h3>Automated Alerts</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features;