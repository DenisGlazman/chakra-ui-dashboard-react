import CustomBarChart from "./Graph/CustomBarChart.jsx";
import GradientAreaChart from "./Graph/GradientAreaChart.jsx";
import ActiveUsers from "./Active users/ActiveUsers.jsx";
import './Section_3.css'

const Section3 = () => {
    return (
        <div className="section_3">
            <div className="left_side_section_3">
                <CustomBarChart />
                <ActiveUsers/>
            </div>
            <GradientAreaChart />
        </div>
    );
};
export default Section3;
