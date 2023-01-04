import React from "react";
import "../styles/cars.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <p>+44 (0) 20 5555 5555</p>
      </div>
      <div className="header-center">
        <h1> Veloce Virdi</h1>
      </div>
      <div className="header-right">
        <div className="address-line">123-150 Main Street</div>
        <div className="address-line">London SW15 3WC</div>
      </div>
    </div>
  );
};

export default Header;
