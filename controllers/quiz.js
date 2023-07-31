const Quiz = require("../models/quiz");
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const quiz = new Quiz(req.body);
    quiz.save((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        return res.json(data);
    })
}

exports.read = (req, res) => {
    Quiz.findById(req.params.quizId).exec((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        };
        return res.json(data);
    })
}


exports.list = (req, res) => {
    Quiz.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}

exports.quizByCategory = (req, res) => {
    Quiz.find({"category": req.params.categoryId}).exec((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}