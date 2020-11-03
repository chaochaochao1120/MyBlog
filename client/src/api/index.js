import axios from "axios";

// 配置默认的参数
axios.defaults.baseURL = 'http://localhost:3000'; //默认访问地址
axios.defaults.withCredentials = true; //跨域允许携带cookie
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; //设置POST请求格式

export default {
    // 文章分类
    articleInfo(){
        return axios.post("/blog/articleInfo");
    },

    // 热门文章接口
    articleHot(){
        return axios.post("/blog/articleHot");
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
    })()
};