
import './SignIn.css'

import Footer from "../Dashbord screen/Footer/Footer";
import SignInHeader from "./SignIn Header/SignInHeader.jsx";

const SignIn = () => {
    return(
        <div className='signIn'>
            SIGN IN SCREEN
            <div className='signIn-container'>
                <SignInHeader/>
                <div className='signIn-main-container'>
                    <div className='signIn-main-left'>
                        <div className='signIn-form'>
                            <h2>Welcome Back</h2>
                            <h4>Enter your email and password to sign in</h4>
                            <input type='email' name='email' placeholder='Email' />
                            <input type='password' name='password' placeholder='Password' />
                            <button className='signIn-btn'>Sign In</button>
                            <button className='signIn-btn'>Sign In</button>
                            <h4>Don't have an account? Sign up</h4>
                        </div>
                        </div>
                    <div className='signIn-main-right'>
                        signIn-main-right
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignIn