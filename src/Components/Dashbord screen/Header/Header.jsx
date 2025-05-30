import './Header.css'
import notification from './Header_icons/notification_icon.png'
import settings from './Header_icons/settings_icon.png'
import signIn from'./Header_icons/sign_in_icon.png'
import input from './Header_icons/input_icon.png'
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

const Header = () => {
    return(

        <header className="header_container">
            <div className="left_side">
                <Breadcrumbs />
                <div className="up"></div>
                <div className="down"></div>
            </div>
            <div className="right_side">
                <div className="left">
                    <div className="left_wrapper">
                        <img alt='#' src={input}/>
                        <input type='text' placeholder='Type here' />
                    </div>
                </div>
                <div className="right">
                    <button type='submit'><img alt='#' src={signIn}/></button>
                    <button type='reset'><img alt='#' src={settings}/></button>
                    <button type='reset'><img alt='#' src={notification}/></button>
                </div>
            </div>
        </header>

    )
}
export default Header;