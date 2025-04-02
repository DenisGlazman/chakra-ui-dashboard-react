import { useEffect, useState } from "react";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/projects") // https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/projects замените на ваш реальный API
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 border">Company</th>
                    <th className="p-2 border">Members</th>
                    <th className="p-2 border">Budget</th>
                    <th className="p-2 border">Completion</th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project) => (
                    <tr key={project.id} className="text-center">
                        <td className="p-2 border">{project.company}</td>
                        <td className="p-2 border">
                            {project.members.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Member"
                                    className="w-6 h-6 rounded-full inline-block mx-1"
                                />
                            ))}
                        </td>
                        <td className="p-2 border">
                            {project.budget ? `$${project.budget.toLocaleString()}` : "Not set"}
                        </td>
                        <td className="p-2 border">
                            <div className="w-full bg-gray-200 h-2 rounded">
                                <div
                                    className="bg-blue-500 h-2 rounded"
                                    style={{ width: `${project.completion}%` }}
                                ></div>
                            </div>
                            {project.completion}%
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Project;
