import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<div className="footer">
		<div className="footer_u">
			<div className="footer_u__logo">
				<div>
					<img src='/media/institute-logo.1fb6100a.svg' className="footer_u__logo_svg" alt="IIIT Vadodara Logo" />
				</div>
				<div className="footer_u__logo_span">Indian Institute of Information Technology, Vadodara</div>
			</div>
		</div>
		<div className="footer_l">
			<div className="footer_l__links">
				<div className="footer_l__hr_container">
					<div className="footer_l__hr" >
						<div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
						<h2>Links</h2>
						<div className="footer_l__hr_text"><hr color="#29abe2" /></div>
						<br /><br /><br /></div>
				</div>
					<div className="footer_l__links_content"><NavLink className="footer_l__links_cn" exact to="/">Home</NavLink></div>
					<div className="footer_l__links_content"><a href='http://iiitvadodara.ac.in/' target="_blank" className="footer_l__links_cn" >Institute Site</a></div>
					<div className="footer_l__links_content"><NavLink className="footer_l__links_cn" exact to="/events">Events</NavLink></div>
					<div className="footer_l__links_content"><NavLink className="footer_l__links_cn" exact to="/timeline">Timeline</NavLink></div>
			</div>
			<div className="footer_l__contact">
				<div>
					<div className="footer_l__hr" >
						<div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
						<h2>Contact</h2>
						<div className="footer_l__hr_text"><hr color="#29abe2" /></div><br /><br /><br /></div>
				</div>
					<div className="footer_l__contact_content"><a href='mailto:cerebro@iiitvadodara.ac.in' className="footer_l__contact_cn" ><b>Email</b>: cerebro@iiitvadodara.ac.in                             </a></div>
					<div className="footer_l__contact_content"><a href='tel:8875038111' className="footer_l__contact_cn" ><b>Phone</b>: +91 8875038111,</a><a href='tel:9453286926' className="footer_l__contact_cn" > 9453286926  </a></div>
					<div className="footer_l__contact_content"><a href='https://goo.gl/maps/7g5D6XJpMAD2' target="_blank" className="footer_l__contact_cn" ><b>Address</b>: c/o Block No.9, Government Engineering<div className="footer_l__contact_gmap">College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
			</div>
		</div>
	</div>
	);
}

export default Footer;