import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="profile-project-card">
            <img src={project.image} alt={project.title} className="profile-project-img" />
            <div className="profile-project-content">
                <p className="profile-project-sub">Project #{project.id}</p>
                <p className='profile-project-title'>{project.title}</p>

                <h4>{project.title}</h4>
                <p className="profile-project-desc">{project.description}</p>
                <div className="profile-project-footer">
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