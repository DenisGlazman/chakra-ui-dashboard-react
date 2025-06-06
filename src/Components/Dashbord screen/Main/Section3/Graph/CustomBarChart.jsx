import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis,Tooltip, ResponsiveContainer } from "recharts";
import './CustomBarChart.css'


const CustomBarChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./barchart.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div className="custom-bar-chat" >
            {data.length > 0 ? (
                <ResponsiveContainer >
                    <BarChart data={data} barGap={15}>

                        <XAxis dataKey="name" hide />


                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            stroke="white"
                            tick={{ fill: 'white', fontSize: 12 }}
                            ticks={[0, 100, 200, 300, 400, 500]}
                            domain={[0, 500]}
                        />
                        <Tooltip />
                        <Bar
                            dataKey="value"
                            fill="white"
                            radius={[20, 20, 0, 0]}
                            barSize={10}
                            animationDuration={500}
                        />
                    </BarChart>

                </ResponsiveContainer>
            ) : (
                <p style={{ color: "white" }}>Загрузка данных...</p>
            )}

        </div>
    );
};

export default CustomBarChart;
