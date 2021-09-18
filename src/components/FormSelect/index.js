import React from 'react';
import Form from "react-bootstrap/Form";

const FormSelect = ({label, name, register, required, errors, errorMessage, option1, option2, option3, option4}) => {
    return (
        <>
            <Form.Label controlId="floatingSelectGrid">{label}</Form.Label>
            <Form.Select {...register(label, {required: true})}>
                <option value={option1} disabled>{option1}</option>
                <option value={option2}>{option2}</option>
                <option value={option3}>{option3}</option>
                {option4 && <option value={option4}>{option4}</option>}
            </Form.Select>
            {errors.group && <p className="text-danger">{errorMessage ? errorMessage : "Заполните поле!"}</p>}
        </>
    );
};

export default FormSelect;