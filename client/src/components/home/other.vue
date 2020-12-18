<template>
    <div class="other">
        <div class="section1">
            <ul>
                <li><router-link to="/About">关于</router-link></li>
                <li><router-link to="/diary">日记</router-link></li>
            </ul>
        </div>
        <div class="section2">
            <h1>次元使者</h1>
            <p>爱好游戏，动漫。闲来无事喜欢在一些不健康的场所虚度光阴，撸起代码就会废寝忘食。</p>
        </div>
        <div class="section3">
            <div class="footer-top">
                <div class="container">
                    <div class="layui-row">
                        <div class="layui-col-xs12">
                            <h2>Mr.lzc</h2>
                            <p>一个不知名的程序员</p>
                            <router-link to="About">About Me</router-link>
                        </div>
                        <div class="layui-col-xs12">
                            <h2>相关连接</h2>
                            <ul>
                                <li>
                                    <router-link to="blog/0"><i class="el-icon-notebook-1"></i>博文</router-link>
                                </li>
                                <li>
                                    <router-link to="message"><i class="el-icon-chat-dot-round"></i>留言</router-link>
                                </li>
                                <li>
                                    <router-link to="/"><i class="el-icon-link"></i>资源</router-link>
                                </li>
                                <li>
                                    <router-link to="diary"><i class="el-icon-document"></i>日记</router-link>
                                </li>
                                <li>
                                    <router-link to="/"><i class="el-icon-edit"></i>归档</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="layui-col-xs12">
                            <h2>联系我</h2>
                            <ul>
                                <li><i class="el-icon-notebook-1"></i>地址：北京市房山区阎村镇</li>
                                <li><i class="el-icon-notebook-1"></i>QQ：604043484</li>
                                <li><i class="el-icon-notebook-1"></i>邮箱：604043484@qq.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "other",
        data(){
            return{

            }
        },
    }
</script>

<style scoped lang="less">
    .other{
        position: absolute;
        z-index: 4;
        width: 100%;
        height: 890px;
        background: url("../../assets/img/bgc2.jpg") center center/cover fixed;

        .section1{
            width: 100%;
            height: 270px;
            box-sizing: border-box;
            padding: 100px 0;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                z-index: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.5);
            }

            ul{
                width: 445px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                z-index: 4;

                li{
                    width: 200px;
                    height: 46px;
                    border: 1px solid #b4b4b4;
                    text-align: center;
                    line-height: 46px;
                    position: relative;
                    overflow: hidden;

                    &:before{
                        content: "";
                        width: 200px;
                        height: 46px;
                        background-color: #6bc30d;;
                        position: absolute;
                        z-index: 0;
                        top: 0;
                        left: -200px;
                        transition: left .5s;
                    }

                    &:hover{
                        &:before{
                            left: 0;
                        }
                    }

                    a{
                        display: block;
                        color: #fff;
                        position: relative;
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        font-size: 14px;
                    }
                }
            }
        }

        .section2{
            width: 100%;
            height: 276px;
            background-color: #fff;
            padding-top: 85px;
            box-sizing: border-box;

            h1{
                font-weight: 400;
                font-size: 30px;
                margin: 0;
                text-align: center;
            }

            p{
                text-align: center;
                font-size: 14px;
                line-height: 24px;
                margin-top: 20px;
            }
        }

        .section3{
            width: 100%;
            height: 344px;
            background-color: rgb(35, 35, 40);

            .footer-top{
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 60px 0 90px;

                .container{
                    height: 100%;
                    width: 90%;
                    margin: 0 auto;

                    .layui-row{
                        width: 100%;
                        height: 100%;

                        .layui-col-xs12{
                            width: 33.3333333333%;
                            height: 100%;
                            float: left;

                            &:nth-child(1){
                                h2{
                                    width: 100%;
                                    margin: 0;
                                    padding: 0;
                                    color: #fff;
                                    font-family: BarbaraHand;
                                    font-size: 3em;
                                    font-weight: 400;
                                }
                                p{
                                    width: 100%;
                                    color: #f8f9f7;
                                    letter-spacing: 10px;
                                    margin: 20px 0;
                                }
                                a{
                                    margin-top: 20px;
                                    display: inline-block;
                                    height: 38px;
                                    line-height: 38px;
                                    padding: 0 18px;
                                    background-color: rgba(30,144,255,1);
                                    color: #fff;
                                    white-space: nowrap;
                                    text-align: center;
                                    font-size: 14px;
                                    border: none;
                                    border-radius: 2px;
                                    cursor: pointer;

                                    &:hover{
                                        background-color: rgba(30,144,255,0.8);
                                    }
                                }
                            }

                            &:nth-child(2){
                                h2{
                                    color: #fff;
                                    font-size: 18px;
                                    margin-bottom: 30px;
                                    font-weight: normal;
                                    text-transform: uppercase;
                                }

                                ul{
                                    li{
                                        float: left;
                                        width: 50%;
                                        margin-bottom: 10px;
                                        color: #fff;

                                        a{
                                            color: #fff;
                                            font-size: 15px;

                                            i{
                                                margin-right: 10px;
                                            }

                                            &:hover{
                                                color: rgb(107, 195, 13);

                                                i{
                                                    color: rgb(107, 195, 13)
                                                }
                                            }
                                        }


                                    }
                                }
                            }

                            &:nth-child(3){
                                h2{
                                    color: #fff;
                                    font-size: 18px;
                                    margin-bottom: 30px;
                                    font-weight: normal;
                                    text-transform: uppercase;
                                }

                                ul {
                                    li {
                                        width: 50%;
                                        margin-bottom: 10px;
                                        color: #fff;
                                        font-size: 15px;

                                        i{
                                            margin-right: 10px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
