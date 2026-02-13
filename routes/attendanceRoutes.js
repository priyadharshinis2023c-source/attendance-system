const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

router.post("/mark", async (req, res) => {
  const { studentName } = req.body;
  await Attendance.create({ studentName });
  res.send("Attendance Marked");
});

router.get("/list", async (req, res) => {
  const records = await Attendance.find();
  res.json(records);
});

module.exports = router;