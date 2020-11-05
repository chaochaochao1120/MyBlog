<!--
    blog侧边栏
-->
<template>
    <div class="sidebar">
        <!--搜索-->
        <div :class="['search',{'fixed': ifFixed}]">
            <div class="search-main">
                <input type="text" v-model="searchInput" placeholder="输入关键字搜索">
                <i class="el-icon-search"></i>
            </div>
            <ul class="search-article" @mouseleave="handleMouseLeave">
                <li v-for="(item, index) in getArticleTags" :key="item" @mouseenter="handleMouseEnter(index)">
                    <router-link :to="'/blog/'+index">
                        {{item}}
                    </router-link>
                </li>
                <div :style="{top: handleIndex * 40 +'px'}"></div>
            </ul>
        </div>
        <!--热门文章-->
        <div class="hot">
            <h1>热门文章</h1>
            <ul>
                <li v-for="(item, index) in articleHot" :key="item._id">
                    <i>{{index + 1}}</i>
                    <a :href="item._id">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <!--置顶推荐-->
        <div class="recommend">
            <h1>置顶推荐</h1>
            <ul>
                <li v-if="!!getArticleRecommend.title">
                    <i>{{1}}</i>
                    <a :href="getArticleRecommend._id">{{getArticleRecommend.title}}</a>
                </li>
            </ul>
        </div>
        <!--最近访客-->
        <div class="visitor">
            <h1>最近访客</h1>
            <ul class="people">
                <li v-for="item in visitorData" :style='{"background-image":"url("+item.portrait+")"}'>
                    <p>{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        data() {
            return {
                searchInput: '',    // 搜索内容
                articleTags: [],    // 文章分类
                handleIndex: this.$route.params.id * 1,   // 搜索框中鼠标移动的位置
                articleHot: [],    // 热门文章
                // 最近访问人数据
                visitorData: [
                    {
                        name: "发送到发送到",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "地方个梵蒂冈梵蒂冈地方",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈沙发斯蒂芬哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈规范化股份哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                    {
                        name: "哈哈哈",
                        portrait: 'http://localhost:3000/img/defaultAvatar.jpg'
                    },
                ],
                ifFixed: false,  // 搜索盒子是否有fixed类名
            }
        },
        methods: {
            // 搜索框中，鼠标移入跟随鼠标移动
            handleMouseEnter(index) {
                this.handleIndex = index;
            },
            // 鼠标移出搜索框
            handleMouseLeave() {
                this.handleIndex = this.$route.params.id;
            },
            // 获取文章分类
            getArticleInfo() {
                this.Api.articleInfo()
                    .then(res => {
                        // console.log(res);
                        this.articleTags = res.data.data.tags;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            // 获取热门文章
            getArticleHot() {
                this.Api.articleHot()
                    .then(res => {
                        // console.log(res);
                        this.articleHot = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            // 滚轮移动改变ifFixed
            handleWindowScroll(){
                let scrollTop = document.documentElement.scrollTop;
                if(scrollTop >= 800){
                    this.ifFixed = true;
                }else{
                    this.ifFixed = false;
                }
            }
        },
        computed: {
            getArticleTags() {
                return ["全部文章", ...this.articleTags];
            },
            // 获取置顶推荐
            getArticleRecommend(){
                return this.articleHot[0] || {};
            }
        },

        created() {
            this.getArticleInfo();
            this.getArticleHot();
        },

        mounted() {
            this.handleWindowScroll();
            // 监听window滚动事件
            window.addEventListener("scroll", this.handleWindowScroll);
        },

        destroyed() {
            // 离开当前路由就不需要这个事件了
            window.removeEventListener("scroll", this.handleWindowScroll);
        },
    }
</script>

<style scoped lang="less">
    .sidebar{
        width: 100%;
        height: 100%;
        overflow: hidden;

        /*搜索*/
        .search {
            width: 100%;
            background-color: #FFF;
            -moz-user-select:none;/*火狐*/
            -webkit-user-select:none;/*webkit浏览器*/
            -ms-user-select:none;/*IE10*/
            -khtml-user-select:none;/*早期浏览器*/
            user-select:none;

            .search-main {
                width: 100%;
                height: 80px;
                padding: 20px;
                box-sizing: border-box;
                background-color: grey;
                position: relative;

                input {
                    width: 220px;
                    height: 40px;
                    border: 0;
                    border-radius: 20px;
                    outline: none;
                    padding: 0 20px;
                    font-size: 14px;
                }

                i {
                    position: absolute;
                    top: 33px;
                    right: 33px;
                    font-weight: 900;

                    &:hover {
                        cursor: pointer;
                        color: #6bc30d;
                    }
                }
            }

            .search-article {
                width: 100%;
                height: 260px;
                margin-top: 20px;
                box-sizing: border-box;
                position: relative;
                padding: 0 20px;

                li {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    padding: 0 35px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #f8f9f7;
                    position: relative;
                    z-index: 1;

                    a {
                        width: 100%;
                        height: 100%;
                        display: block;
                        color: #787977;
                    }
                }

                div {
                    width: 100%;
                    height: 40px;
                    border-right: 5px solid black;
                    background-color: rgba(0, 0, 0, .05);
                    box-sizing: border-box;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: top 0.3s;
                }
            }
        }

        .fixed{
            position: fixed;
            width: 300px;
            z-index: 9;
            animation: searchMove .7s 1;
            animation-fill-mode: forwards;
        }
        @keyframes searchMove{
            0%{
                top: -500px;
            }
            40%{
                top: 100px;
            }
            80%{
                top: 70px;
            }
            100%{
                top: 80px;
            }
        }

        /*热门文章、置顶推荐*/
        .hot, .recommend{
            width: 100%;
            background-color: #fff;
            margin-top: 20px;
            overflow: hidden;

            h1{
                margin: 10px 20px;
                padding: 5px;
                box-sizing: border-box;
                border-bottom: 1px solid #e8e9e7;
                font-size: 18px;
                color: #383937;
                font-weight: 400;
            }

            ul{
                padding: 0 20px 10px;
                box-sizing: border-box;

                li{
                    line-height: 32px;
                    overflow: hidden;
                    word-wrap: normal!important;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    i{
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        border-radius: 50px;
                        text-align: center;
                        line-height: 22px;
                        background-color: #edefee;
                        font-size: 14px;
                        font-family: SourceCodeProRegular,Menlo,Monaco,Consolas,"Courier New",monospace,'Helvetica Neue',Arial,sans-serif;
                        position: relative;
                        bottom: 1px;
                    }
                    &:nth-child(1) i{
                        background-color: #e24d46;
                        color: #fff;
                    }

                    &:nth-child(2) i{
                        background-color: #2ea7e0;
                        color: #fff;
                    }

                    &:nth-child(3) i{
                        background-color: #6bc30d;
                        color: #fff;
                    }

                    a{
                        margin-left: 10px;
                        color: #787977;
                        font-size: 14px;

                        &:hover{
                            color: #6bc30d;
                            border-bottom: 1px solid #6bc30d;
                        }
                    }
                }
            }
        }

        /*最近访客*/
        .visitor{
            width: 100%;
            background-color: #fff;
            margin-top: 20px;
            overflow: hidden;

            h1{
                margin: 10px 20px;
                padding: 5px;
                box-sizing: border-box;
                border-bottom: 1px solid #e8e9e7;
                font-size: 18px;
                color: #383937;
                font-weight: 400;
            }

            .people{
                width: 100%;
                height: 210px;
                padding: 0 20px;
                box-sizing: border-box;

                li{
                    width: 23%;
                    height: 60px;
                    float: left;
                    margin: 1%;
                    background-position: center top;
                    background-size: cover;
                    position: relative;

                    p{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space:nowrap;
                        margin: 0;
                        width: 100%;
                        height: 12px;
                        line-height: 12px;
                        text-align: center;
                        color: #fff;
                        font-size: 12px;
                        position: absolute;
                        bottom: 5px;
                        background-color: rgba(0,0,0,.2);
                    }
                }
            }
        }
    }
</style>