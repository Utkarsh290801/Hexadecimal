const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const port = 5000;
const api = require("./api.json");
const SECRET_KEY = "your-secret-key";
const allowedOrigin = "http://localhost:3000";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());
app.get("/api", (req, res) => {
  res.json(api);
  console.log(api);
});
app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`The server has been started on port ${port}`);
});
