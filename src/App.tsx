import React from 'react';
import './Brand.scss';
import logo from './assets/logo.png';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Layout from './Layout';

const App: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="TechSimple-TO Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/quote">Quote</Link>
        </nav>
      </header>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Layout>
    </div>
  );
};
export default App;