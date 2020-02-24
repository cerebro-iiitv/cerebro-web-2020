import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss'
import Navbar from './BurgerMenu/Navbar'
import 'font-awesome/css/font-awesome.min.css';
import Modal from "react-responsive-modal";
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOut: false,
            open: false
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({
            open: false,
        });
    };
    render() {
        const { auth, signOut } = this.props;
        const { open } = this.state;
        return (
            <div>
                <nav className="navbar">
                    <Navbar />
                    <img className="navbar__logo" src="media/logo-without-name.png"></img>

                    <ul className="navbar__links">
                        <NavLink className="navbar__links__li" exact to="/"><li>HOME</li></NavLink>
                        <NavLink className="navbar__links__li" exact to="/events"><li>Events</li></NavLink>
                        <NavLink className="navbar__links__li" exact to="/team"><li>Team</li></NavLink>
                        <NavLink className="navbar__links__li" exact to="/timeline"><li>timeline</li></NavLink>
                        {/* <NavLink className="navbar__links__li" exact to="/brochure"><li>brochure</li></NavLink> */}
                        <span className="navbar__links__li" onClick={this.onOpenModal}>Brochure</span>
                    </ul>

                    <button className="navbar__login"><img class="g_img" src="media/google.png" alt="" /></button>
                </nav>

                <Modal open={open} onClose={this.onCloseModal} center>
                    <embed src="http://www.africau.edu/images/default/sample.pdf" width="700" height="750" />
                </Modal>
            </div>
        )
    }
}

export default Header
