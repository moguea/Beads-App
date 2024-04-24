import React from 'react';
import './Header.css'; 
import logo from '../imagenes/Sin título.png';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header>
            <input type="checkbox" id="mmeennuu" />
            <label htmlFor="mmeennuu" className="menu">
                <div className="barry">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </label>
            <div className="logo-container">
                <img src={logo} alt="Logo de la empresa" className="logo" />
            </div>
        
        </header>
    );
}

export default Header;