import React from 'react';
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import "./style.css"
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <Layout>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-title">
                        <h3>404</h3>
                    </div>
                    <h2>We are sorry, Page not found!</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily
                        unavailable.</p>
                    <Link to="/" className="back-link">Back To Homepage</Link>
                </div>

            </div>
        </Layout>
    );
};

export default NotFound;