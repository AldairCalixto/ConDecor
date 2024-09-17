// src/components/InstagramCarousel.js

import React from 'react';


const InstagramCarousel = () => {
  return (
    <section className="container py-5">
      <div id="instagramCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Primer grupo de imágenes */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-3">
                <img src="img/22.png" className="d-block w-100" alt="Persona 1" />
              </div>
              <div className="col-3">
                <img src="img/22.png" className="d-block w-100" alt="Persona 2" />
              </div>
              <div className="col-3">
                <img src="img/23.png" className="d-block w-100" alt="Persona 3" />
              </div>
              <div className="col-3">
                <img src="img/24.png" className="d-block w-100" alt="Persona 4" />
              </div>
            </div>
          </div>
          
          {/* Segundo grupo de imágenes */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-3">
                <img src="img/22.png" className="d-block w-100" alt="Persona 2" />
              </div>
              <div className="col-3">
                <img src="img/23.png" className="d-block w-100" alt="Persona 3" />
              </div>
              <div className="col-3">
                <img src="img/24.png" className="d-block w-100" alt="Persona 4" />
              </div>
              <div className="col-3">
                <img src="img/25.png" className="d-block w-100" alt="Persona 5" />
              </div>
            </div>
          </div>
        </div>

        {/* Controles del Carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#instagramCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#instagramCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default InstagramCarousel;
