// src/components/vistas/Faq.js

import React from 'react';
import { Link } from 'react-router-dom'; // Utilizamos Link para la navegación

const Faq = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-fluid p-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#EBEBEB' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Preguntas Frecuentes</li>
        </ol>
      </div>

      {/* Preguntas Frecuentes (FAQ) */}
      <div className="container mt-5">
        <div className="accordion" id="faqAccordion">
          {/* Pregunta 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ¿A qué lugares envían?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Realizamos envíos a toda la República Mexicana.
              </div>
            </div>
          </div>

          {/* Pregunta 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                ¿Cuánto tarda en llegar mi pedido?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Tu pedido llega en 8 a 9 días hábiles, aunque generalmente llega antes.
              </div>
            </div>
          </div>

          {/* Pregunta 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                ¿Mi envío tiene un costo extra?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Los envíos a zonas naturales son gratuitos. En zonas extendidas, el costo es de $210 MXN. Nos pondremos en contacto contigo si aplica.
              </div>
            </div>
          </div>

          {/* Pregunta 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                ¿De qué material están hechos nuestros cuadros?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Nuestros cuadros están hechos de tela canvas, impresos con alta tecnología y tinta látex. Vienen con un bastidor de madera de 4 cm, listos para colgar.
              </div>
            </div>
          </div>

          {/* Pregunta 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                ¿Puedo hacerle cambios al diseño de mi cuadro?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Sí, puedes solicitar cambios en el diseño sin costo extra, como colores, formas o elementos adicionales.
              </div>
            </div>
          </div>

          {/* Pregunta 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                ¿Cómo hago para recibir mis regalos adicionales?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Tras realizar tu compra, nos comunicaremos contigo para que elijas tus cuadros de regalo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
