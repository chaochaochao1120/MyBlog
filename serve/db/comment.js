const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let comment = mongoose.model("comment", new Schema({

}));

module.exports = comment;