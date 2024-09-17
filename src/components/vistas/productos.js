import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosData from '../data/productosA.json';

const Producto = () => {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Buscar el producto con el ID correspondiente
        const productoEncontrado = productosData.find(p => p.id === parseInt(id));
        setProducto(productoEncontrado);
    }, [id]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <section className="my-5">
            <div className="container mt-5">
                <div className="row">
                    {/* Imagen del producto */}
                    <div className="col-md-6">
                        <img src={require(`../../${producto.image}`)} className="img-fluid rounded" alt={producto.title} />
                    </div>
                    {/* Detalles del producto */}
                    <div className="col-md-6">
                        <h1 className="h4">{producto.title}</h1>
                        <p className="h5 text-primary">{producto.price} MXN</p>
                        <hr />
                        <ul className="list-unstyled">
                            <li>Cuadro en tela con bastidor de madera</li>
                            <li>Impreso con tinta látex</li>
                        </ul>
                        <hr />
                        <div className="d-flex mb-3">
                            <div className="my-2 p-2"><i className="fa fa-eye"></i></div>
                            <button className="btn btn-primary me-2"><i className="fa fa-cart-plus"></i> Agregar al carrito</button>
                            <a className="btn btn-dark" href="#">Comprar Ahora</a>
                        </div>
                        <ul className="list-unstyled mb-4">
                            <li><strong>Gastos de envío:</strong> Tu envío es gratis a toda la República Mexicana.</li>
                            <li><strong>Garantía:</strong> 100% satisfacción garantizada o te devolvemos tu dinero.</li>
                        </ul>
                        <hr />
                        <div className="d-flex mb-3">
                            <button className="btn btn-outline-danger d-flex align-items-center">
                                <i className="bi bi-heart me-2"></i> Agregar a favoritos
                            </button>
                        </div>
                        <hr />
                        <p><i className="fa fa-truck"></i><strong> Tiempo de envío:</strong> 8-9 días hábiles</p>
                        <p className="mb-1"><strong>Forma de pago:</strong></p>
                        <div>
                            <i className="fab fa-paypal me-3 fs-3"></i>
                            {/* Puedes agregar más iconos de métodos de pago aquí si es necesario */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Producto;