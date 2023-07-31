const ContactUs = require("../models/contactus")
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const contactUs = new ContactUs(req.body);
    console.log(req.body);
    contactUs.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}

exports.list = (req, res) => {
    ContactUs.find().exec((err,data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        return res.json(data);
    })
}

