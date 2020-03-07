import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Navbar from "./BurgerMenu/Navbar";
import "font-awesome/css/font-awesome.min.css";
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
      open: false
    });
  };
  render() {
    const { auth, signOut } = this.props;
    const { open } = this.state;
    return (
      <div>
        <nav className="navbar">
          <Navbar />
          <img
            className="navbar__logo"
            src="media/logo-without-name.png"
            alt="logo-without-name"
          ></img>

          <ul className="navbar__links">
            <NavLink className="navbar__links__li" exact to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink className="navbar__links__li" exact to="/events">
              <li>Events</li>
            </NavLink>
            <NavLink className="navbar__links__li" exact to="/team">
              <li>Team</li>
            </NavLink>
            <NavLink className="navbar__links__li" exact to="/timeline">
              <li>timeline</li>
            </NavLink>
            {/* <NavLink className="navbar__links__li" exact to="/brochure"><li>brochure</li></NavLink> */}
            <a
              className="navbar__links__li"
              href="https://yashshah2820.pythonanywhere.com/media/pdfs/cerebro-brochure.pdf"
            >
              Brochure
            </a>
          </ul>

          <a className="navbar__login">
            <img className="g_img" src="media/google.png" alt="" />
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
