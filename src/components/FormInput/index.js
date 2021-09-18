import React from 'react';
import Form from "react-bootstrap/Form";

const FormInput = ({md = "", type = "text", label, name, placeholder, errorMessage="Заполните поле!", register, errors, required}) => {
    return (
        <>
            <Form.Label controlId="floatingInputGrid">{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} {...register(name, {required: true})} />
            {errors.name && <p className="text-danger">{errorMessage}</p>}
        </>
)
    ;
};

export default FormInput;