import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './SocialLinks.scss'

const SocialLinks = () => {
    return (
        <div className="Social">
            <ul className="Social__font-awe"> 
               <div className="Social__font-awe__verticalLine">
                   <li className="ListElement "></li>
               </div> 
                <li className="social-links-li"><a><i className="Social__ListElement fa fa-instagram fa-2x"></i></a></li>
                <li className="social-links-li"><a><i className="Social__ListElement fa fa-twitter fa-2x"></i></a></li>
                <li className="social-links-li"><a><i className="Social__ListElement fa fa-facebook fa-2x"></i></a></li>
            </ul>
            <a className="Social__arrowdown"><i className="fa fa-chevron-down fa-2x"></i></a>
          
        </div>
    );

}
export default SocialLinks;