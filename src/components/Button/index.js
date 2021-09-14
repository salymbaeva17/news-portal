import React from 'react';
import "./style.css"
const Button = ({variant, text}) => {
    return (
        <button className={`button text-white button-${variant}`}>{text}</button>
    );
};

export default Button;