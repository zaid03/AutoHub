import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Home = () => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    const [brands, setBrands] = useState<Array<{id: string; name: String}>>([]);
    const [error, setError] = useState<string | null>(null);
    const [models, setModels] = useState<Array<{model_name: string}>>([]);
    const [errorModels, setErrorModels] = useState<string | null>(null);
    const [topBrands, setTopBrands] = useState<Array<{name: string; logo: string;}>>([]);
    const [topModels, setTopModels] = useState<Array<{model_name: string; logo: string}>>([]);
    const [errorTopBrands, setErrorTopBrands] = useState<string | null>(null);
    const [errorTopModels, setErrorTopModels] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const BrandResponse = await fetch(`${API_URL}/api/brands`);
                if (!BrandResponse.ok) throw Error("failed to fetch brands");
                const data = await BrandResponse.json();
                setBrands(data.data);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An error occurred";
                setError(errorMessage);
            }

            try {
                const TopBrandResponse = await fetch(`${API_URL}/api/brands/top-brands`);
                if (!TopBrandResponse.ok) throw Error("failed to fetch top brands");
                const data = await TopBrandResponse.json();
                setTopBrands(data.data);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An error occurred";
                setErrorTopBrands(errorMessage);
            }

            try {
                const TopModelsResponse = await fetch(`${API_URL}/api/models/top-models`);
                if (!TopModelsResponse.ok) throw Error("failed to fetch top brands");
                const data = await TopModelsResponse.json();
                setTopModels(data.data);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "An error occurred";
                setErrorTopModels(errorMessage);
            }
        }
        fetchData();
    }, []);

    const handleBrandChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const brand_id = e.target.value;
        try {
            const response = await fetch(`${API_URL}/api/models/${brand_id}`);
            if (!response.ok) throw Error("failed to fetch models");
            const data = await response.json();
            setModels(data.data);
        } catch(error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            setErrorModels(errorMessage)
        }
    }
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="search-container">
                    <div className="search-params">
                        <div className="search-options">
                            <div className="first-row">
                                {error ? (
                                    <select disabled>
                                        <option className="Error">{error}</option>
                                    </select>
                                ) : (
                                    <select onChange={handleBrandChange} defaultValue="">
                                        <option disabled value="">Brand</option>
                                        {brands.map((brand) => (
                                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                                        ))}
                                    </select>
                                )}
                                {errorModels ? (
                                    <select disabled>
                                        <option className="Error">{errorModels}</option>
                                    </select>
                                ): (
                                    <select defaultValue="">
                                        <option disabled value="">Models</option>
                                        {models.map((model) => (
                                            <option key={model.model_name} value={model.model_name}>{model.model_name}</option>
                                        ))}
                                    </select>
                                )}
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
                        {errorTopBrands? (
                            <div className="stat">
                                <span className="Error">{errorTopBrands}</span>
                            </div>
                        ): (
                            topBrands.map((brand) => (
                                <div key={brand.name} className="stat">
                                    <img src={brand.logo} alt={brand.name} />
                                    <span className="span-style">{brand?.name}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="second-stat">
                    <div className="title-area">
                        <i className="fa-solid fa-square"></i>
                        <span className="title-style">Most popular models</span>
                    </div>
                    <div className="stat-data">
                        {errorTopModels? (
                            <div className="stat">
                                <span className="Error">{errorTopBrands}</span>
                            </div>
                        ) : (
                            topModels.map((model) => (
                                <div key={model.model_name} className="stat">
                                    <img src={model.logo} alt={model.model_name} />
                                    <span className="span-style">{model?.model_name}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;