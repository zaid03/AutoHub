import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="logo-desc">
                    <img src="/logo_word.png" alt="Logo" onClick={() => window.location.href = "/"} />
                    <p className="p-style"> is an online marketplace that allows users to buy, sell, and explore car listings.</p>
                </div>
                <div className="navigation">
                    <div className="nav-column">
                        <h4 className="h4-style">Browse</h4>
                        <NavLink to="/" className="nav-btn">All Cars</NavLink>
                        <NavLink to="/" className="nav-btn">New Arrivals</NavLink>
                        <NavLink to="/" className="nav-btn">Electric Vehicles</NavLink>
                    </div>
                    <div className="nav-column">
                        <h4 className="h4-style">Support</h4>
                        <NavLink to="/" className="nav-btn">Contact Us</NavLink>
                        <NavLink to="/" className="nav-btn">FAQ</NavLink>
                    </div>
                    <div className="nav-column">
                        <h4 className="h4-style">Company</h4>
                        <NavLink to="/" className="nav-btn">About Us</NavLink>
                        <NavLink to="/" className="nav-btn">Careers</NavLink>
                    </div>
                </div>
                <div className="social">
                    <a 
                        href="https://www.linkedin.com/in/zaid-terguy" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="nav-btn"
                    >
                        <i className="fa-brands fa-linkedin"></i> 
                    </a>
                    <a 
                        href="https://github.com/zaid03" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="nav-btn"
                    >
                        <i className="fa-brands fa-github"></i> 
                    </a>
                </div>
            </div>
            <div className="credits">
                <p className="p-style">Made with love in Tétouan, morocco ❤️</p>
                <p className="p-style">Copyright ® Zaid Terguy</p>
            </div>
        </div>
    );
};

export default Footer;