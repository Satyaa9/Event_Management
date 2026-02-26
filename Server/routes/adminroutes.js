const router = require("express").Router();
const db = require("../config/db");

// Register Admin
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json("Admin Registered");
  });
});
router.get("/", (req, res) => {
  res.send("Admin Route Working");
});
module.exports = router;