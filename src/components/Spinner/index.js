import React from 'react';
import "./style.css"

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="fingerprint-spinner">
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
                <div className="spinner-ring"/>
            </div>
        </div>
    );
};

export default Spinner;