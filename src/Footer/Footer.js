import React from "react";
import "./Footer.css";
import image from "../Images/mahamudpic";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foo-img">
        <img src={image} alt="" />
      </div>
      <div className="foos">
        <p className="rony">Mahamud Hasan</p>
        <p className="foop">
          Github: <span className="foo">https://github.com/mahamudhasan0</span>
        </p>
        <p className="foop">
          Gmail: <span className="foo1">mahmudhasan960458@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
