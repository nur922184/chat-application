import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';

const Login = () => {
    const [currState, setCurrState] = useState("Sign Up");
    return (
        <div className='login'>
            <div className="signup-container">
                {/* Left side with Logo and App Name */}
                <div className="logo-section">
                    <img src={assets.logo_big} alt="Chatapp Logo" className="logo" />
                </div>

                {/* Right side with Signup Form */}
                <div className="signup-box">
                    <h2 className="signup-title">{currState}</h2>
                    <form className="signup-form">
                        {currState === "Sign Up" ? <input
                            type="text"
                            placeholder="username"
                            className="signup-input"
                        /> : null}
                        <input
                            type="email"
                            placeholder="Email address"
                            className="signup-input"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="signup-input"
                        />
                        <button
                            type="submit"
                            className="signup-button"
                        >
                            {currState === "Sign Up" ? "Create account" : "Login"}
                        </button>
                        <div className="signup-checkbox">
                            <input
                                type="checkbox"
                                id="terms"
                            />
                            <label htmlFor="terms" className="checkbox-label">
                                Agree to the terms of use & privacy policy.
                            </label>
                        </div>
                        {
                            currState === "Sign Up"
                                ?
                                <p className="signup-login-text">
                                    Already have an account?
                                    <span onClick={() => setCurrState("login Now")} className="signup-login-link">
                                        Login here
                                    </span>
                                </p> :
                                <p className="signup-login-text">
                                    Create an account?
                                    <span onClick={() => setCurrState("Sign Up")} className="signup-login-link">
                                        Click here
                                    </span>
                                </p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
