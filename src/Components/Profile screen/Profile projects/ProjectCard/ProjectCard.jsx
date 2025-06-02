import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
                <p className="project-sub">Project #{project.id}</p>
                <p className='project-title'>{project.title}</p>

                <h4>{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-footer">
                    <button className="view-all-btn">VIEW ALL</button>
                    <div className="avatars">
                        {project.members.map((avatar, index) => (
                            <img
                                key={index}
                                src={avatar}
                                alt="member"
                                className="avatar-img"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;