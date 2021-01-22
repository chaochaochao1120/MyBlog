var express = require("express");
var router = express.Router();
var user = require("../../db/user");

// 登录
router.post("/", (req, res) => {
    // 判断是否已经登录
    if (req.session.login) {
        res.send({
            code: 2,
            data: "已经登录，请退出后在登录"
        })
        return;
    }

    let {userName, password} = req.body;

    // 判断这四个字段传过来是否为空
    if (!userName || !password) {
        res.send({
            code: 1,
            data: "数据无效，请检查后再登录",
        })
        return;
    }

    // 验证用户名和密码是否符合格式要求
    if (!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{5,20}$/.test(userName) || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/.test(password)) {
        res.send({
            code: 2,
            data: "用户名和密码不符合格式要求"
        })
        return;
    }

    user.findOne({userName}).then(data => {
        if(data){
            if(data.password === password){
                // 写入session
                req.session.login = data;

                // 返回前端
                res.send({
                    code: 0,
                    data: "登录成功"
                })
            }else{
                res.send({
                    code: 2,
                    data: "密码错误"
                })
            }
        }else{
            res.send({
                code: 1,
                data: "用户名不存在"
            })
        }
    })
});

// 判断是否登录
router.post("/ifLogin", (req, res) => {
    let data = req.session.login;
    let resData = false;
    if(data){
        delete data.password;
        delete data.__v;
        resData = data;

        res.send({
            code: 0,
            data: resData,
        })
    }else{
        res.send({
            code: 1,
            data: "未登录",
        })
    }
})

module.exports = router;
