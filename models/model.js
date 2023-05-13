const mongoose = require('mongoose');

const formSchema = {
    fname: {
        required: true,
        type: String
    },
    lname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
};

const Data = mongoose.model("Data", formSchema);

module.exports = Data;