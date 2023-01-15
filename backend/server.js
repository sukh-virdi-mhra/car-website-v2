const express = require("express");
const app = express();
const cars = require("./cars");
const nodemailer = require("nodemailer");
const config = require("./config");

app.get("/api", (req, res) => {
  res.json({ cars });
});

app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone, car, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });
  const mailOptions = {
    from: config.email,
    to: "sukh.virdi2@mhra.gov.uk",
    subject: "New contact form submission",
    text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Car: ${car}
Message: ${message}
`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const automatedMailOptions = {
    from: config.email,
    to: email,
    subject: "Thank you for contacting us",
    text: `
    
Dear ${firstName} ${lastName}, 

Thank you for your interest in our cars. We have received your inquiry and will get back to you as soon as possible. 

Here is a summary of your inquiry:
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Car: ${car}
Message: ${message}

Veloce Virdi
    `,
  };
  await new Promise((resolve) => setTimeout(resolve, 10000));
  transporter.sendMail(automatedMailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
