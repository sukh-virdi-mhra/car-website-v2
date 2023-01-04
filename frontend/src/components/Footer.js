import React from "react";
import "../styles/styles.css";

function Footer() {
  let date = new Date();
  return (
    <div className="footer">
      <p>
        {date.getFullYear()} Veloce Virdi. All Rights Reserved. Registered
        Company Number: 312768209
      </p>
    </div>
  );
}

export default Footer;
