const mongoose = require("mongoose");

// DOCS - https://mongoosejs.com/docs/guide.html
const userSchema = new mongoose.Schema({
  // schema object
  // name, email, age, createdAt
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, require: true, min: 15, max: 100 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User; // Export the User model
