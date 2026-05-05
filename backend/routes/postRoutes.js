const express = require("express");
const router = express.Router();
const db = require("../db");

// 👉 Add Post
router.post("/add", (req, res) => {
  const { user_id, image, caption } = req.body;

  const sql = "INSERT INTO posts (user_id, image, caption) VALUES (?, ?, ?)";

  db.query(sql, [user_id, image, caption], (err, result) => {
    if (err) return res.send(err);
    res.send("Post Added");
  });
});

// 👉 Get All Posts
router.get("/all", (req, res) => {
  const sql = "SELECT * FROM posts";

  db.query(sql, (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

module.exports = router;