import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <nav className="navbar">
        <img className="navbar__logo" src="media/logo-without-name.png"></img>

        <ul className="navbar__links">
            <li><NavLink className="navbar__links__li" exact to="/">HOME</NavLink></li>
            <li><NavLink className="navbar__links__li" exact to="/events">Events</NavLink></li>
            <li><NavLink className="navbar__links__li" exact to="/team">Team</NavLink></li>
            <li><NavLink className="navbar__links__li" exact to="/timeline">timeline</NavLink></li>
            <li><NavLink className="navbar__links__li" exact to="/brochure">brochure</NavLink></li>
        </ul>

        <button className="navbar__login"><img class="g_img" src="media/google.png" alt=""/></button>
    </nav>
)

export default Header
