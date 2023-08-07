import WebBig from '../../assets/Web.png';
import WebSmall from '../../assets/webSmall.png';
import './Sobre.css';

const Sobre = () => {

    return (
        <div className='sobre-all'>
            <div className='img-text'>
                <img className="webB" src={WebBig}></img>
                <img className="webS" src={WebSmall}></img>
            </div>
            <div className='sobre-text'>
                <h1>SOBRE A CP2EJR</h1>
                <p>
                    A CP2eJr - <b className='negrito'>Consultoria e Projetos em Engenharia Elétrica</b> - é uma empresa sem fins lucrativos nascida da vontade de empreender de alguns dos milhares de alunos do Instituto Nacional de Telecomunicações.  Fundada em 1998, tem o intuito de contribuir para a formação de seus membros, através da oferta de capacitações em soluções tecnológicas.  Além disso, a CP2 visa atender às necessidades e objetivos dos clientes, prezando sempre pela qualidade e preço justo. <b className='negrito'>Conte com a CP2eJr para fazer sua empresa voar mais alto!</b>
                </p>
            </div>
        </div>
    );

};

export default Sobre;