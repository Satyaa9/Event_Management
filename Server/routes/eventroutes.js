const router = require("express").Router();
const db = require("../config/db");

// Create Event
router.post("/", (req, res) => {
  const { title, description, event_date, created_by } = req.body;

  const sql = "INSERT INTO events (title, description, event_date, created_by) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [title, description, event_date, created_by], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json("Event Created");
  });
});

// Get All Events
router.get("/", (req, res) => {
  db.query("SELECT * FROM events", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

module.exports = router;