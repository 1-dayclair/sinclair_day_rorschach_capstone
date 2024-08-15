const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const commentsSchema = new Schema({
    comments: [{
        username: {type: String},
        comment: {type: String},
        reply: {type: String},
    }],
});

module.exports = mongoose.model("comments", commentsSchema);