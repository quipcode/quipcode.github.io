import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
// import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <h1 className="footer-header contact-title">Contact</h1>
      {/* <p className="footer-text">{emoji("Made with ❤️ by Saad Pasta")}</p> */}
      <p className="footer-text">If you want to connect, send me a message</p>
      <p className="footer-text">Email: abdulkarim8ahmed@gmail.com</p>
      <p className="footer-text">Phone: 310-945-7998 </p>
    </div>
    </Fade>
  );
}
