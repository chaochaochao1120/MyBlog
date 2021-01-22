var express = require("express");
var router = express.Router();
var message = require("../../db/message")

// 提交留言接口
router.post("/commit", (req, res) => {
    let {user, content} = req.body;

    if (!user || !content) {
        res.send({
            code: 2,
            data: "数据错误"
        })
    }

    message.create({
        user,
        content
    }).then(() => {
        res.send({
            code: 0,
            data: "留言成功！"
        })
    }).catch(() => {
        res.send({
            code: 4,
            data: "服务器错误！"
        })
    })
})

// 获取留言列表
router.post("/getMessageList", (req, res) => {
    let {skip, limit} = req.body;

    message.find({}, {}, {skip, limit, sort: {date: -1}}).populate("user")
        .then(data => {
            res.send({
                code: 0,
                data,
                message: "请求成功！"
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                data: [],
                message: "服务器错误！"
            })
        })
})

module.exports = router;
