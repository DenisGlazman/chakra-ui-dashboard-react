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
        <div className="p-6-bg-white-rounded-lg-shadow" >
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <p><img alt='circle' src='/Projects icons/circle.svg'/>30 done <span>this month</span></p>
            <div className="overflow-x-auto" >
                <table className="w-full-text-left" >
                    <thead>
                    <tr className="text-xs-uppercase-text-gray-500-border-b">
                        <th className="py-2">Companies</th>
                        <th className="py-2">Members</th>
                        <th className="py-2">Budget</th>
                        <th className="py-2">Completion</th>
                        {isFullWidth && <th className="py-2 text-center">Options</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="border-b">
                            <td className="py-3 flex items-center gap-3">
                                <img src={project.company.icon} alt="icon" className="pr_img" />
                                <span>{project.company.name}</span>
                            </td>
                            <td className="py-3">
                                <div className="flex-space-x-2">
                                    {project.members.map((avatar, i) => (
                                        <img key={i} src={avatar} alt="Member" className="w-6 h-6 rounded-full border-2 border-white" />
                                    ))}
                                </div>
                            </td>
                            <td className="py-3 text-sm text-gray-700">
                                {project.budget ? `$${project.budget.toLocaleString()}` : "Not set"}
                            </td>
                            <td className="py-3">
                                <div className="progress-wrapper">
                                    <span className="progress-label">{project.completion}%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${project.completion}%` }}></div>
                                    </div>
                                </div>
                            </td>
                            {isFullWidth && (
                                <td className="py-3 text-center">
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
    );
};

export default Project;
