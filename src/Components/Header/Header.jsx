import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div>
            <div>
                <nav className="nav-bar">
                {/* <img className="shft-left" src="media/h_logo_1.png"></img> */}
                <ul className="main-nav">
                    <li><img className="shift-left" src="media/h_logo_1.png"></img></li>
                        <li ><a className="dropdown" href="">HOME</a></li>
                        <li ><a className="dropdown" href="">EVENTS</a></li>
                        <li ><a className="dropdown" href="">TEAM</a></li>
                        <li ><a className="dropdown" href="">TIMELINE</a></li>
                        <li ><a className="dropdown" href="">BROCHURE</a></li>
                        <li><button class="btn-round"><img class="g_img" src="media/google.png" alt=""/></button></li>
                    </ul>

                </nav>
            </div>

        </div>
    )
}

export default Header
