import LOGO from "../../Dashbord screen/SideBar/SideBar_Icons/LOGO/LOGO.png";
import line from "../../Dashbord screen/SideBar/SideBar_Icons/LOGO/Vector 6.png";


const SignInHeader=()=>{
    return(
        <div className='signIn-header'>
            <div className='logo'>
                <img alt='logo' src={LOGO}/>
                <img  alt='logo' src={line}/>
            </div>
            <div className='buttons'>
                <button className='signIn-btn'>Dashboard</button>
                <button className='signIn-btn'>Profile</button>
                <button className='signIn-btn'>Sign In</button>
                <button className='signIn-btn'>Sign Up</button>
                <button className='signIn-btn'>Free Download</button>
            </div>


        </div>
    )
}
export default SignInHeader;