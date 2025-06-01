import Google from '../images/Google.svg'
import Facebook from '../images/Facebook.svg'
import Apple from '../images/Apple.svg'
import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className="background">
            <div className="form-container">
                <h2 className="form-title">Register with</h2>

                <div className="social-buttons">
                    <img src={Facebook} alt='facebook'/>
                    <img src={Apple} alt='apple'/>
                    <img src={Google} alt='google'/>

                </div>

                <div className="divider">
                    <span>or</span>
                </div>

                <form className="form">
                    <label>
                        Name
                        <input type="text" placeholder="Your full name" />
                    </label>

                    <label>
                        Email
                        <input type="email" placeholder="Your email address" />
                    </label>

                    <label>
                        Password
                        <input type="password" placeholder="Your password" />
                    </label>

                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <button type="submit" className="submit-btn">SIGN UP</button>
                </form>

                <p className="signin-link">
                    Already have an account? <a href="#">Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;

