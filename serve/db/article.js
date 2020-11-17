const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let article = mongoose.model("article", new Schema({
    type: {type: String, required: true},
    title: {type: String, required: true},
    tag: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: new Date()},
    surface: {type: String, default: "/img/surface.jpg"},
    pv: {type: Number, default: 0},
    comment: [
        {type: Schema.Types.ObjectID, ref: "comment"}
    ]
}));

// 假数据
// for (let i = 0; i < 100; i++) {
//     article.create({
//         type: ["原创", "转载"][(Math.random()*2)|0],
//         title: `第${i+1}篇文章`,
//         content: ((i+1) +  (i+1) + "我是文章内容").repeat(10),
//         tag: ["HTML5&CSS3", "JavaScript","NodeJS","Vue","其他"][(Math.random()*5)|0],
//         pv: (Math.random()*2000)|0,
//     });
// }

module.exports = article;
