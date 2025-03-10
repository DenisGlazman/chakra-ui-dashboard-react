import './Section_3.css'
import ActiveUsers from "../../../../images/ActiveUsers.png";
import SalesOverview from "../../../../images/SalesOverview.png";
const Section3 = () =>{
    return (
        <div className="section_3">
            <div className="main-section-3">
                <div className="main-panel">
                    <div className="main-panel-background_1">

                        <div className="main-panel">
                            <img alt='' src={ActiveUsers}/>
                        </div>


                    </div>
                </div>
                <div className="main-panel-graph">
                    <div className="main-panel"><img alt='graph' src={SalesOverview}/></div>

                </div>
            </div>
        </div>
    )
}
export default Section3