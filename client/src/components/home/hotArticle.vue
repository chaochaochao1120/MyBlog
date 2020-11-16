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
                        background-color: pink;
                        box-sizing: border-box;
                        padding-top: 50px;

                        .pic{
                            width: 100%;
                            height: 244px;
                            background-color: cadetblue;

                            .img{
                                width: 100%;
                                height: 100%;
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>