// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CustomCards from './components/CustomCards';
import BestSelling from './components/BestSelling';
import History from './components/History';
import SpecialOffers from './components/SpecialOffers';
import NewProducts from './components/NewProducts';
import BringIdeasToLife from './components/BringIdeasToLife';
import QualitySection from './components/QualitySection';
import Testimonials from './components/Testimonials';
import LatestBlogs from './components/LatestBlogs';
import LastSection from './components/LastSection';
import InstagramCarousel from './components/InstagramCarousel';
import Footer from './components/Footer';

// Importa las vistas para el enrutamiento
import Abstractos from './components/vistas/Abstractos';
import BlancoYNegro from './components/vistas/BlancoYNegro';
import Clasic from './components/vistas/Clasic';
import Mandala from './components/vistas/Mandala';
import Animation from './components/vistas/Animation';
import Paises from './components/vistas/Paises';
import Estilo from './components/vistas/Estilo';
import Universe from './components/vistas/Universe';
import Animales from './components/vistas/Animales';
import Naturaleza from './components/vistas/Naturaleza';
import Paisajes from './components/vistas/Paisajes';
import Deportes from './components/vistas/Deportes';
import Influencia from './components/vistas/Influencia';
import Empoderamiento from './components/vistas/Empoderamiento';
import Paquetes from './components/vistas/Paquetes';
import Paquete1 from './components/vistas/Paquete1';
import Paquete2 from './components/vistas/Paquete2';
import Paquete3 from './components/vistas/Paquete3';
import Paquete4 from './components/vistas/Paquete4';
import Paquete5 from './components/vistas/Paquete5';
import EdicionLimitada from './components/vistas/EdicionLimitada';
import Personalizados from './components/vistas/Personalizados';
import Liquidacion from './components/vistas/Liquidacion';
import MasVendido from './components/vistas/MasVendido';
import LoNuevo from './components/vistas/LoNuevo';
import Blog from './components/vistas/Blog';
import About from './components/vistas/About';
import Contact from './components/vistas/Contact';
import FAQ from './components/vistas/Faq';

// Importa el nuevo componente de Producto
import Producto from './components/vistas/productos';
import Catalogo from './components/vistas/Catalogo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal con los componentes ya existentes */}
        <Route path="/" element={
          <>
            <Hero />
            <CustomCards />
            <BestSelling />
            <History />
            <SpecialOffers />
            <NewProducts />
            <BringIdeasToLife />
            <QualitySection />
            <Testimonials />
            <LatestBlogs />
            <LastSection />
            <InstagramCarousel />
          </>
        } />

        {/* Nueva ruta para productos individuales */}
        <Route path="/productos/:id" element={<Producto />} />

        {/* Rutas del Catálogo */}
        <Route path="/catalogoAbstract" element={<Abstractos />} />
        <Route path="/black&withe" element={<BlancoYNegro />} />
        <Route path="/clasic" element={<Clasic />} />
        <Route path="/mandela" element={<Mandala />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/paises" element={<Paises />} />
        <Route path="/estilo" element={<Estilo />} />
        <Route path="/universe" element={<Universe />} />

        {/* Rutas de Estilo de Vida */}
        <Route path="/animales" element={<Animales />} />
        <Route path="/naturaleza" element={<Naturaleza />} />
        <Route path="/paisajes" element={<Paisajes />} />

        {/* Rutas de Naturaleza y Animales */}
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/influencia" element={<Influencia />} />
        <Route path="/empoderamiento" element={<Empoderamiento />} />

        {/* Rutas de Paquetes */}
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/paquete1" element={<Paquete1 />} />
        <Route path="/paquete2" element={<Paquete2 />} />
        <Route path="/paquete3" element={<Paquete3 />} />
        <Route path="/paquete4" element={<Paquete4 />} />
        <Route path="/paquete5" element={<Paquete5 />} />

        {/* Rutas de Para Ti */}
        <Route path="/edicionLimitada" element={<EdicionLimitada />} />
        <Route path="/personalizados" element={<Personalizados />} />
        <Route path="/liquidacion" element={<Liquidacion />} />
        <Route path="/masVendido" element={<MasVendido />} />
        <Route path="/loNuevo" element={<LoNuevo />} />

        {/* Otras páginas */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Catalogo" element={<Catalogo />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;