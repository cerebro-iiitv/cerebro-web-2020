import React from 'react';
import './Footer.scss';


function Footer() {
    return (
        <div>
            <div className="hrContainer"><hr color="grey" /></div>
            <div className="Container">

                <div className="Logo">
                    <div>
                        <img src='/media/institute-logo.1fb6100a.svg' className="institute-logo" alt="IIIT Vadodara Logo" />
                    </div>
                    <div className="span">Indian Institute of Information Technology, Vadodara</div>
                </div>
                {/* <div></div> */}
                <div className="Links">
                    <div>
                        <div className="containerTitle" ><h2>Links</h2><div className="hr-text"><hr color="#29abe2" /></div><br /><br /></div>
                    </div>
                    <div className="links_div"><a class="Linkname" >Home</a></div>
                    <div className="links_div"><a class="Linkname" >Institute Site</a></div>
                    <div className="links_div"><a class="Linkname" >Events</a></div>
                    <div className="links_div"><a class="Linkname" >Timeline</a></div>
                </div>
                <div className="Contact">
                    <div>
                        <div className="containerTitle" ><h2>Contact</h2><div className="hr-text"><hr color="#29abe2" /></div><br /><br /></div>
                    </div>
                    <div className="links_div"><a class="Linkname" >Email: cerebro@iiitv.ac.in</a></div>
                    <div className="links_div"><a class="Linkname" >Phone: +91-9370645038</a></div>
                    <div className="links_div"><a class="Linkname" >Address: c/o Block No.9, Government Engineering<div className="links_div"> College, Sector-28, Gandhinagar, Gujarat - 382028</div></a></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;