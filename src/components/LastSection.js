// src/components/LastSection.js

import React from 'react';

const LastSection = () => {
  return (
    <section className="container py-5 text-center">
      {/* Iconos */}
      <div className="row mb-5">
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <i className="bi bi-truck fs-2 me-2"></i>
          <p className="mb-0">Personalización de cuadros</p>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <i className="bi bi-cash-coin fs-2 me-2"></i>
          <p className="mb-0">Atención al cliente eficaz</p>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <i className="bi bi-gem fs-2 me-2"></i>
          <p className="mb-0">Calidad de material y diseño</p>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-start">
          <i className="bi bi-tag fs-2 me-2"></i>
          <p className="mb-0">Precios Accesibles</p>
        </div>
      </div>

      {/* Texto Instagram */}
      <div className="mb-5">
        <h5>¡Síguenos en Instagram!</h5>
        <a href="https://www.instagram.com/condecoor/" target="_blank" className="text-primary">
          <i className="bi bi-instagram fs-4"></i> @condecoor
        </a>
      </div>
    </section>
  );
};

export default LastSection;
