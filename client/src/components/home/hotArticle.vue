<template>
    <div class="hotarticle">
        <div class="content">
            <div class="show">
                <div class="hotArticle-titlt">
                    <div class="title-content">
                        <h1>热门文章</h1>
                        <p>很想给你写封信,告诉你这里的天气.
                            昨夜的那场电影,还有我的心情.
                        </p>
                    </div>
                    <div class="article">
                        <div class="once" v-for="item in article">
                            <div class="pic">
                                <div class="img" :style="{backgroundImage:'url(http://localhost:3000'+item.surface+')'}"></div>
                                <router-link to="/" class="link">
                                    <i class="el-icon-link"></i>
                                </router-link>
                            </div>
                            <div class="detailed">
                                <h4><router-link to="/">{{item.title}}</router-link></h4>
                                <div class="date">{{`${item.date.split("T")[0].split("-")[0]}年${item.date.split("T")[0].split("-")[1]}月${item.date.split("T")[0].split("-")[2]}日`}}</div>
                                <p>{{item.content}}</p>
                                <router-link class="read-more" to="/">阅读更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hotArticle",
        data(){
            return {
                article: [],    // 热门文章
            }
        },
        methods: {

        },

        mounted() {
            // 获取3篇热门文章
            this.Api.articleHot(3).then(res => {
                // console.log("热门文章", res.data.data);
                this.article = res.data.data
            }).catch(err => {
                console.log(err);
            });
        }
    }
</script>

<style scoped lang="less">
    .hotarticle{
        position: relative;
        z-index: 4;
        width: 100%;
        height: 839px;
        box-sizing: border-box;
        padding: 100px 0;
        background-color: #fff;

        .content{
            width: 100%;
            height: 100%;

            .show{
                width: 1170px;
                height: 100%;
                margin: 0 auto;

                .hotArticle-titlt{
                    width: 100%;
                    height: 136px;

                    .title-content{
                        width: 217px;
                        height: 100%;
                        margin: 0 auto;
                        text-align: center;

                        h1{
                            font-size: 32px;
                            padding-bottom: 30px;
                            position: relative;
                            font-weight: 500;
                            margin: 0;
                            -webkit-tap-highlight-color: rgba(0,0,0,0);

                            &::after{
                                position: absolute;
                                width: 50px;
                                height: 2px;
                                content: "";
                                left: 50%;
                                margin-left: -25px;
                                bottom: -1px;
                                background: #00c2ff;
                            }
                        }

                        p{
                            margin-top: 20px;
                            line-height: 22px;
                            color: #888;
                            font-size: 14px;
                        }
                    }
                }

                .article{
                    width: 100%;
                    height: 503px;
                    display: flex;
                    justify-content: space-around;

                    .once{
                        width: 370px;
                        height: 100%;
                        box-sizing: border-box;
                        padding-top: 50px;

                        .pic{
                            position: relative;
                            width: 100%;
                            height: 244px;
                            background-color: cadetblue;
                            overflow: hidden;

                            &::before{
                                content: "";
                                width: 100%;
                                height: 244px;
                                position: absolute;
                                background: rgba(255,255,255,.51);
                                top: -244px;
                                left: 0;
                                transition: top .4s;
                            }

                            &:hover{
                                &::before{
                                    top: 0;
                                }

                                .link{
                                    top: 100px;
                                }
                            }

                            .img{
                                width: 100%;
                                height: 100%;
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                            }

                            .link{
                                width: 40px;
                                height: 40px;
                                background: #333;
                                position: absolute;
                                top: -40px;
                                left: 165px;
                                color: #fff;
                                font-size: 20px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                transition: top .4s;
                            }
                        }

                        .detailed{
                            width: 100%;
                            height: 209px;
                            box-sizing: border-box;
                            padding: 30px 15px;
                            background-color: #faf9f9;
                            font-size: 14px;

                            h4{

                                margin: 0 0 10px 0;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }

                            div{
                                color: #bbb;
                                font-size: 12px;
                                margin-bottom: 15px;
                            }

                            p{
                                color: #999;
                                height: 55px;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                overflow: hidden;
                                margin-bottom: 15px;
                            }

                            .read-more{
                                color: #29b6f6;
                                transition: color .3s;

                                &:hover{
                                    color: black;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
