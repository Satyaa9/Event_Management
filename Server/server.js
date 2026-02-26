const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", require("./routes/adminroutes"));
app.use("/api/student", require("./routes/studentroutes"));
app.use("/api/events", require("./routes/eventroutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});