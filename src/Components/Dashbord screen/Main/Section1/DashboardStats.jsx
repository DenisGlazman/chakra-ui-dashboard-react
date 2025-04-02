import {useEffect, useState} from "react";
import axios from "axios";

const DashboardStats = () => {
    const[stats, setStats] = useState([])
    useEffect(() => {
        axios.get("https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/stats", {
            headers: {
                "Content-Type": "application/json", // Указываем JSON-ответ
            }
        })
            .then((response) => {
                console.log("Тип response.data:", typeof response.data);
                console.log("Сырой ответ от сервера:", response.data);

                let parsedData = response.data;

                if (typeof response.data === "string") {
                    try {
                        parsedData = JSON.parse(response.data);
                        console.log("parsedData: "+parsedData);
                    } catch (error) {
                        console.error("❌ Ошибка парсинга JSON:", error);
                        return;
                    }
                }

                if (Array.isArray(parsedData)) {
                    console.log("✅ Данные корректны:", parsedData);
                    setStats(parsedData);
                } else {
                    console.error("❌ Ожидался массив, но пришло:", parsedData);
                }
            })
            .catch((error) => {
                console.error("❌ Ошибка загрузки данных:", error);
            });
    }, []);


    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px", background: "#f5f5f5" }}>
            {stats.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        minWidth: "200px",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <div>
                        <p style={{ fontSize: "14px", color: "gray" }}>{item.title}</p>
                        <h2 style={{ margin: "5px 0" }}>{item.value}</h2>
                        <span style={{ color: item.changeColor }}>{item.change}</span>
                    </div>
                    <div
                        style={{
                            background: "#5ac8fa",
                            padding: "10px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
