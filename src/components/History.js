// src/components/History.js

import React from 'react';
import imag7 from '../img/7.png'

const History = () => {
  return (
    <section className="container-fluid">
      <div className="px-5 py-5 row align-items-center bg-history">
        <div className="col-lg-6">
          <h2>Arte que Cuenta Historias</h2>
          <p>
            En ConDecor, cada cuadro es una pieza única diseñada para transformar tus espacios en narraciones visuales.
            Descubre nuestra colección de cuadros exclusivos y originales, perfectos para dar vida a cualquier rincón de tu hogar.
            Porque tus paredes también tienen historias que contar.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img src={imag7} alt="Arte que Cuenta Historias" className="img-history img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default History;
