import React from 'react'
import {menudata} from './menudata'

export default function Menu() {
    return (
        <section className='menu section bd-container' id='menu'>
            <span className='section-subtitle'>Special</span>
            <h2 className="section-title">Menu of the Week</h2>
            <div className="menu_container bd-grid">
                {menudata.map((menu)=>{
                    return(<div className="menu_content">
                        <img className='menu_img' src={menu.image} alt=""/>
                        <h1 className="menu_name">{menu.name}</h1>
                <span className='menu_detail'>{menu.detail}</span>
                <span className="menu_price">{menu.price}</span>
                <a href="#" className="button menu_button">{menu.btn}</a>
                     
                    </div>)
                })}
            </div>
            
        </section>
    )
}
