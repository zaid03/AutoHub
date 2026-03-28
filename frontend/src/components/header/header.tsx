import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className="container-header">
            <div className="logo-area">
                <img src="/logo_word.png" alt="Logo" onClick={() => window.location.href = "/"} />
            </div>
            <div className="nav-btns">
                <div className="btns">
                    <NavLink to="/" className="nav-btn">Browse</NavLink>
                    <NavLink to="/" className="nav-btn">New</NavLink>
                    <NavLink to="/" className="nav-btn">Electric</NavLink>
                    <NavLink to="/" className="nav-btn">Advices</NavLink>
                    <NavLink to="/list" className="nav-btn">Contact</NavLink>
                </div>
                <div className="icons" >
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-user"></i>
                </div>
                
            </div>
            <div className="height"></div>
            <div className="login-user-area">
                <NavLink to="/login" className="blue-btn">
                    <i className="fa-solid fa-plus"></i>
                    Post a listing
                </NavLink>
            </div>
        </div>
    );
};

export default Header;