import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <section className="nav-container">
      
    
      <NavLink to="/" className="navlink" style={({ isActive }) =>
            isActive ? { color: "#f2f5f7" } : { color: "black" }
          }>
        Home
      </NavLink>

      <NavLink to="/About" className="navlink" style={({ isActive }) =>
            isActive ? { color: "#f2f5f7" } : { color: "black" }
          }>
        About
      </NavLink>

      <NavLink to="/Login" className="navlink" style={({ isActive }) =>
            isActive ? { color: "#f2f5f7" } : { color: "black" }
          }>
        Login
      </NavLink>

      <NavLink to="/Erro" className="navlink" style={({ isActive }) =>
            isActive ? { color: "#f2f5f7" } : { color: "black" }
          }>
        Error
      </NavLink>

    
    </section>
  );
}
