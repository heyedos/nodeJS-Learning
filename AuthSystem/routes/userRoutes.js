const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const User = require("../models/User");

router.get("/profile", verifyToken, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ message: "profile accesed", user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
