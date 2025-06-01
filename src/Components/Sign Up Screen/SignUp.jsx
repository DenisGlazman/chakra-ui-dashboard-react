import './SignUp.css'
import Footer from "../Dashbord screen/Footer/Footer.jsx";
import SignInHeader from "../Sign In Screen/SignIn Header/SignInHeader.jsx";
import SignUpForm from "./Sign Up Form/RegisterForm.jsx";
import RegisterForm from "./Sign Up Form/RegisterForm.jsx";
const SignUp = () => {
    return (
        <div className="signUp">

                <div className="signUp-upper">
                    <div className='header'>
                        <SignInHeader/>
                    </div>
                    <div className='welcome'>
                        <h1>Welcome!</h1>
                        <h4>Use these awesome forms to login or create new <br/> account in your project for free.</h4>
                    </div>
                    <RegisterForm/>
                </div>



                <div className="signUp-lower">

                </div>


            <Footer/>
        </div>
    )
}
export default SignUp