const Question = require("../models/question")
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const question = new Question(req.body);
    question.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}

exports.list = (req, res) => {
    Question.find().exec((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}

exports.listByCategory = (req, res) => {
    Question.find({quiz: req.params.quizId}).exec((err,data) => {
        if(err) {
            return res.status(400).json({
                errorHandler: errorHandler(err)
            })
        }
        return res.json(data)
    })
}

exports.remove = (req, res) => {
    Question.remove({"_id": req.params.questionId}).then((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json({
            message: "Question Deleted"
        })
    })
}

exports.read = (req, res) => {
    return res.json(req.question);
}