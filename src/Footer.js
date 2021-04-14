import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CgTwitter} from 'react-icons/cg'

export default function Footer() {
    return (
        <footer className="footer section bd-container">
            <div className="footer_container bd-grid">
                <div className="footer_content">
                    <a href="#" className="footer_logo">Premium Pizza</a>
                    <span className="footer_description">Restaurant</span>
                    <div>
                     <a href="#" className='social'>< GrFacebookOption/></a>
                     <a href="#" className='social'>< AiOutlineInstagram/></a>
                     <a href="#" className='social'>< CgTwitter/></a>
                    </div>
                    <div className="footer_content">

                            <h3 className="fotter_title">Services</h3>
                            <ul>
                                <li><a href="#" className='footer_link'>Delivery</a></li>
                                <li><a href="#" className='footer_link'>Pricing</a></li>
                                <li><a href="#" className='footer_link'>Conact Us</a></li>
                            </ul>

                    </div>
                </div>
            </div>
        </footer>
            
     
    )
}
