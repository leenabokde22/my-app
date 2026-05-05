const express = require("express");
const router = express.Router();
const db = require("../db");

// 👉 Register
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(sql, [username, email, password], (err, result) => {
    if (err) return res.send(err);
    res.send("User Registered");
  });
});

// 👉 Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.send(err);

    if (result.length > 0) {
      res.json({ message: "Login Success", user: result[0] });
    } else {
      res.json({ message: "Invalid Credentials" });
    }
  });
});

module.exports = router;