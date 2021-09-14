import React from 'react';
import "./style.css"
import {Link, NavLink} from "react-router-dom";
import {Logo} from "../images";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-box">
                <Link to="/" className="logo"><Logo/></Link>
                <nav className="navbar">
                    <NavLink exact className="header-link" to="/">Главная</NavLink>
                    <NavLink className="header-link" to="/news">Новости</NavLink>
                    <NavLink className="header-link" to="/login">Войти</NavLink>
                    <NavLink className="header-link" to="/signup">Зарегистрироваться</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;