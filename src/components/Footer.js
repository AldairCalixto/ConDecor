// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 bg-light">
      <div className="container">
        <div className="row">
          {/* Acerca de */}
          <div className="col-md-4 mb-4">
            <h5>Acerca de</h5>
            <p>
              ConDecor es una plataforma de comercio electrónico especializada en cuadros canvas personalizados que enriquecen
              tus espacios con arte accesible y de alta calidad. Con sede en Pachuca, Hidalgo, nuestra misión es ofrecer una
              experiencia de compra única que inspire y embellezca cada hogar.
            </p>

            {/* Redes sociales */}
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="me-3 text-dark"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="me-3 text-dark"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="me-3 text-dark"><i className="bi bi-tiktok fs-4"></i></a>
            </div>

            {/* Métodos de pago */}
            <p>Envíos seguros y garantizados</p>
            <div className="d-flex">
              <i className="fab fa-apple-pay me-3 fs-3"></i>
              <i className="fab fa-google-pay me-3 fs-3"></i>
              <i className="fab fa-paypal me-3 fs-3"></i>
              <i className="fab fa-amazon me-3 fs-3"></i>
              <i className="fab fa-cc-visa me-3 fs-3"></i>
              <i className="fab fa-bitcoin me-3 fs-3"></i>
            </div>
          </div>

          {/* Secciones */}
          <div className="col-md-4 mb-4">
            <h5>Secciones</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Mi cuenta</a></li>
              <li><a href="#" className="text-dark">Mi carrito</a></li>
              <li><a href="#" className="text-dark">Lista de deseos</a></li>
            </ul>
          </div>

          {/* Información */}
          <div className="col-md-4 mb-4">
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Comunidad</a></li>
              <li><a href="#" className="text-dark">Nosotros</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
