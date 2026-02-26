const router = require("express").Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");

// ✅ STUDENT SIGNUP
router.post("/signup", async (req, res) => {
  const { name, email, department, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO students (name, email, department, password) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [name, email, department, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Student Registered Successfully ✅" });
    });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});



const jwt = require("jsonwebtoken");

// ✅ STUDENT LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM students WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length === 0) {
      return res.status(400).json({ message: "Student not found ❌" });
    }

    const student = result[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password ❌" });
    }

    // Generate token
    const token = jwt.sign(
      { id: student.id, email: student.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login Successful ✅",
      token: token,
      student: {
        id: student.id,
        name: student.name,
        email: student.email
      }
    });
  });
});



const verifyToken = require("../middleware/authMiddleWare");

// ✅ STUDENT PROFILE
router.get("/profile", verifyToken, (req, res) => {

  const sql = "SELECT id, name, email, department FROM students WHERE id = ?";

  db.query(sql, [req.student.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(result[0]);
  });
});

module.exports = router;