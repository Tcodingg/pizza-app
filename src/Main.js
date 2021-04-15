import React,{useState} from 'react'
import {Link} from 'react-scroll'
import './style.scss'
import {BiMenu} from 'react-icons/bi'
import {BsMoon} from 'react-icons/bs'

export default function Main() {
    const [showMenu, setShowMenu] = useState(false)
    const [active, setActive] = useState(false);
    const [isDartTheme, setIsDarkTheme] = useState(false);

    console.log(isDartTheme)
    return (
        <header className='l-header' id='header'>
           <nav className='nav bd-container'>
            <a href="#" className='nav_logo'>Pizza</a>
            <div className={showMenu? 'nav_menu show-menu': 'nav_menu'}>
                <ul className="nav_list">
                    <li className="nav_items"><Link onClick={()=>setShowMenu(false)}  to="home" offset={-50} spy={true} smooth={true} className='nav_link'>Home</Link></li>
                    <li className="nav_items"><Link onClick={()=>setShowMenu(false)}  to="about" spy={true} smooth={true} className='nav_link'>About</Link></li>
                    <li className="nav_items"><Link onClick={()=>setShowMenu(false)}  to="services" spy={true} smooth={true} className='nav_link'>Services</Link></li>
                    <li className="nav_items"><Link onClick={()=>setShowMenu(false)}  to="menu" spy={true} smooth={true} className='nav_link'>Menu</Link></li>
                    <li className="nav_items"><Link onClick={()=>setShowMenu(false)}  to="contact" spy={true} smooth={true} className='nav_link'>Contact Us</Link></li>

                    <li onClick={()=>setIsDarkTheme(preVal=> !preVal)} className='change-theme'><BsMoon /></li>
                    
                </ul>
            </div>
                <div onClick={()=>setShowMenu(preVal=> !preVal)} className="nav_toggle" id="nav-toggle">
                <BiMenu />
                </div>
           </nav>
        </header>
    )
}
