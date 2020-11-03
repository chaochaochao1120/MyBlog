const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleInfo = mongoose.model("articleInfo", new Schema({
    tags: [String],
    num: {type: Number}
}));

// articleInfo.create({
//     tags: ["HTML5&CSS3", "JavaScript", "NodeJS", "Vue&React", "其他"],
//     num: 100
// });

module.exports = articleInfo;