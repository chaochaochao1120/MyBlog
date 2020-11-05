var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var session = require("express-session");
var connectMongo = require("connect-mongo")(session);

// 链接数据库
mongoose.connect("mongodb://localhost:27017/blog", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch(() => {
        console.log("数据库连接失败");
    });

// app实例
var app = express();

// 中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 允许跨域
app.use((req, res, next) => {
    res.header({
        // 允许携带Cookie
        "Access-Control-Allow-Credentials": true,
        //设置允许跨域的域名，*代表允许任意域名跨域
        "Access-Control-Allow-Origin": req.headers.origin || "*",
        //允许的header类型
        "Access-Control-Allow-Headers": "Content-Type",
        //跨域允许的请求方式
        "Access-Control-Allow-Methods": "DELETE,PUT,POST,GET,OPTIONS",
        // 内容格式
        "Content-Type": "application/json; charset = utf-8"
    });
    if (req.method === 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
});

// 设置session
app.use(session({
    secret: "lzc",                  // 秘钥，一个字符，用于加密，可以随便写
    cookie: {maxAge: 30*60*1000},   // 给前端这只cookie保存时间
    rolling: false,                 // 每次用户和后端交互时（访问链接，ajax），刷新cookie有效期
    resave: false,                  // 是否每次存储session
    saveUninitialized: false,       // 初始化
    store: new connectMongo({url: "mongodb://localhost:27017/blog"}),  // 将session存到数据库中
}));

// 博客路由
app.use('/blog', require('./routes/blog'));

app.use('/register', require('./routes/register'));

module.exports = app;