const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashPassword: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("create", createSchema);