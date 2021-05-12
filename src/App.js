import React from "react";
import Main from "./components/Main";
import "./styles/index.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Main />
      <Home />
      <About />
      <Services />
      <Menu />
      <Contact />

      <Footer />
    </div>
  );
}
