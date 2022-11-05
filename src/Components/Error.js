import React from "react";
import Navigation from "./Navigation.js";
import { Helmet } from "react-helmet-async";

export default function Error() {
  return (
    <section>
      <Helmet>
        <title>Error Page</title>
        <meta
          name="description"
          content="Error page showing how the 404 page error works"
        />
        <link rel="canonical" href="/Erro" />
      </Helmet>

      <div>
        <header>
          <Navigation />
        </header>
        <h1>Hi</h1>
      </div>
    </section>
  );
}
