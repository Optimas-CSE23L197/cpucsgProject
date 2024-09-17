import React from 'react'
import Header from '../Dashboard/Header'
import Sidebar from '../Dashboard/Sidebar'
import "../Style/Dashboard.css"

function Meeting() {
  return (
    <div className="meeting">
        <Header />
        <Sidebar />
        <div className="meeting-body">
            <div className="meeting-text">
                <h1>Meeting</h1>
            </div>
            <div className="meeting-content"></div>
        </div>
    </div>
  )
}

export default Meeting