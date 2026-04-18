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
                                    <option disabled selected hidden>Brand</option>
                                    <option>test</option>
                                    <option>test</option>
                                    <option>test</option>
                                </select>
                                <select>
                                    <option disabled selected hidden>Model</option>
                                    <option>test</option>
                                    <option>test</option>
                                    <option>test</option>
                                </select>
                            </div>
                            <div className="second-row">
                                <input 
                                    type="number"
                                    placeholder="Minimum price"
                                    min={0} />
                                <input 
                                    type="number"
                                    placeholder="Maximum prix"
                                    min={0} />
                            </div>
                            <div className="third-row">
                                <input 
                                    type="number"
                                    placeholder="Minimum kilometres"
                                    min={0} />
                                <input 
                                    type="number"
                                    placeholder="Maximum kilometres"
                                    min={0} />
                            </div>
                        </div>
                        <button className="blue-btn">Search</button>
                    </div>
                </div>
            </div>
            <div className="second-container">
                <div className="first-stat">
                    <div className="title-area">
                        <i className="fa-solid fa-square"></i>
                        <span className="title-style">Most popular brands</span>
                    </div>
                    <div className="stat-data">
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Mercedes</span>
                        </div>
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Audi</span>
                        </div>
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Audi</span>
                        </div>
                    </div>
                </div>
                <div className="second-stat">
                    <div className="title-area">
                        <i className="fa-solid fa-square"></i>
                        <span className="title-style">Most popular models</span>
                    </div>
                    <div className="stat-data">
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Audi</span>
                        </div>
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Audi</span>
                        </div>
                        <div className="stat">
                            <img src="/images/audi.png" alt="audi logo" />
                            <span className="span-style">Audi</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default home;