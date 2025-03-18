import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Pesquisa from "./Pages/Pesquisa";

function Rotas() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pesquisa" element={<Pesquisa />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Rotas;