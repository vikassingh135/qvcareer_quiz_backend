const mongoose = require("mongoose");

const contactUsSchema = new  mongoose.Schema(
    {
        name: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        }, 
        description: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("ContactUs", contactUsSchema);