import React from "react";
import "../styles/style.css";
import pizza from "../assets/images/pizza.png";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home_container bd-container bd-grid">
        <div className="home_wrapper">
          <h1 className="home_title">North Pizza</h1>
          <h1 className="home_subtitle">Try Our Best Pizza of the Week.</h1>
          <a href="#menu" className="button">
            View Menu
          </a>
        </div>
        <img src={pizza} alt="" className="home_img" />
      </div>
    </section>
  );
}
