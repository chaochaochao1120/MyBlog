<template>
    <div class="articleShow">
        <section v-for="item in articleList">
            <!-- 标题and日期 -->
            <div class="title">
                <div class="name">
                    <span>【{{item.type}}】</span>
                    <router-link to="">{{item.title}}</router-link>
                </div>
                <div class="date">
                    <div class="day">{{parseInt(item.date.split("T")[0].split("-")[2])}}</div>
                    <div class="yearMouth">
                        <span class="mouth">{{parseInt(item.date.split("T")[0].split("-")[1]) + "月"}}</span>
                        <span class="year">{{parseInt(item.date.split("T")[0].split("-")[0])}}</span>
                    </div>
                </div>
            </div>
            <!-- 内容 -->
            <div class="content">
                <a href="#" :style="{backgroundImage:'url(http://localhost:3000'+item.surface+')'}"></a>
                {{item.content}}
            </div>
            <el-divider content-position="left"><a href="" class="read-more">继续阅读</a></el-divider>
            <!-- 标签and继续阅读 -->
            <div class="footer">
                <div class="tag">
                    <img src="../../assets/img/tags.png" alt="">
                    <span class="tag-info">{{item.tag}}</span>
                </div>
                <div class="re">
                    <div class="read">
                        <i class="el-icon-view"></i>
                        <span>{{item.pv}}</span>
                    </div>
                    <div class="comment">
                        <i class="el-icon-chat-dot-round"></i>
                        <span>{{item.comment.length}}</span>
                    </div>
                </div>
            </div>
        </section>
        <div class="loading" v-if="ifLoading"></div>
        <p class="no-more" v-if="ifNoMore">哼╭(╯^╰)╮，我也是有底线的！！！</p>
    </div>
</template>

<script>
    export default {
        name: "articleShow",
        data() {
            return{
                articleList: [],    // 文章列表
                ifLoading: false,   // 是否显示loading图
                ifNoMore: false,    // 是否显示没有了
            }
        },
        methods: {
            // 文章列表初始化
            getArticleInit(){
                this.ifLoading = this.ifNoMore = false;
                this.Api.getArticle(this.id, true).then(res => {
                    // console.log(res.data.data);
                    this.articleList = res.data.data;
                }).catch(err => {
                    console.log(err);
                })
            },

            // 滚动高+可视区高>=文档高-200时，继续请求文章列表
            handleScroll(){
                if (this.ifNoMore || this.ifLoading) {return;}
                // 文档高
                let c = document.documentElement.offsetHeight;
                // 滚动高
                let a = document.documentElement.scrollTop;
                // 可视区高
                let b = document.documentElement.clientHeight;
                if (a + b >= c - 200) {
                    this.ifLoading = true;
                    this.Api.getArticle(this.id, false).then(res => {
                        // console.log(res.data.data);
                        this.ifLoading = false;
                        if (res.data.data.length) {
                            this.articleList.push(...res.data.data);
                        }else{
                            this.ifNoMore = true;
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }else{

                }
            },
        },
        computed: {
            // 路由参数
            id(){
                return this.$route.params.id;
            }
        },
        watch: {
            // 监听路由参数改变获取文章列表
            id(){
                this.getArticleInit();
                document.documentElement.scrollTop = 0;
            }
        },
        mounted() {
            // 实例挂载后获取文章
            this.getArticleInit();

            // 监听滚轮位置
            window.addEventListener("scroll", this.handleScroll);
        },
        // 销毁滚动事件
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped lang="less">
    .articleShow{
        width: 100%;

        section{
            width: 100%;
            height: 380px;
            background-color: #fff;
            margin-bottom: 20px;
            padding: 20px 25px;
            box-sizing: border-box;
            position: relative;
            animation: show 0.9s 1;
            animation-fill-mode: forwards;

            @keyframes show{
                from{opacity: 0.5; transform: scale(0.5)}
                to{opacity: 1; transform: scale(1)}
            }

            &:nth-child(1)::before{
                content: "置顶";
                position: absolute;
                height: 20px;
                line-height: 20px;
                text-align: center;
                width: 74px;
                background-color: #ff5722;
                color: #fff;
                transform: rotate(-45deg);
                left: -18px;
                top: 9px;
            }

            /* 标题and日期*/
            .title{
                width: 100%;
                height: 50px;
                position: relative;

                .name{
                    font-weight: bold;
                    color: #2ea7e0;
                    width: 85%;
                    line-height: 48px;
                    border-bottom: 1px solid #e8e9e7;

                    span{
                        margin-right: 10px;
                    }

                    a{
                        font-size: 18px;
                        color: #212220;
                    }

                    a:hover{
                        color: #6bc30d;
                    }
                }

                .date{
                    width: 80px;
                    height: 71px;
                    position: absolute;
                    top: -15px;
                    right: 10px;

                    .day{
                        text-align: center;
                        font-weight: 700;
                        font-size: 40px;
                        color: #6bc30d;
                    }

                    .yearMouth{
                        color: #989997;

                        .mouth{
                            float: left;
                        }

                        .year{
                            float: right;
                        }
                    }
                }
            }

            /* 内容*/
            .content{
                width: 100%;
                height: 220px;
                padding: 20px 30px 0 0;
                box-sizing: border-box;
                font-size: 14px;

                a{
                    width: 300px;
                    height: 180px;
                    float: left;
                    margin-right: 20px;
                    background: center/cover;
                }
            }

            /*继续阅读*/
            .read-more{
                font-weight: bold;
            }

            .read-more:hover{
                color: #6bc30d;
            }

            .footer{
                img{
                    width: 17px;
                    height: 17px;
                    vertical-align: middle;
                }

                .tag{
                    float: left;

                    .tag-info{
                        margin-left: 10px;
                        font-size: 14px;
                        background-color: #f1f2f0;
                        padding: 0 8px;
                        box-sizing: border-box;
                        color: #787977;;
                    }

                    .tag-info:hover{
                        background-color: #6bc30d;
                        color: #fff;
                    }
                }

                .re{
                    float: right;
                    margin-right: 20px;

                    .read{
                        display: inline-block;
                        margin-right: 20px;

                        span{
                            font-size: 14px;
                            margin-left: 5px;
                            color: #787977;;
                        }
                    }

                    .comment{
                        display: inline-block;

                        span{
                            font-size: 14px;
                            margin-left: 5px;
                            color: #787977;;
                        }
                    }
                }
            }
        }

        .loading{
            width: 380px;
            height: 30px;
            background-image: url("../../assets/img/loading.gif");
            background-position: 50%;
            background-size: 50%;
            background-repeat: no-repeat;
            margin: 0 auto 16px;
        }

        .no-more{
            height: 30px;
            line-height: 30px;
            /*background-color: #fff;*/
            color: #999;
            text-align: center;
        }
    }
</style>
