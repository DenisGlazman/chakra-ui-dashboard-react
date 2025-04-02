
import './Section_4.css'

import OrdersOverview from "../../../../images/OrdersOverview.png";
import Project from "./Projects/Project.jsx";
const Section4 = () =>{
    return (
        <div className="section_4">
            <div className="main-section-4">
                <div className="main-panel">
                    <Project/>


                </div>
                <div className="main-panel"><img alt='#' src={OrdersOverview}/></div>
            </div>
        </div>



    )
}
export default Section4