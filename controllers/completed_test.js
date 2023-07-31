const CompletedTest = require("../models/completed_test");
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const completed_test = new CompletedTest(req.body);
    completed_test.save((err,data) =>  {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    })
}

exports.read = (req, res) => {
    return CompletedTest.find({"user":req.params.userId}).exec((err,data) => {
        if(err) {
            return res.json(400).json({
                error: errorHandlerO(err)
            })
        } else res.json(data);
    })
}