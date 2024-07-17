import React, { useState } from "react";
import "../styles/styles.css";

const CarDetailsContact = ({ carName }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    car: carName,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, car, message } = formData;
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          car,
          message,
        }),
      });
      const json = await response.json();
      console.log("Success:", json);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="homepage">
      <div className="homepage__content">
        <br />
        <h3>Contact Us</h3>
        <p className="homepage__description">
          Please fill out the form below, and we will get back to you as soon as
          possible with more information. Thank you for choosing Veloce Virdi as
          your go-to dealership for all your supercar needs.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", marginRight: "10px" }}>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div style={{ width: "50%" }}>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="car">Car</label>
          <p>{formData.car}</p>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default CarDetailsContact;
