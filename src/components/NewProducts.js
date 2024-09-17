// src/components/NewProducts.js

import React from 'react';
import imag9 from '../img/9.png'
import imag10 from '../img/10.png'
import imag11 from '../img/11.png'
import imag12 from '../img/12.png'
import { Link } from 'react-router-dom';


const NewProducts = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Nuevos Productos</h2>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src={imag9} className="card-img-top" alt="Montaña Asiática" />
            <div className="card-body text-center">
              <h5 className="card-title">Montaña Asiática</h5>
              <p className="card-text">$---.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src={imag10} className="card-img-top" alt="Mapa dorado" />
            <div className="card-body text-center">
              <h5 className="card-title">Mapa dorado</h5>
              <p className="card-text">$---.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src={imag11} className="card-img-top" alt="Mapa Mundi Nuevo" />
            <div className="card-body text-center">
              <h5 className="card-title">Mapa Mundi Nuevo</h5>
              <p className="card-text">$---.00</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <img src={imag12} className="card-img-top" alt="Cielo y nubes rosas" />
            <div className="card-body text-center">
              <h5 className="card-title">Cielo y nubes rosas</h5>
              <p className="card-text">$---.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/loNuevo" className="btn btn-primary">Ver Más</Link>
      </div>
    </section>
  );
};

export default NewProducts;
