import React, { useEffect, useState } from "react";

const AuthorsTable = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/authors") // Укажи свой URL
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch((err) => console.error("Error fetching authors:", err));
    }, []);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <h2 className="text-xl font-bold mb-4">Authors Table</h2>
            <table className="w-full text-left">
                <thead>
                <tr className="text-gray-500 uppercase text-sm border-b">
                    <th className="py-2">Author</th>
                    <th>Function</th>
                    <th>Status</th>
                    <th>Employed</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {authors.map((author, index) => (
                    <tr key={index} className="border-b">
                        <td className="flex items-center gap-3 py-4">
                            <img
                                src={author.avatar}
                                alt={author.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold">{author.name}</p>
                                <p className="text-sm text-gray-500">{author.email}</p>
                            </div>
                        </td>
                        <td>
                            <p className="font-semibold">{author.role}</p>
                            <p className="text-sm text-gray-500">{author.department}</p>
                        </td>
                        <td>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        author.status === "Online"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {author.status}
                </span>
                        </td>
                        <td className="text-sm text-gray-600">{author.employed}</td>
                        <td>
                            <button className="text-blue-500 hover:underline text-sm">Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorsTable;
