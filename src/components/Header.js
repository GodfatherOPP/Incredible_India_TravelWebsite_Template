import React from "react";
import logo from "../Assets/logo.png";
import menu from "../Assets/menu.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img src={logo} />
      </div>
      <div>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>Product</span>
          <span>Sponsors</span>
          <span>Help</span>
        </nav>
      </div>
      <div>
        <button className="loginBtn">Login</button>
      </div>
      <div className="menuIcon">
        <img src={menu} />
      </div>
    </div>
  );
};

export default Header;
