import React from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import Error from "./Components/Error";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";


function App() {
  return (
    <section>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Error" element={<Error />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </section>
  );
}

export default App;
