import { useState, useEffect } from "react";
import React from "react";
import "./Header.css";

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
                    src="./image/logo.png"
                    alt="CP2eJr Logo"
                />
                <div className="list">
                    <ul className="listItems">
                        <li>
                            <a href="#">Início</a>
                        </li>
                        <li>
                            <a href="#">Serviços</a>
                        </li>
                        <li>
                            <a href="#">Portifólio</a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <a href="#">Processo Seletivo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
