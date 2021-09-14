import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";
import {Logo} from "../images";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-box">
                <Link to="/" className="logo"><Logo/></Link>
                <nav className="navbar">
                    <Link className="header-link" to="/">Главная</Link>
                    <Link className="header-link" to="/news">Новости</Link>
                    <Link className="header-link" to="/login">Войти</Link>
                    <Link className="header-link" to="/signin">Зарегистрироваться</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;