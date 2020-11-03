const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = mongoose.model("user", new Schema({

}));

module.exports = user;