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
import line from'./SideBar_Icons/LOGO/Vector 6.png'
import {useNavigate} from "react-router-dom";


const SideBar = () => {
    let navigate = useNavigate()

    const goToTables = () => {navigate('/tables')}
    const goToProfile = () => {navigate('/profile')}
    const goToDashbord = () => {navigate('/')}
    const goToBilling = () => {navigate('/billing')}
    const goToRTL = () => {navigate('/RTL')}
    const goToSignIn = () => {navigate('/signin')}
    const goToSignUp = () => {navigate('/signup')}


    return (
        <div className="side-panel">
            <img alt='logo' src={LOGO}/>
            <img  alt='logo' src={line}/>
            <div className="dashbord-items">
                <div className="link"><button onClick={goToDashbord}><img src={dashboard} alt={'Dashboard'}/></button></div>
                <div className="link"><button onClick={goToTables}><img src={tables}    alt={'Tables'}/></button></div>
                <div className="link"><button onClick={goToBilling}><img src={billing}   alt={'Dashboard'}/></button></div>
                <div className="link"><button onClick={goToRTL}><img src={RTL}       alt={'Dashboard'}/></button></div>
                <div className="link"><button onClick={goToProfile}><img src={profile}   alt={'Dashboard'}/></button></div>
                <div className="link"><button onClick={goToSignIn}><img src={signin}    alt={'Dashboard'}/></button></div>
                <div className="link">
                        <button onClick={goToSignUp} >
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