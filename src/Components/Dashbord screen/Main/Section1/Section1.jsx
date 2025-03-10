import './Section1.css'
import toDaysMoney from "../../../../images/toDaysMoney.png";
import toDaysUsers from "../../../../images/toDaysUsers.png";
import newClients from "../../../../images/newClients.png";
import totalSales from "../../../../images/totalSales.png";
const Section1 = () =>{
    return (
        <div className="section_1">
            <div className="main-section-1">
                <div className="main-panel"><img alt='icon' src={toDaysMoney}/></div>
                <div className="main-panel"><img alt='icon' src={toDaysUsers}/></div>
                <div className="main-panel"><img alt='icon' src={newClients}/></div>
                <div className="main-panel"><img alt='icon' src={totalSales}/></div>
            </div>
        </div>
    )
}
export default Section1