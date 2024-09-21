import React, { useState } from 'react';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import '../Style/Dashboard.css';
import MemberData from '../Data/Member.json';

function Membar() {
  const [members, setMembers] = useState(MemberData);
  const [selectMember, setSelectMember] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ispopupaddMemberOpen, setIspopupaddMemberOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: '',
    image: '',
    role: '',
    email: '',
    address: ''
  });

  // Handle to open the member details popup
  const openPopup = (member) => {
    setSelectMember(member);
    setIsPopupOpen(true);
  };

  // Handle to close member details popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectMember(null);
  };

  // Handle add member popup
  const openPopupaddMember = () => {
    setIspopupaddMemberOpen(true);
  };

  // Handle close add member popup
  const closePopupaddMember = () => {
    setIspopupaddMemberOpen(false);
    setNewMember({
      firstName: "",
      lastName: '',
      image: '',
      role: '',
      email: '',
      address: ''
    });
  };

  // Handle input changes for add member
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setNewMember((prevMember) => ({
      ...prevMember,
      [id]: value
    }));
  };

  // Handle adding member
  const handleAddmember = () => {
    setMembers([...members, newMember]);
    closePopupaddMember();
  };

  return (
    <div className="dep-member">
      <Header />
      <Sidebar />

      <div className="dep-member-body">
        <h1>Member Management</h1>

        {/* Use openPopupaddMember to show the form */}
        <button className="add-btn" onClick={openPopupaddMember}>
          Add Member
        </button>

        {ispopupaddMemberOpen && (
          <div className="addmember-popup-overlay">
            <div className="addmember-popup">
              <button className='addmember-close-btn' onClick={closePopupaddMember}>
                X
              </button>
              <form className='member-form'>
                <label>First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={newMember.firstName}
                  onChange={handleInputChange}
                />
                <br />

                <label>Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={newMember.lastName}
                  onChange={handleInputChange}
                />
                <br />

                <label>Email:</label>
                <input
                  type="email"
                  id="email"
                  value={newMember.email}
                  onChange={handleInputChange}
                />
                <br />

                <label>Role:</label>
                <input
                  type="text"
                  id="role"
                  value={newMember.role}
                  onChange={handleInputChange}
                />
                <br />

                <label>Address:</label>
                <input
                  type="text"
                  id="address"
                  value={newMember.address}
                  onChange={handleInputChange}
                />
                <br />
                {/* Call handleAddmember to add new member */}
                <button type="button" className="add-btn" onClick={handleAddmember}>
                  Add Member
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="member-card">
          {members.map((member, index) => (
            <div
              className="members-card"
              key={index}
              onClick={() => openPopup(member)}
            >
              <img
                src={member.image}
                alt={`${member.firstName} ${member.lastName}`}
                className="profile-photo"
              />
              <h2>{`${member.firstName} ${member.lastName}`}</h2>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

        {isPopupOpen && selectMember && (
          <div className="member-popup-overlay">
            <div className="member-popup">
              <button className="close-btn-member" onClick={closePopup}>
                X
              </button>
              <img
                src={selectMember.image}
                alt={`${selectMember.firstName} ${selectMember.lastName}`}
              />
              <h2>{`${selectMember.firstName} ${selectMember.lastName}`}</h2>
              <p>Role: {selectMember.role}</p>
              <p>Email: {selectMember.email}</p>
              <p>Address: {selectMember.address}</p>
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
