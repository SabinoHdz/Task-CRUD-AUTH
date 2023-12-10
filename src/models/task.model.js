const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: [true, "title is required"], trim: true },
  description: {
    type: String,
    required: [true, "description is required"],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user is required"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
