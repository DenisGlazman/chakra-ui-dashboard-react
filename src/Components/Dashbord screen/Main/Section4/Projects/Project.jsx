import { useEffect, useState } from "react";
import './Project.css'
import {useLocation} from "react-router-dom";
const Project = () => {
    const location = useLocation();

    const isFullWidth = location.pathname === '/tables'; // например, только на этой странице

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/projects") // https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/projects замените на ваш реальный API
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={isFullWidth ? 'full-width' : 'half-width'}>
            <div className="project-container">
                <h2 className="heading">Projects</h2>
                <p>
                    <img alt='circle' src='/Projects icons/circle.svg' />
                    30 done <span>this month</span>
                </p>
                <div className="table-wrapper">
                    <table className="project-table">
                        <thead>
                        <tr className="table-header">
                            <th className="table-cell">Companies</th>
                            <th className="table-cell">Members</th>
                            <th className="table-cell">Budget</th>
                            <th className="table-cell">Completion</th>
                            {isFullWidth && <th className="table-cell text-center">Options</th>}
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project) => (
                            <tr key={project.id} className="table-row">
                                <td className="table-cell project-info">
                                    <img src={project.company.icon} alt="icon" className="project-img" />
                                    <span>{project.company.name}</span>
                                </td>
                                <td className="table-cell">
                                    <div className="avatars">
                                        {project.members.map((avatar, i) => (
                                            <img key={i} src={avatar} alt="Member" className="avatar" />
                                        ))}
                                    </div>
                                </td>
                                <td className="table-cell budget">
                                    {project.budget ? `$${project.budget.toLocaleString()}` : "Not set"}
                                </td>
                                <td className="table-cell">
                                    <div className="progress-wrapper">
                                        <span className="progress-label">{project.completion}%</span>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${project.completion}%` }}></div>
                                        </div>
                                    </div>
                                </td>
                                {isFullWidth && (
                                    <td className="table-cell text-center">
                                        <button className="action-button">⋮</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
)}

    export default Project;
