import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleBrowseCarsClick = () => {
    navigate("/cars");
  };

  return (
    <div>
      <br />
      <div className="homepage">
        <button className="browse-cars-button" onClick={handleBrowseCarsClick}>
          View cars for sale
        </button>
      </div>
    </div>
  );
};

export default Homepage;
