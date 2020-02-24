import React from 'react';
import './Footer.scss';

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
				<div className="footer_l__links_content"><a className="footer_l__links_cn" >Home</a></div>
				<div className="footer_l__links_content"><a className="footer_l__links_cn" >Institute Site</a></div>
				<div className="footer_l__links_content"><a className="footer_l__links_cn" >Events</a></div>
				<div className="footer_l__links_content"><a className="footer_l__links_cn" >Timeline</a></div>
			</div>
			<div className="footer_l__contact">
				<div>
					<div className="footer_l__hr" >
						<div className="footer_l__hr_text_1"><hr color="#29abe2" /></div>
						<h2>Contact</h2>
						<div className="footer_l__hr_text"><hr color="#29abe2" /></div><br /><br /><br /></div>
				</div>
				<div className="footer_l__contact_content"><a className="footer_l__contact_cn" >Email: cerebro@iiitv.ac.in                             </a></div>
				<div className="footer_l__contact_content"><a className="footer_l__contact_cn" >Phone: +91-9370645038</a></div>
				<div className="footer_l__contact_content"><a className="footer_l__contact_cn" >Address: c/o Block No.9, Government Engineering<div className="footer_l__contact_gmap">College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
			</div>
		</div>
	</div>
	);
}

export default Footer;