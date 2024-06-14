import React from "react";
import "../styles/styles.css";

const Location = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <br />
        <h2 className="homepage__header">
          Veloce Virdi - The Supercar Specialists
        </h2>
        <p className="homepage__description">
          We warmly welcome you to visit our London showroom!
        </p>
        <div className="location-info">
          <ul className="location-text">
            <li>
              <h3>Address</h3>
              <p>12-150 Main Street</p>
              <p>Mayfair</p>
              <p>London</p>
              <p>SW15 3WC</p>
            </li>
            <li>
              <h3>Showroom Opening Times</h3>
              <p>Monday - Friday 9am - 7pm</p>
              <p>Saturday 9am - 6pm</p>
              <p>Sunday & Bank Holidays 10am - 5pm</p>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <ul className="location-text">
            <li>
              <h3>Phone</h3>
              <a className="header-right" href="tel:+442055555555">
                +44 (0) 20 5555 5555
              </a>
            </li>
            <li>
              <h3>Email</h3>
              <a className="header-right" href="mailto:sales@velocevirdi.com">
                sales@velocevirdi.com
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            height: "400px",
            background: "#f0f0f0",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="map"
            width="100%"
            height="100%"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1496%2C51.5068%2C-0.1435%2C51.5101&amp;layer=mapnik&amp;marker=51.50845%2C-0.14655"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
