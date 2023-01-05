import React from "react";
import "../styles/styles.css";

const Homepage = () => {
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

        <div className="image-grid">
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Ferrari-Logo.png"
            alt="Image 1"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Porsche-Logo.png"
            alt="Image 2"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Rolls-Royce-Logo.png"
            alt="Image 3"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Bugatti-Logo.png"
            alt="Image 4"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Aston-Martin-Logo.png"
            alt="Image 5"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/McLaren-Logo.png"
            alt="Image 6"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Lamborghini-Logo.png"
            alt="Image 7"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Mercedes-Logo.png"
            alt="Image 8"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Pagani-Logo.png"
            alt="Image 9"
          />
          <img
            src="https://www.supercars.net/blog/wp-content/uploads/2019/12/Koenigsegg-Logo.png"
            alt="Image 10"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
