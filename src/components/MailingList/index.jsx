import React from "react";
import "./index.css";

function MailingList() {
  return (
    <div className="mailinglist-container">
      <div className="mailinglist-subcontainer">
        <div className="mailinglist-innercontainer">
          <h2 className="mailinglist-title">
            Stay Updated <span>on all news on Hemp</span>
          </h2>
          <p className="mailinglist-description">
            Join our mailing list and get 10% off your next order
          </p>
        </div>
        <div className="mailinglist-innercontainer mailinglist-innercontainer_input">
          <input
            type="email"
            name="email"
            id="email"
            className="mailinglist-input"
            placeholder="Enter your email"
          />
          <div className="mailinglist-container_button">
            <button className="mailinglist-button">SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailingList;
