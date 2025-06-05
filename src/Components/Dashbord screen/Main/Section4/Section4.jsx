
import './Section_4.css'

import OrdersOverview from "./Orders overview/OrdersOverview.jsx";
import Project from "./Projects/Project.jsx";
const Section4 = () =>{
    return (
        <div className="section_4">
            <div className="main-section_section_4">
                <div className="main-panel-left_section_4">
                    <Project/>
                </div>
                <div className="main-panel-right_section_4">
                    <OrdersOverview/>
                </div>
            </div>
        </div>



    )
}
export default Section4