var express = require("express");
var router = express.Router();
var svgCaptcha = require("svg-captcha");
var user = require("../../db/user");

// 获取验证码接口
router.post("/getCheckCode", (req, res) => {
    let captcha = svgCaptcha.create();
    // 将正确的验证码保存到session中
    req.session.registerCheckCode = captcha.text;
    res.send({
        code: 0,
        data: captcha.data,
    })
});

// 判断验证码接口
router.post("/judgeCheckCode", (req, res) => {
    var {checkCode} = req.body;
    // 判断输入的验证码是否与保存到session中的验证码一致
    if(checkCode.toLocaleLowerCase() === req.session.registerCheckCode.toLocaleLowerCase()){
        res.send({
            code: 0,
            data: "验证成功",
        })
    }else{
        res.send({
            code: 1,
            data: "验证码错误"
        })
    }
});

// 判断用户名是否重复
router.post("/judgeUserName", (req, res) => {
    let {userName} = req.body;
    user.findOne({
        userName: userName
    }).then(data => {
        if(data){
            res.send({
                code: 3,
                data: "用户名已存在",
            })
        }else{
            res.send({
                code: 0,
                data: "用户名可用"
            })
        }
    }).catch(err => {
        res.send({
            code: 4,
            data: "服务器错误"
        })
    })
})

// 注册接口
router.post("/", (req, res) => {
    console.log(req.body);
    let {userName, password, checkPassword, checkCode} = req.body;

    // 判断这四个字段传过来是否为空
    if(!userName || !password || !checkPassword || !checkCode){
        res.send({
            code: 1,
            data: "数据无效，请检查后再注册",
        })
        return;
    }

    // 验证码两次密码是否一致
    if(password !== checkPassword){
        res.send({
            code: 2,
            data: "两次密码不一致",
        })
        return;
    }

    // 后端再次验证验证码
    if(!checkCode || checkCode.toLocaleLowerCase() !== req.session.registerCheckCode.toLocaleLowerCase()){
        res.send({
            code: 3,
            data: "验证码错误"
        })
        return;
    }

    // 验证用户名和密码是否符合格式要求
    if(!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{5,10}$/.test(userName) || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/.test(password)){
        res.send({
            code: 2,
            data: "用户名和密码不符合格式要求"
        })
        return;
    }

    // 判断用户名是否重复
    user.findOne({
        userName: userName
    }).then(data => {
        if(data){
            res.send({
                code: 3,
                data: "用户名已存在",
            })
        }else{
            user.create({userName, password}).then(data => {
                res.send({
                    code: 0,
                    data: "注册成功"
                })
            }).catch(err => {
                res.send({
                    code: 4,
                    data: "服务器错误"
                })
            })
        }
    }).catch(err => {
        res.send({
            code: 4,
            data: "服务器错误"
        })
    })
})

module.exports = router;
