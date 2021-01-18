/*
*       req.session.registerCheckCode           注册的验证码svg
*
*       req.session.login                       登录时存储用户所有信息
*
* */
var session = require("express-session");
var connectMongo = require("connect-mongo")(session);

module.exports = session({
    secret: "lzc",                  // 秘钥，一个字符，用于加密，可以随便写
    cookie: {maxAge: 30*60*1000},   // 给前端这只cookie保存时间
    rolling: false,                 // 每次用户和后端交互时（访问链接，ajax），刷新cookie有效期
    resave: false,                  // 是否每次存储session
    saveUninitialized: false,       // 初始化
    store: new connectMongo({url: "mongodb://localhost:27017/blog"}),  // 将session存到数据库中
})
