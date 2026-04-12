import React from "react";
import "./home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const home = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="search-container">
                    <div className="search-params">
                        <div className="search-options">
                            <div className="first-row">
                                <select>
                                    <option disabled selected hidden>marque</option>
                                    <option>test</option>
                                    <option>test</option>
                                    <option>test</option>
                                </select>
                                <select>
                                    <option disabled selected hidden>model</option>
                                    <option>test</option>
                                    <option>test</option>
                                    <option>test</option>
                                </select>
                            </div>
                            <div className="second-row">
                                <input 
                                    type="number"
                                    placeholder="Prix minimum" />
                                <input 
                                    type="number"
                                    placeholder="Prix maximum" />
                            </div>
                            <div className="third-row">
                                <input 
                                    type="number"
                                    placeholder="Kilométrage minimum" />
                                <input 
                                    type="number"
                                    placeholder="Kilométrage maximum" />
                            </div>
                        </div>
                        <button className="blue-btn">Rechercher</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default home;