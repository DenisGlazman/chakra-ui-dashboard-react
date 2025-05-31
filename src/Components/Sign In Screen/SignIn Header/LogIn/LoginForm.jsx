import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Enter your email and password to sign in</p>

            <form className="login-form">
                <label className="form-label" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email address" className="form-input" />

                <label className="form-label" htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Your password" className="form-input" />

                <div className="remember-me">
                    <input type="checkbox" id="remember" className="toggle-switch" />
                    <label htmlFor="remember">Remember me</label>
                </div>

                <button type="submit" className="login-button">SIGN IN</button>
            </form>

            <p className="signup-text">
                Don’t have an account? <a href="#" className="signup-link">Sign up</a>
            </p>
        </div>
    );
};

export default LoginForm;
