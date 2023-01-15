import React, { useState } from "react";
import "../styles/styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    car: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, car, message } = formData;
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          car,
          message,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", marginRight: "10px" }}>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div style={{ width: "50%" }}>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <br />
          <label htmlFor="car">Car</label>
          <input
            type="text"
            id="car"
            name="car"
            required
            value={formData.car}
            onChange={(e) => setFormData({ ...formData, car: e.target.value })}
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
