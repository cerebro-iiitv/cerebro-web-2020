import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div>
            <nav className="nav-bar">
               <ul className="main-nav">
                    <li ><a href="">HOME</a></li>
                    <li ><a href="">EVENTS</a></li>
                    <li ><a href="">TEAM</a></li>
                    <li ><a href="">TIMELINE</a></li>
                    <li ><a href="">BROCHURE</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
