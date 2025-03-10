import './Section_2.css'
import PurityDashboard from "../../../../images/PurityUIDashboard.png";
import SecondCard from "../../../../images/SecondCard.png";
const Section2 = () =>{
    return (
        <div className="section_2">
            <div className="main-section-2">
                <div className="main-panel">
                    <img alt='#' src={PurityDashboard}/>
                </div>
                <div className="main-panel">
                    <img alt='card' src={SecondCard}/>
                </div>
            </div>
        </div>
    )
}
export default Section2