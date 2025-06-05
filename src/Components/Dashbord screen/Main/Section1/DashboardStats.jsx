import {useEffect, useState} from "react";
import './DashboardStats.css'

const DashboardStats = () => {
    const[stats, setStats] = useState([])
    useEffect(() => {
        fetch("http://localhost:5001/stats")
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
                    <div className='card-content'>
                        <span className='title'>{item.title}</span>
                        <span className='amount' >{item.value}
                            <span className="changes" style={{ color: item.changeColor, }}>{item.change }</span>
                        </span>
                    </div>
                    <div>
                        <img src={item.icon} alt="icon" style={{ width: '45px' }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;
