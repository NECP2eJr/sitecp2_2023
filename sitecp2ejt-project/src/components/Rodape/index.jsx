import Insta from '../../assets/insta.png';
import Face from '../../assets/face.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/CP2EJR-circle.png';
import './Rodape.css';

const Rodape = () => {
    return (
        <footer className="rodape">


            <img className="logo-meio" src={Logo} alt="Logo circular da CP2eJr" />

            <div className="rodape-container">


                <div className="rodape-coluna1">
                    <p>Conte com a CP2eJr para fazer sua empresa voar mais alto!</p>
                    <div className="linha1"></div>
                </div>



                <div className='logo-meio-container'><img className="logo-meio" src={Logo} alt="Logo circular da CP2eJr"/></div>

                <div className="rodape-coluna2">
                    <p>SIGA-NOS</p>
                    <div className="linha2"></div>
                    <div className="redes-sociais">
                        <a href="https://www.facebook.com/Empresa.Junior.Inatel/" target="_blank" rel="noreferrer">
                            <img src={Face} alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/company/cp2ejr---junior-company-inatel/mycompany/" target="_blank" rel="noreferrer">
                            <img src={Linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://www.instagram.com/cp2ejr/" target="_blank" rel="noreferrer">
                            <img src={Insta} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <h3>© Copyright CP2eJr. All Rights Reserved</h3>
                <h4>Designed by CP2eJr</h4>
            </div>

        </footer>
    )
}
export default Rodape;