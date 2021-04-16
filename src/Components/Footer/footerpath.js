import React from "react";
import "./footerpath.css";
import { FaFacebook,FaTwitter,FaInstagramSquare,FaYoutube} from "react-icons/fa";

export default function Foot() {
  return (
    <div className="outer">
      <div className="flexing1">
        <div className="leftdetails">
          <div>
            <p>About Us</p>
          </div>
          <div>
            <p>Community Guidelines</p>
          </div>
          <div>
            <p>Help Center</p>
          </div>
          <div>
            <p>Credits</p>
          </div>
          <div>
            <p>Join our team</p>
          </div>
          <div>
            <p>Feedback</p>
          </div>
        </div>
        <div className="rightdetails">
          <div style={{color:"#3F3D56"}}>Website Name</div>
          <div>
          Something about the service offered by the educational institution. Something about the service
          </div>
        </div>
      </div>
      <div className="copyright">
            <span>copyright © 2020 domainname.com. All rights reserved. </span>
            Privacy. Terms Of Use
      </div>
      <div className="web">
         
          www.domainname.com   <FaFacebook />  <FaTwitter/>  <FaInstagramSquare />   <FaYoutube />
         
      </div>
    </div>
  );
}
