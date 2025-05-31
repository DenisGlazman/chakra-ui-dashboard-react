import LOGO from '../images/Logo.svg';
import Dashbord from '../images/Dashboard.svg'
import Profile from '../images/Profile.svg'
import SignIn from '../images/Sign In.svg'
import SignUp from '../images/Sign Up.svg'

import './Sign_In_Header.css'

import {useNavigate} from "react-router-dom";

const SignInHeader = () => {


    let navigate = useNavigate()
    const goToProfile = () => {navigate('/profile')}
    const goToDashbord = () => {navigate('/')}
    const goToSignIn = () => {navigate('/signin')}
    const goToSignUp = () => {navigate('/signup')}
    return(
        <div className='signIn-header'>
            <div className='logo'>
                <img alt='logo' src={LOGO}/>

            </div>
            <div className='buttons'>
                <div className='navigation'>
                    <button className='links' onClick={goToDashbord}><img alt='dashbord' src={Dashbord}/></button>
                    <button className='links' onClick={goToProfile}><img alt='profile' src={Profile}/></button>
                    <button className='links' onClick={goToSignIn}><img alt='signin' src={SignIn}/></button>
                    <button className='links' onClick={goToSignUp}><img alt='signup' src={SignUp}/></button>
                    <button className='download'>Free Download</button>
                </div>


            </div>


        </div>
    )
}
export default SignInHeader;