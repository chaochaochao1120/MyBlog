var express = require("express");
var router = express.Router();
var message = require("../../db/message")

// 提交留言接口
router.post("/commit", (req, res) => {
    let {user, content} = req.body;

    if (!user || !content) {
        res.send({
            code: 2,
            data: "数据错误！"
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

    message.find({}, {}, {skip, limit, sort: {date: -1}}).populate("user", {_id: 1, userName: 1, photo: 1}).populate("children.user", {_id: 1, userName: 1, photo: 1})
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

// 回复留言
router.post("/replyMessage", (req, res) => {
    let {parentId, user, content, parentUserName} = req.body;
    if (!parentId || !user || !content || !parentUserName) {
        res.send({
            code: 1,
            data: "数据错误！"
        })
        return;
    }
    message.findById(parentId).then(data => {
        if (data) {
            message.updateOne(
                {_id: parentId},
                {$push: {'children': {user, content, parentUserName}}}
            ).then(data => {
                res.send({
                    code: 0,
                    data: "回复成功！"
                })
            })
        } else {
            res.send({
                code: 2,
                data: "当前回复的留言已删除！"
            })
        }
    }).catch(() => {
        res.send({
            code: 4,
            data: "服务器错误！"
        })
    })

})

module.exports = router;
