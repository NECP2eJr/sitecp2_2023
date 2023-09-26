import React, { useState, useEffect } from 'react';
import './FormsContato.css';

function FormsContato({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {

        if (isClosing) {
            const timer = setTimeout(() => onClose(), 500);
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    const handleClosePopup = () => {
        setIsClosing(true); 
    };
    
    

    return (
        <div className={`FormsContatoContainer ${isClosing ? 'not-visible' : 'visible'}`}>
            <i className="material-icons close-button" onClick={handleClosePopup}>
                close
            </i>
            <div className="FormsContatoHeader">
                <h1>Entre em Contato!</h1>
                <p>Telefone: +55 35 3471-9200</p>
                <p>E-mail: contato@cp2ejr.com.br</p>
            </div>
            <div className="input-group">
                <input autoComplete="off" required type="text" name="text" placeholder="Nome Completo" />
                <input autoComplete="off" required type="text" name="text" placeholder="Email" />
                <input autoComplete="off" required type="text" name="text" placeholder="Assunto" />
                <textarea
                    autoComplete="off"
                    className="textarea"
                    id="story"
                    name="story"
                    rows="5"
                    cols="33"
                    placeholder="Sua Mensagem"
                />
            </div>
            <div className="botao">
                <button className="botao-texto">Enviar</button>
            </div>
        </div>
    );
}

export default FormsContato;
