import React, { useEffect, useState } from "react";
import "./AuthorsTable.css";

const AuthorsTable = () => {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Имитируем загрузку данных с сервера
        const fetchAuthors = async () => {
            setLoading(true);
            try {
                const response = await fetch("./authors.json"); // ⚠️ Подставь актуальный эндпоинт
                const data = await response.json();
                setAuthors(data);
            } catch (error) {
                console.error("Ошибка загрузки авторов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthors();
    }, []);

    return (
        <div className="authors-table">
            <h2>Authors Table</h2>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Author</th>
                        <th>Function</th>
                        <th>Status</th>
                        <th>Employed</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {authors.map(({ id, name, email, role, department, status, employedDate, avatar }) => (
                        <tr key={id}>
                            <td>
                                <div className="author-info">
                                    <img src={avatar} alt={name} />
                                    <div>
                                        <div className="name">{name}</div>
                                        <div className="email">{email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="role">{role}</div>
                                <div className="department">{department}</div>
                            </td>
                            <td>
                                <span className={`status ${status.toLowerCase()}`}>{status}</span>
                            </td>
                            <td><div className="employed">{employedDate}</div></td>
                            <td><button className="edit-btn">Edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AuthorsTable;
