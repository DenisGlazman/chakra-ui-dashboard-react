import  './Dashbord.css'

import toDaysMoney from '../../images/toDaysMoney.png'
import toDaysUsers from '../../images/toDaysUsers.png'
import newClients from '../../images/newClients.png'
import totalSales from '../../images/totalSales.png'
import SecondCard from '../../images/SecondCard.png'
import OrdersOverview from '../../images/OrdersOverview.png'
import Projects from '../../images/Projects.png'
import ActiveUsers from '../../images/ActiveUsers.png'
import SalesOverview from '../../images/SalesOverview.png'
import Breadcrumb from '../../images/Breadcrumb.png'
import Sidebar from '../../images/Sidebar.png'
import PurityDashboard from '../../images/PurityUIDashboard.png'
import FooterMenu from '../../images/FooterMenu.png'
import SideBar from "./SideBar/SideBar";

const Dashbord = () => {
    return(
        <div className="dashbord-container">
            <div className="dashbord-items">
                <div className="side-panel-container">
                    <div className="side-panel">
                            <SideBar/>
                    </div>
                </div>
            </div>

            <div className="main-container">
                    <div className="header">
                        <div className="main-section-1">
                            <img alt='#' src={Breadcrumb}/>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main-section-2">
                            <div className="main-panel"><img alt='icon' src={toDaysMoney}/></div>
                            <div className="main-panel"><img alt='icon' src={toDaysUsers}/></div>
                            <div className="main-panel"><img alt='icon' src={newClients}/></div>
                            <div className="main-panel"><img alt='icon' src={totalSales}/></div>
                        </div>
                        <div className="main-section-3">
                            <div className="main-panel">
                                <img alt='#' src={PurityDashboard}/>
                            </div>
                            <div className="main-panel">
                                <img alt='card' src={SecondCard}/>
                            </div>
                        </div>
                        <div className="main-section-4">
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
                        <div className="main-section-5">
                            <div className="main-panel">
                            <img alt='#' src={Projects}/></div>
                            <div className="main-panel">
                                <img alt='#' src={OrdersOverview}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <img alt='#' src={FooterMenu}/>
                    </div>
                </div>

            </div>


    )



}
export default Dashbord;