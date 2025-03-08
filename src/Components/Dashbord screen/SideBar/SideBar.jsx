import './SideBar.css'
import LOGO from './SideBar_Icons/LOGO/LOGO.png'
import dashboard from './SideBar_Icons/dashboard.png'
import tables from './SideBar_Icons/tables.png'
import billing from './SideBar_Icons/billing.png'
import RTL from './SideBar_Icons/RTL.png'
import signin from './SideBar_Icons/signIn.png'

import profile from './SideBar_Icons/profile.png'
import ask from './SideBar_Icons/ask.png'
import rocket from './SideBar_Icons/rocketSignUp.png'


const SideBar = () => {


    return (
        <div className="side-panel">
            <img alt='logo' src={LOGO}/>
            <div className="dashbord-items">
                <div className="link"><button><img src={dashboard} alt={'Dashboard'}/></button></div>
                <div className="link"><button><img src={tables}    alt={'Tables'}/></button></div>
                <div className="link"><button><img src={billing}   alt={'Dashboard'}/></button></div>
                <div className="link"><button><img src={RTL}       alt={'Dashboard'}/></button></div>
                <div className="link"><button><img src={profile}   alt={'Dashboard'}/></button></div>
                <div className="link"><button><img src={signin}    alt={'Dashboard'}/></button></div>
                <div className="link">
                        <button >
                            <div className='rocket'>
                                <div className='rocket1'>
                                    <img src={rocket} alt={'Dashboard'} />
                                </div>
                                <div className='rocket2'>Sign Up</div>
                            </div>
                        </button>
                    </div>


                <div className="downlink">
                    <div className="link_downLink"><img src={ask} alt={'Dashboard'}/></div>
                    <p>Need help?</p>
                    <p>Please check our docs</p>
                    <button>DOCUMENTATION</button>

                </div>
            </div>
        </div>
    )
}
export default SideBar;