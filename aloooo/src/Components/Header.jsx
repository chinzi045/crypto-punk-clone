import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="../assets/header/cryptopunk-logo.png"
          alt="punk_logo"
          className="punklogo"
        />
      </div>
      <div className="searchIconcontainer">
        <div className="searchicon">
          <img src="../assets/header/search.png" alt="logo pic" />
        </div>
        <input
          type="text"
          className="searchinput"
          placeholder="Collection , item or user..."
        />
      </div>
      <div className="headeritems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="themeswitch">
        <img
          src="../assets/header/theme-switch.png"
          alt="theme pic"
          className="theme"
        />
      </div>
      <div>
        <button className="loginbutton">log in</button>
      </div>
    </div>
  );
};

export default Header;
