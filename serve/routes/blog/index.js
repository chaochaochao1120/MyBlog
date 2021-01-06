var express = require('express');
var router = express.Router();

// 引入数据库
var article = require("../../db/article");
var articleInfo = require("../../db/articleInfo");

// 文章信息接口
router.post("/articleInfo", (req, res) => {
    articleInfo.findOne({}, {_id: 0, __v: 0})
        .then(data => {
            res.send({
                code: 0,
                msg: "请求成功",
                data,
            });
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null
            });
        });
});

// 热门文章接口
router.post("/articleHot", (req, res) => {
    let {num} = req.body;
    article.find({}, {__v: 0}, {sort: {pv: -1}, skip: 0, limit: num})  // 访问数据库（find方法）
        .then(data => {
            data.forEach(item => {
                item.content = "";
            })
            res.send({
                code: 0,
                data,
            });
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null,
            });
        });
});

// 获取文章显示
router.post("/getArticleShow", (req, res) => {
    let {skip, limit, tag} = req.body;
    let temp = tag?{tag}:{}; // 有tag，根据tag查询，没有tag，查询所有。
    article.find(temp, {_v: 0}, {skip, limit, sort: {pv: -1}})
        .then(data => {
            res.send({
                code: 0,
                data,
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null,
            });
        })
})

// 根路由
router.get('/', function (req, res, next) {
    res.send("1111");
});

module.exports = router;
