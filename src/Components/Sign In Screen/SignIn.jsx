
import './SignIn.css'

import Footer from "../Dashbord screen/Footer/Footer";
import SignInHeader from "./SignIn Header/SignInHeader.jsx";
import LoginForm from "./SignIn Header/LogIn/LoginForm.jsx";

const SignIn = () => {
    return(
        <div className='signIn'>
            SIGN IN SCREEN
            <div className='signIn-container'>
                <SignInHeader/>
                <div className='signIn-main-container'>
                    <div className='signIn-main-left'>
                        <LoginForm/>
                    </div>
                    <div className='signIn-main-right'>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignIn