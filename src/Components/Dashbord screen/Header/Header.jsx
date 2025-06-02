import './Header.css'
import {ReactComponent as Notification} from './Header_icons/notification.svg'
import {ReactComponent as Settings} from './Header_icons/sharp.svg'
import {ReactComponent as Person} from './Header_icons/person.svg'
import  {ReactComponent as SignIn} from'./Header_icons/Sign In.svg'
import input from './Header_icons/input_icon.png'
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.jsx";

import {useLocation} from "react-router-dom";


const Header = () => {

    const location = useLocation();

    const isNotProfile = location.pathname !== '/profile';
    const isProfile = location.pathname === '/profile';

    const headerClass = `header_container ${isProfile ? 'profile-style' : isNotProfile ? 'not-profile-style' : ''}`;

    return(

        <div className={headerClass}>


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
                    <button className='person' type='submit'><Person/><SignIn/></button>
                    <button className='setting' type='reset'><Settings/></button>
                    <button className='notification' type='reset'><Notification/></button>
                </div></div>




        </div>


    )
}
export default Header;
