const mongoose = require("mongoose");

const completedTestSchema = new mongoose.Schema(
  {
    title:{
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    user_answers: [],
    score: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CompletedTest", completedTestSchema);
