
import React, { useEffect, useState } from 'react';
import './ProfileProjects.css';
import ProjectCard from './ProjectCard/ProjectCard.jsx';
import NewProjectCard from './NewProjectCard/NewProjectCard.jsx';

const ProfileProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/profileprojects') // db.json
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="projects-wrapper">
            <div className="projects-header">
                <h3>Projects</h3>
                <p>Architects design houses</p>
            </div>
            <div className="projects-grid">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
                <NewProjectCard/>

            </div>
        </div>
    );
};

export default ProfileProjects;
