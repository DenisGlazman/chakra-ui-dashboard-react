import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useEffect, useState} from "react";
import axios from "axios";



const GradientAreaChart = () => {
    const [data, setData] = useState([]); // Начальное значение — пустой массив

    useEffect(() => {
        axios.get("https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/areachart", {
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
        <div className='GradArea' style={{ background: "#fff", padding: "20px", borderRadius: "15px", width: "50%" }}>
            <h3>Sales overview</h3>
            <p style={{ color: "green" }}>(+5) more in 2021</p>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6EE7B7" stopOpacity={0.6}/>
                            <stop offset="95%" stopColor="#6EE7B7" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#000" stopOpacity={0.6}/>
                            <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip />
                    <Area type="monotone" dataKey="value1" stroke="#6EE7B7" fillOpacity={1} fill="url(#colorValue1)" />
                    <Area type="monotone" dataKey="value2" stroke="#000" fillOpacity={1} fill="url(#colorValue2)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GradientAreaChart;
