import {useEffect, useState} from "react";
import './DashboardStats.css'

const DashboardStats = () => {
    const[stats, setStats] = useState([])
    useEffect(() => {
        fetch("http://localhost:5001/stats") //axios.get("https://4f16f53f-ab42-4f86-aa9e-75be15621eb6.mock.pstmn.io/stats", {
            .then((res) => res.json())
            .then((data) => setStats(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="cards" >
            {stats.map((item, index) => (
                <div className="card"
                    key={index}
                >
                    <div>
                        <h3 >{item.title}</h3>
                        <h2 >{item.value}
                            <span className="subtitle" style={{ color: item.changeColor, }}>{item.change }</span>
                        </h2>
                    </div>
                    <div>
                        <img src={item.icon} alt="icon" style={{ width: "100%" }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
