import React from "react";
import "./style.scss";
import about_us from "./images/about_us.png";

export default function About() {
  return (
    <section className="about section bd-container" id="about">
      <div className="about_container bd-grid">
        <div className="about_wrapper">
          <span className="section-subtitle about_initial">About us</span>
          <h2 className="section-title about_initial">
            We Make the Best Pizza <br /> in the City
          </h2>
          <p className="about_description">
            We make the best pizza in the city. Our top notch customer service
            are always ready do assist you. Best Piazza for unbeated price, come
            visit us.
          </p>
          <a href="#" className="button">
            Explore History
          </a>
        </div>
        <img src={about_us} className="about_img" alt="" />
      </div>
    </section>
  );
}
