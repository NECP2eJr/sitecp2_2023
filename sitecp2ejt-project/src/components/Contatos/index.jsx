import { useState } from 'react';
import Equipe from '../../assets/cpmigos.png';
import "./Contatos.css";
import FormsContato from '../FormsContato/index';

const Contatos = () => {

    const [isFormsContatoVisible, setIsFormsContatoVisible] = useState(false);

    // Function to toggle the visibility of FormsContato
    const handleToggleFormsContato = () => {
        setIsFormsContatoVisible(!isFormsContatoVisible);
    };

    return (
        <>
            <div className='contato-section' id='contato'>
                <div className='coluna1'>
                    <h1>Contato</h1>
                    <img src={Equipe} alt="Equipe CP2eJr" />
                </div>

                <div className='coluna2'>
                    <h1>Contato</h1>

                    <div className="contatos-container">
                        <div className="contato-box">
                            <h3>Telefone</h3>
                            <p>+55 (35) 3471-9200</p>
                        </div>

                        <div className="contato-box">
                            <h3>Email</h3>
                            <p>cp2ejr-diretoria@inatel.br</p>
                        </div>
                    </div>

                    <div className="contatos-container">

                        <div className="contato-box">
                            <h3>Redes Sociais</h3>
                            <p>Instagram: @cp2ejr<br/>Facebook: Empresa.Junior.Inatel<br/>linkedin: CP2 - Empresa Júnior</p>
                        </div>

                        <div className="contato-box">
                            <h3>Endereço</h3>
                            <p>Avenida João de Camargo, 510, Centro, Campus do INATEL, Prédio da Incubadora, Sala 12, Santa Rita do Sapucaí, MG</p>
                        </div>

                    </div>

                    <div className='botao'>
                        <button className="botao-texto" onClick={handleToggleFormsContato}>Entre em contato</button>
                    </div>

                    {isFormsContatoVisible && <FormsContato onClose={handleToggleFormsContato} />}

                    <div className="space-logo"></div>
                </div>
            </div>
        </>
    );
}

export default Contatos;