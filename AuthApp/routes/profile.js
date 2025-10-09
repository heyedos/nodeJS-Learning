const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
const User = require("../models/User");

router.get("/profile", verifyToken, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ message: "Profile accessed", user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
