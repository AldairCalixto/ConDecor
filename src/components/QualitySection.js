// src/components/QualitySection.js

import React from 'react';
import imag14 from '../img/14.png'

const QualitySection = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container bg-life">
        <div className="row align-items-center">
          {/* Imagen de la sala moderna */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={imag14} alt="Sala moderna" className="img-fluid" />
          </div>

          {/* Texto */}
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="mb-3">Calidad en Cada Detalle</h2>
            <p>
              Transforma tus espacios en una galería impresionante con nuestros materiales de primera.
              Descubre la diferencia que ofrecen los colores vivos y los bastidores de madera ecológicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
