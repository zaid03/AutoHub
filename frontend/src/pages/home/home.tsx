import React from "react";
import "./home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const home = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="test">test</h1>
            </div>
            <Footer />
        </>
    );
};

export default home;