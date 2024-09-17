// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación interna
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="bg-white py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="ConDecor Logo" className="img-fluid" style={{ height: '40px' }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark fw-bold">Inicio</Link>
              </li>

              {/* Dropdown Catálogo */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-bold"
                  href="#"
                  id="catalogoDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catálogo
                </a>
                <ul className="dropdown-menu" aria-labelledby="catalogoDropdown">
                  <h6 className="dropdown-header">Arte y Estilos</h6>
                  <Link className="dropdown-item" to="/catalogoAbstract">Abstractos</Link>
                  <Link className="dropdown-item" to="/black&withe">Blanco y Negro</Link>
                  <Link className="dropdown-item" to="/clasic">Clásicos</Link>
                  <Link className="dropdown-item" to="/mandela">Mandalas</Link>
                  <hr />
                  <h6 className="dropdown-header">Temas y Cultura</h6>
                  <Link className="dropdown-item" to="/animation">Animación</Link>
                  <Link className="dropdown-item" to="/paises">Países</Link>
                  <Link className="dropdown-item text-danger" to="/estilo">Estilo</Link>
                  <Link className="dropdown-item" to="/universe">Universo</Link>
                  <hr />
                  <h6 className="dropdown-header">Estilo de Vida</h6>
                  <Link className="dropdown-item" to="/animales">Animales</Link>
                  <Link className="dropdown-item" to="/naturaleza">Naturaleza</Link>
                  <Link className="dropdown-item" to="/paisajes">Paisajes</Link>
                  <hr />
                  <h6 className="dropdown-header">Naturaleza y Animales</h6>
                  <Link className="dropdown-item" to="/deportes">Deportes</Link>
                  <Link className="dropdown-item" to="/influencia">Influencia</Link>
                  <Link className="dropdown-item" to="/empoderamiento">Empoderamiento</Link>
                </ul>
              </li>

              {/* Dropdown Paquetes */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-bold"
                  href="#"
                  id="paquetesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Paquetes
                </a>
                <ul className="dropdown-menu" aria-labelledby="paquetesDropdown">
                  <Link className="dropdown-item" to="/paquetes">Paquetes</Link>
                  <Link className="dropdown-item" to="/paquete1">Paquete 1</Link>
                  <Link className="dropdown-item" to="/paquete2">Paquete 2</Link>
                  <Link className="dropdown-item" to="/paquete3">Paquete 3</Link>
                  <Link className="dropdown-item" to="/paquete4">Paquete 4</Link>
                  <Link className="dropdown-item" to="/paquete5">Paquete 5</Link>
                </ul>
              </li>

              {/* Dropdown Para Ti */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-bold"
                  href="#"
                  id="paraTiDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Para ti
                </a>
                <ul className="dropdown-menu" aria-labelledby="paraTiDropdown">
                  <Link className="dropdown-item" to="/edicionLimitada">Edición limitada</Link>
                  <Link className="dropdown-item" to="/personalizados">Cuadros Personalizados</Link>
                  <Link className="dropdown-item" to="/liquidacion">Liquidación</Link>
                  <Link className="dropdown-item" to="/masVendido">Lo Más Vendido</Link>
                  <Link className="dropdown-item" to="/loNuevo">Lo Nuevo</Link>
                </ul>
              </li>

              {/* Enlace Blog */}
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-dark fw-bold">Blog</Link>
              </li>

              {/* Dropdown Nosotros */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark fw-bold"
                  href="#"
                  id="nosotrosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nosotros
                </a>
                <ul className="dropdown-menu" aria-labelledby="nosotrosDropdown">
                  <Link className="dropdown-item" to="/about">Acerca de</Link>
                  <Link className="dropdown-item" to="/contact">Contacto</Link>
                  <Link className="dropdown-item" to="/faq">Faq</Link>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
