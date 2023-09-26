import React from "react";
import './Cards.css'

function Card({ linkedin,imagem, nome, cargo }) {

    return (
        <a target="_blank" rel="noopener noreferrer" href={linkedin}>
            <div className="cardsContainer">
                <img src={imagem} alt={nome}></img>
                <h3>{nome}</h3>
                <p>{cargo}</p>
            </div>
        </a>
    )
}

export default Card;