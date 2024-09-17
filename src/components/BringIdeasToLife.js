// src/components/BringIdeasToLife.js

import React from 'react';
import imag13 from '../img/13.png'
import imag14 from '../img/14.png'

const BringIdeasToLife = () => {
  return (
    <section className="container-fluid py-5">
      <div className="container bg-life">
        <div className="row align-items-center">
          {/* Imagen de la paleta de colores */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img src={imag13} alt="Selección de colores" className="img-fluid" />
          </div>

          {/* Texto */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <h2 className="mb-3">Dale Vida a Tus Ideas</h2>
            <p>
              Personaliza tus cuadros con las imágenes y el diseño que desees. Nuestro equipo 
              de expertos te ayudará a lograr la perfección.
            </p>
          </div>

          {/* Imagen de la sala moderna */}
          <div className="col-md-4">
            <img src={imag14} alt="Sala moderna" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BringIdeasToLife;
