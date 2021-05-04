import React from "react";
import "./style.css";
import { FaPizzaSlice } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";

export default function Services() {
  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">Offering</span>
      <h2 className="section-title">Our Services</h2>
      <div className="services_container bd-grid">
        <div className="services_content">
          <GiCook className="services_img" />
          <h3 className="services_title">Presh Pizza</h3>
          <p className="services_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
            qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
          </p>
        </div>

        <div className="services_content">
          <FaPizzaSlice className="services_img" />
          <h3 className="services_title">Premium Quality</h3>
          <p className="services_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
            qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
          </p>
        </div>

        <div className="services_content">
          <GiFoodTruck className="services_img" />
          <h3 className="services_title">Fast Delivery</h3>
          <p className="services_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
            qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
          </p>
        </div>
      </div>
    </section>
  );
}
