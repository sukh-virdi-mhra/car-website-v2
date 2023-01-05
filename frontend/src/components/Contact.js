import React from "react";
import "../styles/styles.css";

const Contact = () => {
  return (
    <div className="homepage">
      <div className="homepage__content">
        <br />
        <h2 className="homepage__header">Contact Us</h2>
        <p className="homepage__description">
          Thank you for visiting our contact page. If you are interested in a
          particular car, please fill out the form below and let us know which
          car you are interested in. We will get back to you as soon as possible
          with more information. Thank you for choosing Veloce Virdi as your
          go-to dealership for all your supercar needs.
        </p>
        <form className="contact-form">
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", marginRight: "10px" }}>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required />
            </div>
            <div style={{ width: "50%" }}>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" required />
          <br />
          <label htmlFor="car-make">Car Make</label>
          <input type="text" id="car-make" name="car-make" required />
          <br />
          <label htmlFor="car-model">Car Model</label>
          <input type="text" id="car-model" name="car-model" required />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
