// src/components/CustomCards.js

import React from 'react';
import imagen2 from '../img/2.png'
import { Link } from 'react-router-dom';

const CustomCards = () => {
  return (
    <section className="container py-5">
      <div className="row gx-4 gy-4">
        <div className="col-md-6 d-flex align-items-center justify-content-between">
          <div>
            <h2 className="text-center">Personalizados</h2>
            <Link to="/personalizados" className="btn btn-outline-dark">Comprar Ahora</Link>
          </div>
          <div className="mx-3">
            <img src={imagen2} alt="Personalizados" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-between">
          <div>
            <h2 className="text-center">Paquetes</h2>
            <Link to="/paquetes" className="btn btn-outline-dark">Comprar Ahora</Link>
          </div>
          <div className="mx-3">
            <img src={imagen2} alt="Paquetes" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCards;
