import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useEffect, useState} from "react";
import './GradientAreaChart.css'




const GradientAreaChart = () => {
    const [data, setData] = useState([]); // Начальное значение — пустой массив
    useEffect(() => {
        fetch("http://localhost:5001/areachart")
            .then((response) => response.json())
            .then((parsedData) => {
                console.log("✅ Данные:", parsedData);

                if (Array.isArray(parsedData)) {
                    setData(parsedData);
                } else {
                    console.error("❌ Ожидался массив, но получено:", parsedData);
                }
            })
            .catch((error) => {
                console.error("❌ Ошибка загрузки данных:", error);
            });
    }, []);

    return (
        <div className='grad-area'>
            <h3>Sales overview</h3>
            <p style={{ color: "green" }}>(+5) more <span style={{ color: "black" }}> in 2021</span></p>
            <ResponsiveContainer width="100%" height={400}>
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
