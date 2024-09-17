// src/components/vistas/Contacto.js

import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-fluid p-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#EBEBEB' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Contacto</li>
        </ol>
      </div>

      {/* Información de contacto */}
      <div className="container mt-5">
        <div className="row text-center">
          {/* Correo Electrónico */}
          <div className="col-md-4">
            <div className="p-3 border rounded bg-light">
              <h5><strong>Correo Electrónico</strong></h5>
              <p>deercotton@ejemplo.com</p>
            </div>
          </div>
          {/* Número de Teléfono */}
          <div className="col-md-4">
            <div className="p-3 border rounded bg-light">
              <h5><strong>Número de Teléfono</strong></h5>
              <p>xxx-xxx-xx-xx</p>
            </div>
          </div>
          {/* Dirección */}
          <div className="col-md-4">
            <div className="p-3 border rounded bg-light">
              <h5><strong>Dirección</strong></h5>
              <p>Pachuca, Hidalgo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 bg-light rounded">
              <h5 className="mb-4 text-center">Enviar Mensaje</h5>
              <form>
                {/* Nombre y Correo */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-person"></i></span>
                      <input type="text" className="form-control" placeholder="Tu nombre" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                      <input type="email" className="form-control" placeholder="Correo electrónico" required />
                    </div>
                  </div>
                </div>
                {/* Teléfono y Asunto */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-telephone"></i></span>
                      <input type="tel" className="form-control" placeholder="Número de teléfono" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-text"><i className="bi bi-book"></i></span>
                      <input type="text" className="form-control" placeholder="Asunto" required />
                    </div>
                  </div>
                </div>
                {/* Mensaje */}
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-pencil"></i></span>
                    <textarea className="form-control" placeholder="Mensaje" rows="4" required></textarea>
                  </div>
                </div>
                {/* Botón de Envío */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
