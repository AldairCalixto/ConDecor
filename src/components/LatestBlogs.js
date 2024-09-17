// src/components/LatestBlogs.js

import React from 'react';
import imag18 from '../img/18.png'
import imag19 from '../img/19.png'
import imag20 from '../img/20.png'

const LatestBlogs = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2>Últimos Blogs</h2>
      </div>
      <div className="row">
        {/* Primer Blog */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0 hover-shadow">
            <img src={imag18} className="card-img-top" alt="Blog 1" />
            <div className="card-body">
              <p className="card-text text-muted">
                <small><i className="bi bi-calendar"></i> August 01, 2023</small>
              </p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <a href="#" className="text-primary">Leer Más</a>
            </div>
          </div>
        </div>

        {/* Segundo Blog */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0 hover-shadow">
            <img src={imag19} className="card-img-top" alt="Blog 2" />
            <div className="card-body">
              <p className="card-text text-muted">
                <small><i className="bi bi-calendar"></i> August 01, 2023</small>
              </p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <a href="#" className="text-primary">Leer Más</a>
            </div>
          </div>
        </div>

        {/* Tercer Blog */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm border-0 hover-shadow">
            <img src={imag20} className="card-img-top" alt="Blog 3" />
            <div className="card-body">
              <p className="card-text text-muted">
                <small><i className="bi bi-calendar"></i> August 01, 2023</small>
              </p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              <a href="#" className="text-primary">Leer Más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
