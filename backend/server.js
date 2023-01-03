const express = require("express");
const app = express();
const cars = require("./cars");

app.get("/api", (req, res) => {
  res.json({ cars });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
