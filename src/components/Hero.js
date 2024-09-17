// src/components/Hero.js

import React from 'react';
import imagen from '../img/1.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4">Transforma tu Espacio con ConDecor</h1>
            <p className="lead">Expresión a través de Arte Decorativo Personalizado y Accesible</p>
            <Link to="/Catalogo" className="btn btn-primary btn-lg">Ver Catalogo</Link>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img src={imagen} alt="Decorative Art" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
