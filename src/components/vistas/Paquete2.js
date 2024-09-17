import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productosData from '../data/productosA.json';
import img21 from '../../img/deportes.png';

const productData = {
    id: 135,
    title: "productsImg/perzonalizado.webp",
    price: "1,100.00 MXN",
    image: "productsImg/perzonalizado.webp",
    category: "Paquetes"
};

const Paquete2 = ({product = productData}) => {
    return (
        <section className="my-5">
            <div className="container mt-5">
                <div className="row">
                    {/* Imagen del producto */}
                    <div className="col-md-6">
                        <img src={require(`../../${product.image}`)} className="img-fluid rounded" alt={product.title} />
                    </div>
                    {/* Detalles del producto */}
                    <div className="col-md-6">
                        <h1 className="h4">{product.title}</h1>
                        <p className="h5 text-primary">${product.price}</p>
                        <p>Cuadro en tela con bastidor de madera listo para colgar.</p>
                        <p>Impreso con tinta látex de la más alta tecnología.</p>
                        <hr />
                        <div className="d-flex mb-3">
                            <div className="my-2 p-2">
                                <i className="fa fa-eye"></i>
                            </div>
                            <button className="btn btn-primary me-2">
                                <i className="fa fa-cart-plus"></i> Agregar al carrito
                            </button>
                            <a className="btn btn-dark p-3">Comprar Ahora</a>
                        </div>
                        <hr />
                        <ul>
                            <li><strong>Gastos de envío:</strong> Envío gratis a toda la República Mexicana.</li>
                            <li><strong>Garantía:</strong> 100% satisfacción garantizada o te devolvemos tu dinero.</li>
                        </ul>
                        <hr />
                        <p className="mt-3">
                            Cuidamos cada detalle, queremos que decores tu casa con productos premium de primera calidad. Tu felicidad es nuestro principal objetivo.
                        </p>
                        <hr />
                        <p><i className="fa fa-truck"></i><strong> Tiempo de envío:</strong> 8-9 días hábiles</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Paquete2;