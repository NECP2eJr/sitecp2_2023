import "./Home.css";
import logo from '../../assets/logo.png'
import detalhe from '../../assets/detalhe.png'
import faixaRight from '../../assets/detalhe-right.png'
import arrow from '../../assets/arrow.png'


function Home() {

    return (

        <div className="home">
            <img className="faixa-right" src={faixaRight} alt="Detalhe right" />
            <div className="content-home">
                <img className="logo" src={logo}></img>
                <img className="detalhe" src={detalhe}></img>
                <p>CP2eJr - Consultoria e Projetos em Engenharia Elétrica </p>
            </div>

            <div className="roll-down">
                <p>Role o Scroll para navegar</p>
                <img src={arrow}></img>
            </div>
        </div>

    )

}

export default Home