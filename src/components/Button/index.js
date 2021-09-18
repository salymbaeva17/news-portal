import React from 'react';
import "./style.css"
const Button = ({variant="primary", text, type="button", display="inline-block", textCase, color="white", onClick, borderColor, margin, background}) => {
    return (
        <button type={type} onClick={onClick} className={`btn text-${color} mt-0 text-${textCase} bg-${background} btn-${variant} border-${borderColor} d-${display} ms-${margin} mt-md-4`}>{text}</button>
    );
};

export default Button;