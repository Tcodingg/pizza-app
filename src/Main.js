import React from 'react'
import './style.scss'
import {BiMenu} from 'react-icons/bi'

export default function Main() {
    return (
        <header className='l-header' id='header'>
           <nav className='nav bd-container'>
            <a href="#" className='nav_logo'>Pizza</a>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_items"><a href="#home" className='nav_link'>Home</a></li>
                    <li className="nav_items"><a href="#about" className='nav_link'>About</a></li>
                    <li className="nav_items"><a href="#services" className='nav_link'>Services</a></li>
                    <li className="nav_items"><a href="#menu" className='nav_link'>Menu</a></li>
                    <li className="nav_items"><a href="#contact" className='nav_link'>Contact Us</a></li>
                    
                </ul>
            </div>
                <div className="nav_toggle" id="nav-toggle">
                <BiMenu />
                </div>
           </nav>
        </header>
    )
}
