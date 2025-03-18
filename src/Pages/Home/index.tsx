import React from "react";
import './styles.scss'
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="home-container">
            <div className="home-titulo">
                <h1>Desafio do Capitulo 3, Bootcamp DevSuperior</h1>
            </div>
            <div className="home-text">
                <h1>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="" className="home-link">antforfigma@gmail.com</a></h1>
            </div>
            <div>
                <Link to="pesquisa">
                    <button className="home-btn">Começar</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;