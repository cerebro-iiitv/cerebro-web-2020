import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__logo">
				<div>
					<img src='/media/institute-logo.1fb6100a.svg' className="footer__logo_svg" alt="IIIT Vadodara Logo" />
				</div>
				<div className="footer__logo_span">Indian Institute of Information Technology, Vadodara</div>
			</div>

			<div className="footer__links">
				<div>
					<div className="footer__hr" ><h2>Links</h2><div className="footer__hr_text"><hr color="#25cbc0" /></div><br /><br /><br /></div>
				</div>
				<div className="footer__links_content"><a className="footer__links_cn" >Home</a></div>
				<div className="footer__links_content"><a className="footer__links_cn" >Institute Site</a></div>
				<div className="footer__links_content"><a className="footer__links_cn" >Events</a></div>
				<div className="footer__links_content"><a className="footer__links_cn" >Timeline</a></div>
			</div>
			<div className="footer__contact">
				<div>
					<div className="footer__hr" ><h2>Contact</h2><div className="footer__hr_text"><hr color="#25cbc0" /></div><br /><br /><br /></div>
				</div>
				<div className="footer__links_content"><a className="footer__links_cn" >Email: cerebro@iiitv.ac.in</a></div>
				<div className="footer__links_content"><a className="footer__links_cn" >Phone: +91-9370645038</a></div>
				<div className="footer__links_content"><a className="footer__links_cn" >Address: c/o Block No.9, Government Engineering<div className="footer__gmap"> College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
			</div>
		</div>
	);
}

export default Footer;