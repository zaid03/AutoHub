import React, { useState } from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container-header">
            <div className="logo-area">
                <img src="/logo_word.png" alt="Logo" onClick={() => window.location.href = "/"} />
            </div>
            <div className="nav-btns">
                <div className="btns">
                    <NavLink to="/" className="nav-btn">Browse</NavLink>
                    <NavLink to="/" className="nav-btn">New Arrivals</NavLink>
                    <NavLink to="/" className="nav-btn">Electric Vehicles</NavLink>
                    <NavLink to="/" className="nav-btn">Services</NavLink>
                    <NavLink to="/" className="nav-btn">Advices</NavLink>
                    <NavLink to="/" className="nav-btn">Contact</NavLink>
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

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </div>
            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-btns">
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Browse</NavLink>
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>New Arrivals</NavLink>
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Electric Vehicles</NavLink>
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Services</NavLink>
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Advices</NavLink>
                        <NavLink to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    </div>
                    <NavLink to="/login" className="blue-btn" onClick={() => setMenuOpen(false)}>
                        <i className="fa-solid fa-plus"></i>
                        Post a listing
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Header;