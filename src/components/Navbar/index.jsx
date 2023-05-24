import React from "react";
import "./index.css";
import Logo from "../../assets/logos/logo_white.png";
import SearchIcon from "../../assets/icons/search.svg";
import UserIcon from "../../assets/icons/user.svg";
import BagIcon from "../../assets/icons/bag.svg";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-subcontainer">
        <img src={Logo} alt=" " className="navbar-logo" />
        <ul className="navbar-list">
          <li className="navbar-list_value">SHOP</li>
          <li className="navbar-list_value">CONSULTATION</li>
          <li className="navbar-list_value">RESOURCES</li>
          <li className="navbar-list_value">MEMBERSHIP</li>
          <li className="navbar-list_value">ABOUT</li>
        </ul>
        <div className="navbar-icons">
          <img src={SearchIcon} alt="" className="navbar-icon" />
          <img src={UserIcon} alt="" className="navbar-icon navbar-icon_user" />
          <img src={BagIcon} alt="" className="navbar-icon navbar-icon_bag" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
