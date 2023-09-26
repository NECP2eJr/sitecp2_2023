import { useState, useEffect } from "react";
import {NavLink} from 'react-router-dom';
import "./Header.css";
import logo from '../../assets/logo.png'

function Header() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header ${scroll ? "scrolled" : ""}`}>
            <div className={active ? "icon iconActive" : "icon"} onClick={toggleMenu}>
                <div className="hamburguer hamburguerIcon"></div>
            </div>
            <div className={`menu ${active ? "menuOpen" : "menuClose"}`}>
                <img
                    className={`logoside ${active ? "logoOpen" : "logoClose"}`}
                    src={logo}
                    alt="CP2eJr Logo"
                />
                <div className="list">
                    <ul className="listItems">
                        <li>
                            <a href="#home">Início</a>
                        </li>
                        <li>
                            <a href="#service">Serviços</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portifólio</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                        <li>
                            <NavLink to="/processoSeletivo#PS-inicio">Processo Seletivo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
