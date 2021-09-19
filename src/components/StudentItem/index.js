import React, {useState} from 'react';
import Button from "../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";

const StudentItem = ({item, idx,deleteStudent, customStyles}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [modalIsOpen, setIsOpen] = useState(false)

    //
    // const handleUpdate = (data) => {
    //     editStudent(item.id, data)
    //     setIsOpen(false)
    // }

    return (
        <tr>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.contract}</td>
            <td>{item.paid}</td>
            <td>{item.laptop}</td>
            <td>{item.group}</td>
            <td>{item.comment}</td>
            <td>{item.status}</td>
            <td>
                <Button variant="warning" text={<FontAwesomeIcon icon={faEdit}/>}/>
                <Button margin="3" variant="danger" onClick={() => deleteStudent(item.id)} text={<FontAwesomeIcon icon={faTrash}/>}/>
            </td>
        </tr>
    );
};

export default StudentItem;