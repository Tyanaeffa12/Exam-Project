import React from "react";
import sad from ".//image/sad.PNG";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="notfound-container">
      <Helmet>
        <title>PageNotFound</title>
        <meta
          name="description"
          content="The 404 error page of my altschool second semester exam project. "
        />
        <link rel="canonical" href="*" />
      </Helmet>
      
      <div className="content-container">
        <img src={sad} alt="sad" />

        <h1>404 Error</h1>
        <p>Page Not Found</p>
        <p>
          The page you are looking for doesn't exist or an error occured. 
          <p><Link to="/">Go back to home page</Link></p>
        </p>
      </div>
    </section>
  );
}
