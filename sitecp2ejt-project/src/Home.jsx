import "./Home.css";

function Home() {

    return (

        <div className="home">
            <img className="faixa-right" src="./image/detalhe-right.png" alt="" />
            <div className="content-home">
                <img className="logo" src="./image/logo.png"></img>
                <img className="detalhe" src="./image/detalhe.png"></img>
                <p>CP2eJr - Consultoria e Projetos em Engenharia Elétrica </p>
            </div>

            <div className="roll-down">
                <p>Role o Scroll para navegar</p>
                <img src="./image/arrow.png"></img>
            </div>
        </div>

    )

}

export default Home