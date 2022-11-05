import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation";

export default function About() {
  return (

    <section className="about-page">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About my altschool second semester exam project. React JS"/>
        <link rel="canonical" href="/About"/>
      </Helmet>
      <div >
      <div>
        <Navigation />
      </div>
      <div className="about-container">
        <h1 className="abouut-h1">AltSchool 2nd Semester Exam Project</h1>

        <p className="about-paragraph">
          Setup react-router, implement Nested routes, 404 page, and Error
          boundary. Set up fake userAuthContext using the context API to always
          carry out a fake authentication, bonus - extract out a custom hook to
          get the currently logged-in user. Implement SEO and Navigation menu
          that will show on each page.
        </p>
      </div>
    </div>
    </section>
    
  );
}
