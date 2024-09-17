// src/components/BestSelling.js

import React from 'react';
import azul from '../img-product/azul-oro.webp'
import concha from '../img/concha.png'
import morado from '../img/morado.png'
import { Link } from 'react-router-dom';

const BestSelling = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Lo más vendido</h2>
      <div className="row gx-4 gy-4">
        <div className="col-md-4">
          <div className="card product-card">
            <div className="bg-cards">
              <img src={azul} className="card-img-top mt-3 rounded-top-4" alt="Paquete 1" />
            </div>
            <div className="card-body text-center">
              <p className="card-text">Abstracto Azul claro y oro</p>
              <p className="fw-bold">$1,100.00 MXN</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card product-card">
            <div className="bg-cards">
              <img src={concha} className="card-img-top mt-3 rounded-top-4" alt="Abstracto gris concha" />
            </div>
            <div className="card-body text-center">
              <p className="card-text">Abstracto gris concha</p>
              <p className="fw-bold">$1,100.00 MXN</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card product-card">
            <div className="bg-cards">
              <img src={morado} className="card-img-top mt-3 rounded-top-4" alt="Abstracto Morado" />
            </div>
            <div className="card-body text-center">
              <p className="card-text">Abstracto Morado</p>
              <p className="fw-bold">$1,100.00 MXN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/masVendido" className="btn btn-primary btn-sm">Comprar Ahora</Link>
      </div>
    </section>
  );
};

export default BestSelling;
