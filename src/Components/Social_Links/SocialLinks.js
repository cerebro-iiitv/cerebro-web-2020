import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './SocialLinks.scss'

const SocialLinks = () => {
    return (
        <div>
            <ul className="font-awe"> 
               <div className="font-awe__verticalLine">
                   <li className="ListElement "></li>
               </div> 
                <li ><a><i className="ListElement fa fa-instagram fa-2x"></i></a></li>
                <li ><a><i className="ListElement fa fa-twitter fa-2x"></i></a></li>
                <li ><a><i className="ListElement fa fa-facebook fa-2x"></i></a></li>
            </ul>    
        </div>
    );

}
export default SocialLinks;