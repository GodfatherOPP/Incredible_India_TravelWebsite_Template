import React from "react";
import logoWhite from "../Assets/logoWhite.png";
import mapPng from "../Assets/map.png";
import facebookPng from "../Assets/facebook.png";
import youtubePng from "../Assets/youtube.png";
import linkedinPng from "../Assets/linkedin.png";
import instagramPng from "../Assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_socialContact">
        <img className="footerlogo" src={logoWhite} />
        <div className="socialIconsContainer">
          <a href="#">
            <img src={facebookPng} />
          </a>
          <a href="#">
            <img src={youtubePng} />
          </a>
          <a href="#">
            <img src={linkedinPng} />
          </a>
          <a href="#">
            <img src={instagramPng} />
          </a>
        </div>
      </div>
      <div className="otherLinks">
        <div className="quiclinks">
          <h2>QUICK LINKS</h2>
          <a href="#">
            <nav>Home</nav>
          </a>
          <a href="#">
            <nav> About Us</nav>
          </a>
          <a href="#">
            <nav> Contact </nav>
          </a>
          <a href="#">
            <nav> Sponsors</nav>
          </a>
          <a href="#">
            <nav>Founders </nav>
          </a>
        </div>

        <div className="services">
          <h2>SERVICES</h2>
          <a href="#">
            <nav>Bus services </nav>
          </a>
          <a href="#">
            <nav>Ticket Booking </nav>
          </a>
          <a href="#">
            <nav>Flight Booking </nav>
          </a>
          <a href="#">
            <nav>Budget Planning</nav>
          </a>
          <a href="#">
            <nav>Safety</nav>
          </a>
        </div>
      </div>
      <div className="mapContainer">
        <img src={mapPng} />
      </div>
    </div>
  );
};

export default Footer;
