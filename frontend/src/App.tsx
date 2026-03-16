import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />  {/* to delete later */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
