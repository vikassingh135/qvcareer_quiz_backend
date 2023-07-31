const mongoose = require("mongoose");

const questionSchema = new  mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        optionA: {
            type: String,
            required: true
        },
        optionB: {
            type: String,
            required: true,
        }, 
        optionC: {
            type: String,
            required: true
        },
        optionD: {
            type: String,
            required: true,
        },
        correctAnswer: {
            type: String
        },
        quiz: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quiz'
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Question", questionSchema);