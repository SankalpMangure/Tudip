const mongoose = require("mongoose");

const candidatesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile_no: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
        default: 1
    }
}, { timestamps: {} });

module.exports = mongoose.model("candidates", candidatesSchema)