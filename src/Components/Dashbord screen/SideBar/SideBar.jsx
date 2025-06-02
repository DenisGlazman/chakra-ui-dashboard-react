import './SideBar.css'
import LOGO from './SideBar_Icons/LOGO/LOGO.png'
import BillingWithBackground from './SideBar_Icons/BillingWithBackground.svg'
import DashbordWithBack from './SideBar_Icons/DashbordWithBack.svg'
import TablesWithBack from './SideBar_Icons/TablesWithBack.svg'
import RTLwithBack from './SideBar_Icons/RTLwithBack.svg'
import ProfileWithBack from './SideBar_Icons/ProfileWithBack.svg'
import SignInWithBack from './SideBar_Icons/SignInWithBack.svg'
import SignUpWithBack from './SideBar_Icons/SignUpWithBack.svg'
import line from'./SideBar_Icons/LOGO/Vector 6.png'
import {useNavigate} from "react-router-dom";
import Downlink from "./Downlink/Downlink";




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

                <div className="sidebar_link"><button onClick={goToDashbord}>
                    <img src={DashbordWithBack} alt='Dashboard'/>Dashboard
                </button></div>



                <div className="sidebar_link"><button onClick={goToTables}>
                    <img src={TablesWithBack}    alt={'Tables'}/>Tables
                </button></div>

                <div className="sidebar_link"> <button onClick={goToBilling}>
                    <img src={BillingWithBackground} alt='bill'/>Billing
                </button></div>

                <div className="sidebar_link"><button onClick={goToRTL}>
                    <img src={RTLwithBack} alt={'RTL'}/>RTL
                </button></div>

                <span className='acc'>ACCOUNT PAGES</span>
                <div className="sidebar_link"><button onClick={goToProfile}>
                    <img   src={ProfileWithBack} alt={'profile'}/>Profile
                </button></div>

                <div className="sidebar_link"><button onClick={goToSignIn}>
                    <img src={SignInWithBack} alt={'signIn'}/>Sign In
                </button></div>

                <div className="sidebar_link"><button onClick={goToSignUp}>
                    <img src={SignUpWithBack} alt={'signUp'}/>Sign Up
                </button></div>

                <Downlink/>
            </div>
        </div>
    )
}
export default SideBar;