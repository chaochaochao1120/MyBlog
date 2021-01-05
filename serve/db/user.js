const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let user = mongoose.model("user", new Schema({
    // 用户名
    userName: {type: String, required: true},
    // 密码
    password: {type: String, required: true},
    // 头像
    photo: {type: String, default: "/img/defaultPhoto.png"},
    // 注册时间
    createDate: {type: Number, default: Date.now()},
    // 是否权限禁用
    disabled: {type: Boolean, default: false}
}));

module.exports = user;
