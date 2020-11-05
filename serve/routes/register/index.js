var express = require("express");
var router = express.Router();
var svgCaptcha = require("svg-captcha")
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
            data: "验证失败"
        })
    }
})

module.exports = router;