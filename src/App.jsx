import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Receta from './componentes/Recetas.jsx';
import Inicio from "./componentes/Inicio.jsx";
import Doble from './componentes/Doble.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My Recipe</Link> 

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Recetas">Recetas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Doble">Doble</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Recetas" element={<Receta />} />
          <Route path="/Doble" element={<Doble />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;