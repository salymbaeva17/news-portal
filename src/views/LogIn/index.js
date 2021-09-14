import React from 'react';
import "./style.css"
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import {Link} from "react-router-dom";

const LogIn = () => {
    return (
        <Layout>
            <div className="row">
                <div className="modal-wrapper">
                    <div className="modal-component">
                        <h1 className="modal-title">Login to your account</h1>
                        <p className="modal-desc">Welcome back</p>
                        <form className="modal-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="John.snow@gmail.com" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="*********" required/>
                            </div>
                            <div className="quest-group">
                                <div className="radio-btn">
                                    <input id="remember" type="radio" name="remember"/>
                                    <label htmlFor="remember" className="radio-label">Remember me </label>
                                </div>
                                <Link to="/" className="form-link">Forgot password?</Link>
                            </div>
                            <Button variant="login" text="Войти"/>
                            <Button variant="google" text="Or sign-in with google"/>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LogIn;