import React from 'react'
import './style.scss'
import {FaPizzaSlice} from 'react-icons/fa'
import {GiCook} from 'react-icons/gi'
import {GrDeliver} from 'react-icons/gr'

export default function Services() {
    return (
        <section className='services section bd-container' id='services'>
            <span className='section-subtitle'>Offering</span>
            <h2 className="section-title">Our Top Notch Services</h2>
            <div className="services_container bd-grid">
                <div className="services_content">
                    <GiCook/>
                    <h3 className="services_title">Presh Pizza</h3>
                    <p className="services_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
                    </p>
                </div>

                <div className="services_content">
                    <FaPizzaSlice />
                    <h3 className="services_title">Premium Quality</h3>
                    <p className="services_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
                    </p>
                </div>

                <div className="services_content">
                    <GrDeliver />
                    <h3 className="services_title">Fast Delivery</h3>
                    <p className="services_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non qui quo laboriosam at repudiandae, quia totam mollitia fugiat quae.
                    </p>
                </div>
            </div>
        </section>
    )
}
