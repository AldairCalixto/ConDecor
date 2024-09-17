import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productosData from '../data/productosA.json';
import img21 from '../../img/animal.png';

const Catalogo = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productosPerPage] = useState(24); // Número de productos por página

    useEffect(() => {
        // Obtener todas las categorías únicas de los productos
        const categoriasUnicas = [...new Set(productosData.map(producto => producto.category))];
        setCategorias(categoriasUnicas);

        // Mostrar todos los productos al cargar la página
        setProductos(productosData);
    }, []);

    useEffect(() => {
        // Filtra los productos según las categorías seleccionadas
        if (selectedCategories.length === 0) {
            setProductos(productosData); // Mostrar todos si no hay categorías seleccionadas
        } else {
            const productosFiltrados = productosData.filter(producto => selectedCategories.includes(producto.category));
            setProductos(productosFiltrados);
        }
        setCurrentPage(1); // Reiniciar a la primera página al cambiar las categorías
    }, [selectedCategories]);

    // Manejar la selección de categorías
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category)); // Quitar categoría
        } else {
            setSelectedCategories([...selectedCategories, category]); // Agregar categoría
        }
    };

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
                                <h5 className="card-title">Catálogo</h5>
                                <p className="card-text">Explora nuestras colecciones de productos en diversas categorías.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={img21}
                                className="img-fluid rounded-start mt-3 mb-3"
                                alt="Animal Art"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Productos */}
            <section className="container my-4">
                <div className="row">
                    {/* Filtros de Categorías */}
                    <div className="col-md-2">
                        <h6>Filtrar por Categoría</h6>
                        {categorias.map((categoria, index) => (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`category-${categoria}`}
                                    value={categoria}
                                    onChange={() => handleCategoryChange(categoria)}
                                    checked={selectedCategories.includes(categoria)}
                                />
                                <label className="form-check-label" htmlFor={`category-${categoria}`}>
                                    {categoria}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Productos */}
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

export default Catalogo;
