import React from "react";
import "./index.css";
import Logo from "../../assets/logos/logo_brown.png";
import PhoneIcon from "../../assets/icons/phone-brown.svg";
import EmailIcon from "../../assets/icons/email-brown.svg";
import LocationIcon from "../../assets/icons/location-brown.svg";
import FacebookIcon from "../../assets/icons/facebook-brown.svg";
import InstagramIcon from "../../assets/icons/instagram-brown.svg";
import LinkedInIcon from "../../assets/icons/linkedin-brown.svg";
import TwitterIcon from "../../assets/icons/twitter-brown.svg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-subcontainer footer-container_logo">
        <img src={Logo} alt=" " className="footer-logo" />
      </div>
      <div className="footer-subcontainer">
        <div className="footer-innercontainer footer-innercontainer_title">
          INFORMATION
        </div>
        <div className="footer-innercontainer footer-innercontainer_title">
          SHOP NOW
        </div>
        <div className="footer-innercontainer footer-innercontainer_title">
          CONTACT US
        </div>
        <div className="footer-innercontainer footer-innercontainer_list">
          <ul className="ul">
            <li className="footer-list_value">
              <span>About Us</span>
            </li>
            <li className="footer-list_value">
              <span>Shop All</span>
            </li>
            <li className="footer-list_value">
              <span>FAQ</span>
            </li>
            <li className="footer-list_value">
              <span>Returns and Exchange</span>
            </li>
            <li className="footer-list_value">
              <span>Terms of Service</span>
            </li>
            <li className="footer-list_value">
              <span>Refund</span>
            </li>
          </ul>
        </div>
        <div className="footer-innercontainer footer-innercontainer_list">
          <ul className="footer-list">
            <li className="footer-list_value">
              <span>All Products</span>
            </li>
            <li className="footer-list_value">
              <span>Hemp Nutrtion</span>
            </li>
            <li className="footer-list_value">
              <span>CannaBliss</span>
            </li>
            <li className="footer-list_value">
              <span>Skin Health</span>
            </li>
          </ul>
        </div>
        <div className="footer-innercontainer footer-innercontainer_list">
          <ul className="footer-list">
            <li className="footer-list_value footer-list_value_contact">
              <img
                src={PhoneIcon}
                alt=""
                className="footer-list_value_contact_icon"
              />
              +91 91081 54394
            </li>
            <li className="footer-list_value footer-list_value_contact">
              <img
                src={EmailIcon}
                alt=""
                className="footer-list_value_contact_icon"
              />
              info@indiahemoorganics.com
            </li>
            <li className="footer-list_value footer-list_value_contact">
              <img
                src={LocationIcon}
                alt=""
                className="footer-list_value_contact_icon"
              />
              #41/2 Castle Street, Ashok Nagar, Bangalore - 560025
            </li>
            <li className="footer-list_value footer-list_container_icon">
              <span>
                <a href="https://www.facebook.com/">
                  <img src={FacebookIcon} alt="" className="footer-list_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/">
                  <img
                    src={InstagramIcon}
                    alt=""
                    className="footer-list_icon"
                  />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/">
                  <img src={LinkedInIcon} alt="" className="footer-list_icon" />
                </a>
              </span>
              <span>
                <a href="https://www.twitter.com/">
                  <img src={TwitterIcon} alt="" className="footer-list_icon" />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
