import React, { useState } from 'react';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import '../Style/Dashboard.css';

// Mock file data (simulates uploaded files from different departments)
const fileData = [
  { department: 'HR', fileName: 'Employee_List.pdf', fileUrl: '/files/Employee_List.pdf' },
  { department: 'Finance', fileName: 'Budget_Report.xlsx', fileUrl: '/files/Budget_Report.xlsx' },
  { department: 'IT', fileName: 'System_Specs.docx', fileUrl: '/files/System_Specs.docx' },
  { department: 'Marketing', fileName: 'Campaign_Plan.pptx', fileUrl: '/files/Campaign_Plan.pptx' },
];

function Collab() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const departments = ['HR', 'Finance', 'IT', 'Marketing', 'Sales'];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSendMessage = () => {
    console.log(`Message: ${message}, File: ${file ? file.name : 'No file selected'}`);
  };

  const getFilesByDepartment = (department) => {
    return fileData.filter(file => file.department === department);
  };

  return (
    <div className="collab-page">
      <Header />
      <Sidebar />
      <div className="collab-body">
        <h1>Department Collaboration</h1>
        <div className="collab-container">
          <div className="department-list">
            <h3>Select Department</h3>
            <ul>
              {departments.map((dept, index) => (
                <li key={index} onClick={() => setSelectedDepartment(dept)}>{dept}</li>
              ))}
            </ul>
          </div>
          <div className="collab-content">
            {selectedDepartment ? (
              <>
                <h2>Collaborate with {selectedDepartment}</h2>
                <textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  placeholder="Type your message..." 
                />
                <div className="file-sharing">
                  <label htmlFor="file">Share a file:</label>
                  <input type="file" id="file" onChange={handleFileChange} />
                </div>
                <button onClick={handleSendMessage}>Send</button>

                {/* Display files from the selected department */}
                <div className="file-list">
                  <h3>Available Files to Download</h3>
                  {getFilesByDepartment(selectedDepartment).length > 0 ? (
                    <ul>
                      {getFilesByDepartment(selectedDepartment).map((file, index) => (
                        <li key={index}>
                          {file.fileName} 
                          <a href={file.fileUrl} download className="download-link">Download</a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No files available from this department.</p>
                  )}
                </div>
              </>
            ) : (
              <p>Please select a department to collaborate with.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collab;
