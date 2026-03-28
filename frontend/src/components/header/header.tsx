import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-header">
            <div className="logo-area">
                <img src="/logo_word.png" alt="Logo" />
            </div>
            <div className="nav-btns">
                <NavLink to="/" className="nav-btn">Browse</NavLink>
                <NavLink to="/list" className="nav-btn">Post a listing</NavLink>
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className="height"></div>
            <div className="login-user-area">
                <NavLink to="/login" className="blue-btn">Login</NavLink>
                <NavLink to="/sign" className="blue-btn">Sign up</NavLink>
            </div>
        </div>
    );
};

export default Header;