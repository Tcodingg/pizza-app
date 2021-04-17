import React from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CgTwitter} from 'react-icons/cg'
import{MdLocationOn} from 'react-icons/md'
import{AiFillPhone} from 'react-icons/ai'
import{AiFillMail} from 'react-icons/ai'

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
                    </div>
                    <div className="footer_content">
                            <h3 className="footer_title">Services</h3>
                            <ul>
                                <li><a href="#" className='footer_link'>Delivery</a></li>
                                <li><a href="#" className='footer_link'>Pricing</a></li>
                                <li><a href="#" className='footer_link'>Customer Service</a></li>
                            </ul>
                    </div>
                    <div className="footer_content">
                            <h3 className="footer_title">Information</h3>
                            <ul>
                                <li><a href="#" className='footer_link'>Event</a></li>
                                <li><a href="#" className='footer_link'>Policy</a></li>
                                <li><a href="#" className='footer_link'>Privacy</a></li>
                            </ul>
                    </div>
                    <div className="footer_content">
                            <h3 className="footer_title">Contact Us</h3>
                            <ul>
                                <li><MdLocationOn className='contact_info' /> 123 Main st. Toront, ON</li>
                                <li><AiFillMail className='contact_info'/> info@email.com</li>
                                <li><AiFillPhone className='contact_info'/> (647)442-9832</li>
                            </ul>

                    </div>
               
            </div>

            <p className="footer_copy">&#169; 2021. All Rights Reserved.</p>
        </footer>
            
     
    )
}
