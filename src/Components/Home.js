import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page of my altschool second semester exam project. "/>
        <link rel="canonical" href="/"/>
      </Helmet>
      <header>
        <Navigation />
      </header>
      

      <div className="home-container">
        
        <div className="home1-container">
          <Link to="/about" className="home-link">
            About
          </Link>

          <Link to="/login" className="home-link">
            Login
          </Link>

          <Link to="/erro" className="home-link">
            Error
          </Link>
        </div>
      </div>
    </div>
  );
}
