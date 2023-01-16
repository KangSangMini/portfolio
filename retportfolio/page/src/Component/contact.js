import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-wrap">
      <div className="contact-box">
        <div id="contact-box1">
          <h1>CONTACT</h1>
        </div>
        <div>
          <span>
            <img src="/Email1.jpg" alt="Emaillogo" id="logo" />
            kta127389@gmail.com
          </span>
        </div>
        <div id="contact-box3">
          <span>
            <img src="/gitimg.png" alt="gitimg" id="logo" />
            SangMinKang&nbsp;
            <a href="https://github.com/KangSangMini" target="blank">
              github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
