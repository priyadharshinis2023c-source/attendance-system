const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) res.json({ success: true });
  else res.json({ success: false });
});

router.get("/create-admin", async (req, res) => {
  await User.create({ username: "admin", password: "1234" });
  res.send("Admin Created");
});

module.exports = router;