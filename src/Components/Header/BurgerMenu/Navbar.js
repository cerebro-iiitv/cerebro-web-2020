import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar_style.scss'
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends Component {
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
	
	showDrawer = () => {
		this.setState({
			drawerOut: true
		});
		
		try {
			document.getElementById('user-profile-main').style.zIndex = -1;
			document.getElementById('social-icons').style.zIndex = -1;
		} catch { }
	};
	
	hideDrawer = () => {
		this.setState({
			drawerOut: false
		});
		try {
			document.getElementById('user-profile-main').style.zIndex = 0;
			document.getElementById('social-icons').style.zIndex = 2000;
		} catch { }
	};

	componentDidMount() {
		document.addEventListener('scroll', e => {
			let elem = document.getElementById('navbar-container')
			if (window.pageYOffset > 38) {
				if (!elem.classList.contains('scrolled')) {
					elem.classList.add('scrolled')
				}
			} else {
				elem.classList.remove('scrolled')
			}
		})
	}

	componentDidUpdate() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		return (
			<div id="hamburger-container">
				<nav id='navbar-container' >
					<div id="drawer-button" className="container">
						<img src="media/menu.svg" alt="Open menu" onClick={this.showDrawer} />
					</div>

					<div
						id="black-background"
						className={this.state.drawerOut ? 'black-background-visible' : null}
						onClick={this.hideDrawer}
					/>

					<div id="drawer" className={this.state.drawerOut ? 'drawer-visible' : null}>
						<NavLink className="list_element" onClick={this.hideDrawer} exact to="/">
						<i className="fa fa-home"></i>
							<span className="elements">home</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/events">
						<i class="fa fa-calendar"></i>
							<span className="elements">EVENTS</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/team">
						<i className="fa fa-users"></i>
							<span className="elements">TEAM</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/timeline">
							<i className="fa fa-hourglass-half"></i>
							<span className="elements">TIMELINE</span>
                        </NavLink>
						<NavLink className="list_element" onClick={this.hideDrawer} to="/timeline">
						<i className="fa fa-info"></i>
						<span className="elements">BROCHURE</span>
                        </NavLink>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;