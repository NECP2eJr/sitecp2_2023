import { useState } from "react";
import {NavLink} from 'react-router-dom';
import "./HeaderPS.css";
import logo from '../../assets/logo.png'

function HeaderPS() {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <div className={"header scrolled"}>
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
                            <NavLink to='/#home'>Início</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderPS;
