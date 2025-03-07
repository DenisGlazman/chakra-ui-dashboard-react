import './SideBar.css'
import LOGO from './SideBar_Icons/LOGO/LOGO.png'
import dashboard from './SideBar_Icons/dashboard.png'
import tables from './SideBar_Icons/tables.png'
import billing from './SideBar_Icons/billing.png'
import RTL from './SideBar_Icons/RTL.png'
import signin from './SideBar_Icons/signIn.png'
import signUp from './SideBar_Icons/signUp.png'
import profile from './SideBar_Icons/profile.png'
import ask from './SideBar_Icons/ask.png'

const SideBar = () => {


    return (
        <div className="side-panel">
            <img src={LOGO}/>
            <div className="dashbord-items">
                <div className="link"><a href='#' /><img src={dashboard} alt={'Dashboard'}/></div>
                <div className="link"><a href='#' /><img src={tables} alt={'Tables'}/></div>
                <div className="link"><a href='#' /><img src={billing} alt={'Dashboard'}/></div>
                <div className="link"><a href='#' /><img src={RTL} alt={'Dashboard'}/></div>
                <div className="link"><a href='#' /><img src={profile} alt={'Dashboard'}/></div>
                <div className="link"><a href='#' /><img src={signin} alt={'Dashboard'}/></div>
                <div className="link"><a href='#' /><img src={signUp} alt={'Dashboard'}/></div>

                <div className="downlink">
                    <div className="link_downLink"><a href='#' /><img src={ask} alt={'Dashboard'}/></div>
                    <p>Need help?</p>
                    <p>Please check our docs</p>
                    <div>
                        <button>DOCUMENTATION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar;