import React, { useState } from 'react'
import './Header.css'
import logo from '../imagenes/Sin título.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    return (
        <header>
            <button onClick={toggleMenu} className="menu">
                <div className="barry">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </button>
            {menuOpen && (
                <ul>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            )}
            <div className="logo-container">
                <img src={logo} alt="Logo de la empresa" className="logo" />
            </div>
            <button onClick={toggleCart} className="cart">
                <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
            </button>
            {cartOpen && (
                <div className="cart-container">
                    {/* Agrega los elementos del carrito de compras aquí */}
                </div>
            )}
        </header>
    )
}

export default Header