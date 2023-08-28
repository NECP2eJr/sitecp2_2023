import Equipe from '../../assets/cpmigos.png';
import "./Contatos.css";

const Contatos = () => {
    const contato = [
        {
            title: 'Telefone',
            body: '+55 (35) 3471-9200',
        },
        {
            title: 'Email',
            body: 'cp2ejr-diretoria@inatel.br',
        },
        {
            title: 'Redes Sociais',
            body: 'Instagram: @cp2ejr Facebook: Empresa.Junior.Inatel linkedin: CP2 - Empresa Júnior',
        },
        {
            title: 'Endereço',
            body: 'Avenida João de Camargo, 510, Centro, Campus do INATEL, Prédio da Incubadora, Sala 12, Santa Rita do Sapucaí, MG',
        },
    ];

    const sliceIndex = Math.ceil(contato.length / 2);
    const primeiraParteContatos = contato.slice(0, sliceIndex);
    const segundaParteContatos = contato.slice(sliceIndex);

    return (
        <>
            <div className='contato-section'>
                <div className='coluna1'>
                    <h1>Contato</h1>
                    <img src={Equipe} alt="Equipe CP2eJr" />
                </div>

                <div className='coluna2'>
                    <h1>Contato</h1>
                    <div className="contatos-container">
                        {primeiraParteContatos.map((contato, index) => (
                            <div className="contato" key={index}>
                                <div className="contato-box">
                                    <h3>{contato.title}</h3>
                                    <p>{contato.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contatos-container">
                        {segundaParteContatos.map((contato, index) => (
                            <div className="contato" key={index + sliceIndex}>
                                <div className="contato-box">
                                    <h3>{contato.title}</h3>
                                    <p>{contato.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='botao'>
                        <button className="botao-texto">Entre em contato</button>
                    </div>

                    <div className="space-logo"></div>
                </div>
            </div>
        </>
    );
}

export default Contatos;