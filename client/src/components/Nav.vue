<!--
    导航栏
-->
<template>
    <div id="nav">
        <div class="content">
            <!--logo-->
            <div class="logo">
                <span>Mr.lzc</span>
            </div>
            <!--登录注册-->
            <div class="login-reg">
                <el-button type="primary" size="small">登录</el-button>
                <el-button type="success" size="small">注册</el-button>
            </div>
            <!--导航栏-->
            <div class="nav">
                <ul :class="'list' + whichActive">
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/blog/0">博客</router-link></li>
                    <li><router-link to="/message">留言</router-link></li>
                    <li><router-link to="/diary">日记</router-link></li>
                    <li><router-link to="/link">友链</router-link></li>
                    <li><router-link to="/about">关于</router-link></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
            return {
                // 路由列表
                routerList: ["Home", "Blog", "Message", "Diary", "Link", "About"]
            }
        },
        computed: {
            whichActive(){
                let index = this.routerList.indexOf(this.$route.name);
                return index + 1;
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/css/font.css";
    #nav{
        width: 100%;
        height: 60px;
        background-color: #FFF;
        position: fixed;
        top: 0;
        z-index: 999;

        .content{
            width: 100%;
            max-width: 1380px;
            height: 100%;
            margin: 0 auto;
            line-height: 60px;
            padding: 0 50px;
            box-sizing: border-box;
            position: relative;

            .logo{
                float: left;
                width: 90px;
                height: 60px;

                span{
                    font-size: 45px;
                    font-family: BarbaraHand;
                }
            }

            .nav{
                float: right;
                width: 576px;
                height: 100%;
                position: absolute;
                right: 20%;
                
                ul{
                    display: flex;

                    li{
                        flex: 1;
                        text-align: center;
                        position: relative;
                        margin: 0 5px;

                        &::after{
                            content: "";
                            width: 0px;
                            height: 2px;
                            background-color: #6bc30d;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: 0 auto;
                            transition: width 0.5s;
                        }

                        a{
                            display: block;
                            font-size: 15px;
                            width: 100%;
                            height: 100%;
                        }

                    }

                    li:hover{
                        cursor: pointer;
                        a{
                            color: #6bc30d;
                        }
                        &::after{
                            width: 100%;
                        }
                    }

                    &.list1 li:nth-child(1),
                    &.list2 li:nth-child(2),
                    &.list3 li:nth-child(3),
                    &.list4 li:nth-child(4),
                    &.list5 li:nth-child(5),
                    &.list6 li:nth-child(6){
                        a{
                            color: #6bc30d;
                        }

                        &::after{
                            width: 100%;
                        }
                    }

                }
            }

            .login-reg{
                float: right;
            }
        }
    }
</style>