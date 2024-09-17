// src/components/Testimonials.js

import React from 'react';
import imag15 from '../img/15.png'
import imag16 from '../img/16.png'
import imag17 from '../img/17.png'


const Testimonials = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2>Testimonios</h2>
      </div>
      <div className="row justify-content-center">
        {/* Primer Testimonio */}
        <div className="col-md-6 col-lg-4 text-center mb-4 mb-lg-0">
          <img src={imag15} alt="Cliente 1" className="rounded-circle mb-3" style={{ width: '150px' }} />
          <p className="text-start">
            Transforma tus espacios en una galería impresionante con nuestros materiales de primera.
            Descubre la diferencia que ofrecen los colores vivos y los bastidores de madera ecológicos.
          </p>
        </div>
        {/* Segundo Testimonio */}
        <div className="col-md-6 col-lg-4 text-center mb-4 mb-lg-0">
          <img src={imag16} alt="Cliente 2" className="rounded-circle mb-3" style={{ width: '150px' }} />
          <p className="text-start">
            El proceso de diseño personalizado fue muy sencillo y el equipo de ConDecor me ayudó con todas
            mis dudas. El cuadro llegó en perfectas condiciones y realmente destaca en mi sala.
            Muy satisfecho con mi compra.
          </p>
        </div>
        {/* Tercer Testimonio */}
        <div className="col-md-6 col-lg-4 text-center">
          <img src={imag17} alt="Cliente 3" className="rounded-circle mb-3" style={{ width: '150px' }} />
          <p className="text-start">
            Me sorprendió gratamente la rapidez con la que llegó mi pedido. Además, los materiales son de
            calidad y se nota que están bien hechos. Un servicio excelente que no dudaría en usar nuevamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
