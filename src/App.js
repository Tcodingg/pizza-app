import React from "react";
import Main from "./Main";
import "./index.scss";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Menu from "./Menu";
import Contact from "./Contact";

import Footer from "./Footer";

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
