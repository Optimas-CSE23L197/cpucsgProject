import React, { useState } from 'react';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import '../Style/Dashboard.css';
import projectData from '../Data/Project.json';

function Project() {
    const [projects, setProjects] = useState(projectData.projects);

    // Filter projects based on status
    const filterProjects = (status) => {
        if (status === 'all') {
            setProjects(projectData.projects);
        } else {
            setProjects(projectData.projects.filter(project => project.status === status));
        }
    };

    return (
        <div className="project">
            <Sidebar />
            <div className="project-body">
                <div className="project-header">
                    <h1>All Projects</h1>
                    <div className="project-filter">
                        <button onClick={() => filterProjects('all')}>All</button>
                        <button onClick={() => filterProjects('ongoing')}>Ongoing</button>
                        <button onClick={() => filterProjects('completed')}>Completed</button>
                    </div>
                </div>
                <div className="project-content">
                    {projects.length === 0 ? (
                        <p>No Projects Available.</p>
                    ) : (
                        <table className="project-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Funding</th>
                                    <th>Total Cost</th>
                                    <th>Labor</th>
                                    <th>Manager</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td>{project.id}</td>
                                        <td>{project.title}</td>
                                        <td>{project.description}</td>
                                        <td>${project.funding}</td>
                                        <td>${project.totalCost}</td>
                                        <td>{project.labor}</td>
                                        <td>{project.manager}</td>
                                        <td>{project.startDate}</td>
                                        <td>{project.endDate}</td>
                                        <td>{project.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;
