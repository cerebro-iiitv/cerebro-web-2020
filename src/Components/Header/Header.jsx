import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Navbar from "./BurgerMenu/Navbar";
import "font-awesome/css/font-awesome.min.css";
import Modal from "react-responsive-modal";
import { GoogleLogin } from "react-google-login";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOut: false,
            open: false,
            firstName: null,
            lastName: null,
            email: null,
            imageUrl: null,
            access_token: null
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

    responseGoogle = async (res) => {
        // Storing in local storage
        if (res.uc.access_token) {
            await localStorage.setItem("access_token", res.uc.access_token);
            // await window.location.reload();
        }
        else {
            console.error("Login Error");
        }
        // Updating values in state
        this.setState({
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
            access_token: res.uc.access_token
        })
    }

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

                    <GoogleLogin
                        clientId="646722007534-bn7ekn1cnvl4am4umntss50eardh9bs5.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="navbar__login">
                                <img class="g_img" src="media/google.png" alt="" />
                            </button>
                        )}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </nav>

                <Modal open={open} onClose={this.onCloseModal} center>
                    <embed src="http://www.africau.edu/images/default/sample.pdf" width="700" height="750" />
                </Modal>
            </div>
        )
    }
}

export default Header
