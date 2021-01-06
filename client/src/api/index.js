import axios from "axios";

// 配置默认的参数
axios.defaults.baseURL = 'http://localhost:3000'; //默认访问地址
axios.defaults.withCredentials = true; //跨域允许携带cookie
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; //设置POST请求格式

export default {
    // ********************************************博客页面********************************************
    // 获取文章分类
    articleInfo(){
        return axios.post("/blog/articleInfo");
    },

    // 获取热门文章接口
    articleHot(num = 5){
        return axios.post("/blog/articleHot", {num});
    },

    // 获取文章(每次请求五篇文章)
    getArticle: (function () {
        let skip = 0;       // 从第几篇文章开始
        let limit = 5;      // 请求五篇
        return function (index = 0, ifFresh = false) {
            if(ifFresh){
                skip = 0;
                limit = 5;
            }
            let tag = ["", "HTML5&CSS3", "JavaScript","NodeJS","Vue","其他"][index];
            let data = {skip, limit, tag};
            skip += limit;
            return axios.post("/blog/getArticleShow", data)
        }
    })(),

    // 获取验证码
    getCheckCode(){
        return axios.post("/register/getCheckCode");
    },

    // ********************************************注册********************************************
    // 判断验证码是否正确
    judgeCheckCode(checkCode){
        return axios.post("/register/judgeCheckCode", {checkCode});
    },

    // 判断用户名是否存在
    judgeUserName(userName){
        return axios.post("/register/judgeUserName", {userName});
    },

    // 注册提交
    submitRegister(data){
        return axios.post("register", data);
    },
};
