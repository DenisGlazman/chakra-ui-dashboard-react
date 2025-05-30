import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import './CustomBarChart.css'


const CustomBarChart = () => {
    const [data, setData] = useState([]); // Начальное значение — пустой массив

    useEffect(() => {
        axios.get("https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/barchart", {
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
                    setData(parsedData);
                } else {
                    console.error("❌ Ожидался массив, но пришло:", parsedData);
                }
            })
            .catch((error) => {
                console.error("❌ Ошибка загрузки данных:", error);
            });
    }, []);



    return (
        <div className="custom-bar-chat" >
            {data.length > 0 ? (
                <ResponsiveContainer >
                    <BarChart data={data} barGap={15}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Bar dataKey="value" fill="white" radius={[20, 20, 0, 0]} barSize={10} animationDuration={500} />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p style={{ color: "white" }}>Загрузка данных...</p>
            )}

        </div>
    );
};

export default CustomBarChart;
