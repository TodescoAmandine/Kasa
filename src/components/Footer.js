import React from "react";
import LogoImage from "../assets/img/LOGO_nb.png"

const Footer = () => {
  return (
    <div className="footer">
      <img src={LogoImage} alt="" />
    <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;