import './SignUp.css'
import Footer from "../Dashbord screen/Footer/Footer.jsx";
import SignInHeader from "../Sign In Screen/SignIn Header/SignInHeader.jsx";
import SignUpForm from "./Sign Up Form/SignUpForm.jsx";
const SignUp = () => {
    return (
        <div className="signUp">
            <SignUpForm/>
                <div className="signUp-upper">
                    <div className='header'>
                        <SignInHeader/>
                    </div>
                    <div className='welcome'>
                        <h2>Welcome!</h2>
                        <h5>Use these awesome forms to login or create new account in your project for free.</h5>
                    </div>
                </div>


                <div className="signUp-lower">
                    SignUp LOWER
                </div>


            <Footer/>
        </div>
    )
}
export default SignUp