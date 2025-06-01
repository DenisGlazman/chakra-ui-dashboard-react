import {ReactComponent as LOGO} from '../images/Logo.svg';
import {ReactComponent as Dashbord} from '../images/Dashboard.svg'
import {ReactComponent as Profile} from '../images/Profile.svg'
import {ReactComponent as SignIn} from '../images/Sign In.svg'
import {ReactComponent as SignUp} from '../images/Sign Up.svg'

import './Sign_In_Header.css'

import {useLocation, useNavigate} from "react-router-dom";

const SignInHeader = () => {


    const navigate = useNavigate()
    const location = useLocation();

    const goToProfile = () => {navigate('/profile')}
    const goToDashbord = () => {navigate('/')}
    const goToSignIn = () => {navigate('/signin')}
    const goToSignUp = () => {navigate('/signup')}

    const isSignIn = location.pathname === '/signin';
    const isSignUp = location.pathname === '/signup';

    const headerClass = `signIn-header ${isSignIn ? 'signin-style' : isSignUp ? 'signup-style' : ''}`;


    return(
        <div className={headerClass}>

            <div className='buttons'>
                <div className='navigation'>
                    <LOGO className='links'/>
                    <Dashbord className='links' onClick={goToDashbord}/>
                    <Profile className='links' onClick={goToProfile}/>
                    <SignIn className='links' onClick={goToSignIn}/>
                    <SignUp className='links' onClick={goToSignUp}/>
                    <button className='download'>Free Download</button>
                </div>


            </div>


        </div>

    )
}
export default SignInHeader;