import React from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import "./style.css"


const SignUp = () => {
    return (
        <Layout>
            <div className="modal-wrapper">
                <div className="modal-box">
                    <h1 className="modal-title">Sign Up</h1>
                    <p className="modal-desc">Welcome!</p>
                    <form className="modal-form">
                        <div className="form-group">
                            <label htmlFor="fullname">Fullname</label>
                            <input type="email" id="fullname" placeholder="John Snow" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="John.snow@gmail.com" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="*********" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Retype Password</label>
                            <input type="password" id="password" placeholder="*********" required/>
                        </div>
                        <div className="quest-group">
                            <div className="radio-btn">
                                <input id="remember" type="radio" name="remember"/>
                                <label htmlFor="remember" className="radio-label">Remember me </label>
                            </div>
                        </div>
                        <Button variant="login" text="Войти"/>
                        <Button variant="google" text="Or sign-up with google"/>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;