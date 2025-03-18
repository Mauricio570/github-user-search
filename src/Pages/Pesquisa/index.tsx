import React, { useEffect, useState } from "react";
import "./styles.scss";
import { setDefaultResultOrder } from "dns";

interface DadosGithub {
    name: string;
    avatar_url: string;
    login: string;
    followers: number;
    public_repos: number;
    html_url: string;
}

function Pesquisa() {
    const [username, setUsername] = useState("");
    const [dados, setDados] = useState<DadosGithub | null>(null);
    const [error, setErro] = useState<String | null>(null);

    const fetchDados = () => {
        setDados(null);
        setDados(null);

        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Usuario não encontrado");
                }
                setErro(null);
                return response.json();
            })
            .then((result) => {
                setDados(result);
            })
            .catch((error => {
                console.error(error);
                setErro(error.message);
            }));
    };
    return (
        <div >
            <div className="pesquisa-container">

                <div className="text-container">
                    <h1 className="text-pesquisa">Encontre um perfil Github</h1>
                </div>
                <div>
                    <input type="text"
                        className="input-perfil"
                        placeholder="Usuário Github"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <button
                        className="btn-pesquisa"
                        onClick={fetchDados}
                    >Pesquisar</button>
                </div>
            </div>
            {error && <h1>Usuário não encontrado</h1>}
            {dados && (
                <div className="resultado-container">
                    <h2>{dados?.name}</h2>
                    <img src={dados?.avatar_url} alt="Avatar" width="150" />
                    <p>Usuário: {dados?.login}</p>
                    <p>Seguidores: {dados?.followers}</p>
                    <p>Repositórios Públicos: {dados?.public_repos}</p>
                    <a href={dados?.html_url} target="_blank" rel="noreferrer">
                        Ver perfil no GitHub
                    </a>
                </div>
            )}
        </div>
    );
}
export default Pesquisa;