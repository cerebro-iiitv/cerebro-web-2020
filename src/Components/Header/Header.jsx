import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <div>
            <div>
                <nav className="nav-bar">
                {/* <img className="shft-left" src="media/h_logo_1.png"></img> */}
                <ul className="main-nav">
                    <li className="list-element"><img className="shift-left" src="media/h_logo_1.png"></img></li>
                        <li className="list-element"><NavLink className="headerDropdown" exact to="/">HOME</NavLink></li>
                        <li className="list-element"><a className="headerDropdown" href="">EVENTS</a></li>
                        <li className="list-element"><a className="headerDropdown" href="">TEAM</a></li>
                        <li className="list-element"><a className="headerDropdown" href="">TIMELINE</a></li>
                        <li className="list-element"><a className="headerDropdown" href="">BROCHURE</a></li>
                        <li className="list-element"><button class="btn-round"><img class="g_img" src="media/google.png" alt=""/></button></li>
                    </ul>

                </nav>
            </div>

        </div>
    )
}

export default Header
