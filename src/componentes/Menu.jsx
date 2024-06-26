import React from "react";
import { NavLink } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "#249DFF",
};

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      {" "}
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          FacturaPOS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/jugadores"
                className="nav-link active"
                aria-current="page"
              >
                Jugadores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/equipos"
                className="nav-link active"
                aria-current="page"
              >
                Equipos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
