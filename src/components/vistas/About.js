// src/components/vistas/AcercaDe.js

import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../img/about.png'; // Asegúrate de que la ruta sea correcta

const AcercaDe = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-fluid p-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#EBEBEB' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Acerca de</li>
        </ol>
      </div>

      {/* Sección Acerca de */}
      <div className="container d-flex align-items-center justify-content-center mt-5" style={{ minHeight: '23vh' }}>
        <div className="row w-100">
          {/* Texto de Acerca de */}
          <div className="col-md-8 mx-auto">
            <h2 className="h4">Acerca de</h2>
            <p>
              En ConDecor, nos dedicamos a transformar espacios a través de cuadros canvas personalizados que reflejan la esencia y estilo de cada hogar.
              Ubicados en Pachuca, Hidalgo, nos hemos consolidado como una plataforma de comercio electrónico líder en arte decorativo accesible y de alta calidad.
            </p>
          </div>
          {/* Imagen de Acerca de */}
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src={aboutImage} alt="Logotipo de ConDecor" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
