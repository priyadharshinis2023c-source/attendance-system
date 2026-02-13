const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/auth", require("./routes/authRoutes"));
app.use("/attendance", require("./routes/attendanceRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});