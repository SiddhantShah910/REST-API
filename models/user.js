const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    gender: String,
    job_title: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;