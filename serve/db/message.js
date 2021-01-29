// 留言数据库
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let message = mongoose.model("message", new Schema({
    // 关联用户表
    user: {type: Schema.Types.ObjectId, ref: "user", required: true},
    // 留言内容
    content: {type: String, required: true},
    // 留言时间
    date: {type: Date, default: Date.now},
    // 子留言
    children: [
        {
            // 子留言用户
            user: {type: Schema.Types.ObjectId, ref: "user", required: true},
            // 子留言内容
            content: {type: String, required: true},
            // 子留言回复对象
            parentUserName: {type: String, required: true},
            // 子留言时间
            date: {type: Date, default: Date.now},
        }
    ]
}));

// 测试message表
/*message.create({
    user: "600645d0336fc53b18e28576",
    content: "<p>哈哈哈哈哈哈哈哈哈</p>"
})*/

module.exports = message;
