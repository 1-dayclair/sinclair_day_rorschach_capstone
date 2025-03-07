const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const communicationSchema = new Schema({
    username: {type: String},
    messages: {type: String},
    reply: {type: String} 

});

module.exports = mongoose.model("communication", communicationSchema);