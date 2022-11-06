import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <section className="nav-container">
      
    
      <NavLink to="/" className="navlink" style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }>
        Home
      </NavLink>

      <NavLink to="/About" className="navlink" style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }>
        About
      </NavLink>

      <NavLink to="/Login" className="navlink" style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }>
        Login
      </NavLink>

      <NavLink to="/Erro" className="navlink" style={({ isActive }) =>
            isActive ? { color: "pink" } : { color: "black" }
          }>
        Error
      </NavLink>

    
    </section>
  );
}
