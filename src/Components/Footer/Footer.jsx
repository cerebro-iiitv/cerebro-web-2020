import React from 'react';
import './Footer.scss';


function Footer() {
    return (
        <div>
            <div className="hr-footer-container"><hr className="hr-line" color="grey" /></div>
            <div className="footer-container">

                <div className="logo">
                    <div>
                        <img src='/media/institute-logo.1fb6100a.svg' className="institute-logo" alt="IIIT Vadodara Logo" />
                    </div>
                    <div className="span">Indian Institute of Information Technology, Vadodara</div>
                </div>
                {/* <div></div> */}
                <div className="links">
                    <div>
                        <div className="footer-lc-title" ><h2>Links</h2><div className="hr-text"><hr color="#25cbc0" /></div><br /><br/><br /></div>
                    </div>
                    <div className="links-div"><a class="linkname" >Home</a></div>
                    <div className="links-div"><a class="linkname" >Institute Site</a></div>
                    <div className="links-div"><a class="linkname" >Events</a></div>
                    <div className="links-div"><a class="linkname" >Timeline</a></div>
                </div>
                <div className="contact">
                    <div>
                        <div className="footer-lc-title" ><h2>Contact</h2><div className="hr-text"><hr color="#25cbc0" /></div><br /><br/><br /></div>
                    </div>
                    <div className="links-div"><a class="linkname" >Email: cerebro@iiitv.ac.in</a></div>
                    <div className="links-div"><a class="linkname" >Phone: +91-9370645038</a></div>
                    <div className="links-div"><a class="linkname" >Address: c/o Block No.9, Government Engineering<div className="links_map"> College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;