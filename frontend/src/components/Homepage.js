import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import homepageImages from "../../src/homepageImages";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % homepageImages.length
        );
        setFade(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <br />
        <h2 className="homepage__header">
          Veloce Virdi - The Supercar Specialists
        </h2>
        <p className="homepage__description">
          Welcome to Veloce Virdi, we have been in the business for over 30
          years and have established ourselves as a premier destination for
          high-end luxury vehicles. Our showroom is filled with a diverse
          selection of the most sought-after supercars from top manufacturers
          around the world. Whether you are in the market for a sleek and
          powerful sports car or a luxurious and sophisticated grand tourer, we
          have something to suit your needs. Our team of experienced sales
          professionals is dedicated to helping you find the perfect vehicle to
          match your driving style and personal preferences. We invite you to
          browse our inventory and learn more about the exciting models we have
          available. Thank you for choosing us as your go-to dealership for all
          your supercar needs.
        </p>
        <div className="image-container">
          {homepageImages.map((homepageImages, index) => (
            <img
              key={index}
              src={homepageImages.src}
              alt={homepageImages.alt}
              className={index === currentImageIndex ? "active" : ""}
            />
          ))}
          <Link to="/cars-for-sale" className="cars-for-sale-button">
            VIEW CARS FOR SALE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
