import "./Home.css";

function Home() {

    return (

        <div className="home">
            <img className="faixa-right" src="../../assets/detalhe-right.png" alt="Detalhe right" />
            <div className="content-home">
                <img className="logo" src="../../assets/logo.png"></img>
                <img className="detalhe" src="../../assets/detalhe.png"></img>
                <p>CP2eJr - Consultoria e Projetos em Engenharia Elétrica </p>
            </div>

            <div className="roll-down">
                <p>Role o Scroll para navegar</p>
                <img src="../../assets/arrow.png"></img>
            </div>
        </div>

    )

}

export default Home