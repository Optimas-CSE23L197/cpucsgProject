import React, { useState, useEffect } from 'react';

function CollabRequestForm() {
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch projects and departments
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));

    fetch('/api/departments')
      .then(res => res.json())
      .then(data => setDepartments(data));
  }, []);

  const sendRequest = () => {
    const requestBody = {
      project_id: selectedProject,
      target_department_id: selectedDepartment,
      message: message,
    };
    fetch('/api/collaboration-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
      // Handle success
      alert('Request sent successfully!');
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Send Collaboration Request</h2>
      <label>
        Select Project:
        <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
          <option value="">Select</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.title}</option>
          ))}
        </select>
      </label>
      <label>
        Select Department:
        <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="">Select</option>
          {departments.map(dept => (
            <option key={dept.id} value={dept.id}>{dept.name}</option>
          ))}
        </select>
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </label>
      <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}

export default CollabRequestForm;
