import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productosData from '../data/productosA.json';
import img21 from '../../img/dexter.png';

const Animation = ({ categoria = 'Animación' }) => { // Paso de categoría por props o por defecto 'blanco y negro'
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productosPerPage] = useState(9); // Número de productos por página

    useEffect(() => {
        // Filtra los productos que pertenezcan a la categoría recibida
        const productosFiltrados = productosData.filter(producto => producto.category === categoria);
        setProductos(productosFiltrados);
    }, [categoria]);

    // Calcular los productos a mostrar en la página actual
    const indexOfLastProducto = currentPage * productosPerPage;
    const indexOfFirstProducto = indexOfLastProducto - productosPerPage;
    const currentProductos = productos.slice(indexOfFirstProducto, indexOfLastProducto);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generar el número de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productos.length / productosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {/* Sección Blanco y Negro */}
            <section className="container my-4">
                <div className="card mb-3 abstract-section mt-5" style={{ maxWidth: '100%' }}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Animación</h5>
                                <p className="card-text">
                                    Catálogo {'>'}
                                    <p className="text-primary">
                                    Animación
                                    </p>
                                </p>
                                <p className="card-text">
                                    Desde el vibrante mundo del anime hasta cuadros diseñados para niños,
                                    esta sección es perfecta para los amantes de la cultura pop y la fantasía.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={img21}
                                className="img-fluid rounded-start mt-3 mb-3"
                                alt={`${categoria.charAt(0).toUpperCase() + categoria.slice(1)} Art`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Productos */}
            <section className="container my-4">
                <div className="row">
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className="col-md-10">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <i className="bi bi-grid" id="grid-view"></i>
                                <i className="bi bi-list" id="list-view"></i>
                            </div>
                            <div id="result-count">
                                <span>Mostrando {currentProductos.length} resultados de {productos.length}</span>
                            </div>
                        </div>

                        {/* Galería de Productos */}
                        <div className="row g-3" id="product-container">
                            {currentProductos.map((producto) => (
                                <div className="col-md-4 col-sm-6 product-item" key={producto.id}>
                                    <div className="card h-100">
                                        <img
                                            src={require(`../../${producto.image}`)}
                                            className="card-img-top"
                                            alt={producto.title}
                                        />
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{producto.title}</h6>
                                            <p className="card-text text-primary">{producto.price}</p>
                                            {/* Nuevo botón para ver detalles del producto */}
                                            <Link to={`/productos/${producto.id}`} className="btn btn-primary">
                                                Ver detalles
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Paginación */}
                        <nav aria-label="Page navigation" id="pagination" className="d-flex justify-content-center mt-4">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} id="prev-page">
                                    <a className="page-link" href="#!" aria-label="Previous" onClick={() => paginate(currentPage - 1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {pageNumbers.map((number) => (
                                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                        <a href="#!" className="page-link" onClick={() => paginate(number)}>
                                            {number}
                                        </a>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`} id="next-page">
                                    <a className="page-link" href="#!" aria-label="Next" onClick={() => paginate(currentPage + 1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Animation;
