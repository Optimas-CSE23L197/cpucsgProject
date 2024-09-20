import React, { useState } from 'react';
import '../Style/Dashboard.css'; // Your custom styles
import MemberData from '../Data/Member.json'; // Assume you have this JSON file
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';

function Membar() {
    const [members, setMembers] = useState(MemberData);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to open the popup
    const openPopup = (member) => {
        setSelectedMember(member);
        setIsPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedMember(null);
    };

    // Function to add a new member (to be implemented)
    const handleAddMember = () => {
        // Logic to add a new member
    };

    return (
        <div className="member">
            <Header />
            <Sidebar />
            <div className="member-body">
            <h1>Member Management</h1>
            <button className="add-btn" onClick={handleAddMember}>Add New Member</button>
            <div className="member-cards">
                {members.map((member, index) => (
                    <div className="member-card" key={index} onClick={() => openPopup(member)}>
                        <img src={member.image} alt={`${member.firstName} ${member.lastName}`} className="profile-pic" />
                        <h2>{member.firstName} {member.lastName}</h2>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>

            {isPopupOpen && selectedMember && (
                <div className="popup-overlay">
                    <div className="popup">
                        <button className="close-btn" onClick={closePopup}>X</button>
                        <img src={selectedMember.image} alt={`${selectedMember.firstName} ${selectedMember.lastName}`} className="popup-image" />
                        <h2>{selectedMember.firstName} {selectedMember.lastName}</h2>
                        <p>Role: {selectedMember.role}</p>
                        <p>Email: {selectedMember.email}</p>
                        <p>Address: {selectedMember.address}</p>
                        <button className="update-btn">Update</button>
                        <button className="delete-btn">Delete</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Membar;
