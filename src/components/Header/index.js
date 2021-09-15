import React, {useState} from 'react';
import "./style.css"
import {Link, NavLink} from "react-router-dom";
import {Logo} from "../images";
import axios from "axios";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: ""
    })
    const [sentSuccess, setSentSuccess] = useState(false)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://613ae97d110e000017a453d0.mockapi.io/callback', user)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() => {
                    setIsOpen(false)
                    setSentSuccess(false)
                }, 3000)
            })
    }
    return (
        <header className="header">
            <div className="container header-box">
                <Link to="/" className="logo"><Logo/></Link>
                <nav className="navbar">
                    <NavLink exact className="header-link" to="/">Главная</NavLink>
                    <NavLink className="header-link" to="/news">Новости</NavLink>
                    <NavLink className="header-link" to="/login">Войти</NavLink>
                    <NavLink className="header-link" to="/signup">Зарегистрироваться</NavLink>
                    <NavLink className="header-link" to="/request">Заявки</NavLink>
                    <button type="button" className="callback" onClick={() => setIsOpen(true)}>Связаться со мной</button>
                </nav>
                {
                    isOpen &&
                    <div className="modal-window">
                        <div className="modal-content">
                            <form onSubmit={handleSubmit}>
                                {sentSuccess ? "Успешно отправлено" :
                                    <>
                                        <h2 className="modal-title">Оставьте свою заявку</h2>
                                        <div className="group-form">
                                            <label htmlFor="name">Ваше имя:</label>
                                            <input type="text" id="name" name="name" onChange={handleChange}
                                                   placeholder="Дима"/>
                                        </div>
                                        <div className="group-form">
                                            <label htmlFor="name">Ваш номер:</label>
                                            <input type="text" id="name" name="phone" onChange={handleChange}
                                                   placeholder="0555555555"/>
                                        </div>
                                        <div className="group-form">
                                            <label htmlFor="email">Почта:</label>
                                            <input type="email" id="email" name="email" onChange={handleChange}
                                                   placeholder="dima@gmail.com"/>
                                        </div>
                                        <button type="submit" className="submit">Отправить</button>
                                    </>
                                }
                                <button className="close-btn" onClick={() => setIsOpen(false)}>╳</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </header>
    );
};

export default Header;