// src/components/SpecialOffers.js

import React from 'react';
import imag8 from '../img/8.png'

const SpecialOffers = () => {
  return (
    <section className="container-fluid py-5 bg-history">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4">Ofertas Especiales</h2>
            <p className="lead">¡Aprovecha los descuentos exclusivos en tus cuadros favoritos!</p>
            <div className="d-flex justify-content-start mt-4">
              <div className="time bg-white me-4 text-center p-2">
                <h3 className="mb-0">10</h3>
                <small>Days</small>
              </div>
              <div className="time bg-white me-4 text-center p-2">
                <h3 className="mb-0">10</h3>
                <small>Hrs</small>
              </div>
              <div className="time bg-white me-4 text-center p-2">
                <h3 className="mb-0">12</h3>
                <small>Mins</small>
              </div>
              <div className="time bg-white text-center p-2">
                <h3 className="mb-0">48</h3>
                <small>Secs</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={imag8} alt="Mujer sonriente" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
