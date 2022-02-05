import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/appstore.png";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phones.</p>
        <img
          src={playStore}
          alt="playstore"
          style={{ marginBottom: "-2em" }}
        />
        <img src={appStore} alt="playstore" />
      </div>

      <div className="midFooter">
        <h1>GETHANDLES</h1>
        <p>Using Skills on a right and efficient way is our first priority</p>

        <p>Copyrights 2022 &copy; Hamidoo</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://twitter.com/hamid1882"> Twitter</a>
        <a href="https://github.com/hamid1882"> github</a>
        <a href="https://twitter.com/hamid1882"> LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
