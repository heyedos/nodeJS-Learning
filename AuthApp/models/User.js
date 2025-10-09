const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, uniqe: true },
  email: { type: String, required: true, uniqe: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
