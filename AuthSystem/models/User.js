const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, uniqe: true, trim: true },
  email: { type: String, required: true, uniqe: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
});

module.exports = mongoose.model("UserTables", userSchema);
