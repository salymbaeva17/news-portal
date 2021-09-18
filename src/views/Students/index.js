import React, {useEffect, useState} from 'react';
import {Col, Table, Row, Container} from "react-bootstrap";
import axios from "axios";
import Layout from "../../components/Layout";
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form'
import "./style.css"
import {useForm} from "react-hook-form";
import StudentItem from "../../components/StudentItem";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";

const Students = () => {
    const [students, setStudents] = useState([])
    const [showModal, setShowModal] = useState(false)
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const closeModal = () => {
        setShowModal(false)
    }
    const sendData = (data) => {
        axios.post(`https://613ae97d110e000017a453d0.mockapi.io/students`, data)
            .then(({data: student}) => {
                setStudents([...students, student])
                setShowModal(false)
                reset()
            })
    }
    const deleteStudent = (id) => {
        axios.delete(`https://613ae97d110e000017a453d0.mockapi.io/students/${id}`)
            .then(() => setStudents(students.filter(item => item.id !== id)))

    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "50%"
        },
    };
    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/students`)
            .then(({data}) => setStudents(data))
    }, [])
    return (
        <Layout>
            <div>
                <Table variant="dark">
                    <thead>
                    <tr>
                        <th>№</th> <th>Имя</th>
                        <th>Номер телефона</th> <th>Сумма контракта</th>
                        <th>Оплачено</th> <th>Ноутбук</th>
                        <th>Группа</th> <th>Комментарий</th>
                        <th>Статус</th> <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((item, idx) =>
                       <StudentItem key={item.id} item={item} idx={idx} showModal={showModal} deleteStudent={deleteStudent}/>)}
                    </tbody>
                </Table>
                <Button display="block" margin="auto" text="Добавить нового студента" onClick={() => setShowModal(true)} />
                <Modal isOpen={showModal} onRequestClose={closeModal} style={customStyles}>
                    <Container>
                        <form onSubmit={() => handleSubmit(sendData)}>
                            <Row className="g-2 mb-3">
                                <Col md>
                                    <FormInput
                                        errorMessage="Заполните поле!" name="name" register={register}
                                        required errors={errors} label="Введите имя" placeholder="Иван"
                                    />
                                </Col>
                                <Col md>
                                    <FormInput
                                        errorMessage="А это поле?" name="phone" register={register}
                                        required errors={errors} label="Номер телефона" placeholder="+996700077077"
                                    />
                                </Col>
                            </Row>
                            <Row className="g-2 mb-3">
                                <Col md>
                                    <FormInput
                                        errorMessage="А тут?" name="contract" register={register}
                                        required errors={errors} label="Сумма контракта" placeholder="3500"
                                    />
                                </Col>
                                <Col md>
                                    <FormInput
                                        errorMessage="А здесь?" name="paid" register={register}
                                        required errors={errors} label="Оплатил" placeholder="1000"
                                    />
                                </Col>
                            </Row>
                            <Row className="g-2 mb-3">
                                <Col md>
                                    <FormInput
                                        errorMessage="Тут пусто!" name="laptop" register={register}
                                        required errors={errors} label="Ноутбук" placeholder="MacBook Air"
                                    />
                                </Col>
                            </Row>
                            <Row className="g-2 mb-3">
                                <Col>
                                    <FormSelect
                                        errorMessage="Тут не не пусто!" name="group" register={register}
                                        required errors={errors} label="Группа"
                                        option1="Выберите группу" option2="Утренняя" option3="Вечерняя"
                                    />
                                </Col>
                                <Col>
                                    <FormSelect
                                        errorMessage="Тут тоже не не пусто!" name="status"
                                        register={register} required errors={errors}
                                        label="Группа" option1="Выберите статус" option2="active" option3="off"
                                    />

                                </Col>
                                <Col>
                                    <FormSelect
                                        errorMessage="Тут тоже не не пусто!" name="gender" register={register}
                                        required errors={errors} label="Группа" option1="Выберите пол"
                                        option2="Мужской" option3="Женский" option4="Неопределенный"
                                    />
                                </Col>
                            </Row>
                            <Row className="g-2 mb-3">
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Введите комментарий</Form.Label>
                                        <Form.Control as="textarea" style={{width: "100%"}} rows={3}
                                                      {...register("comment", {required: true})}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex">
                                <Button borderColor="white" display="block" textCase="uppercase" color="danger"
                                        background="transparent" margin="auto" text="close" onClick={closeModal}/>
                                <Button textCase="uppercase" margin="3" variant="success" text="save changes"/>
                            </div>
                        </form>
                    </Container>
                </Modal>
            </div>
        </Layout>);};
export default Students;