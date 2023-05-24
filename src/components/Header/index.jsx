import React from "react";
import "./index.css";
import Navbar from "../Navbar";

function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <header className="header-subcontainer">
        <p className="header-title">Glossary</p>
      </header>
    </div>
  );
}

export default Header;
