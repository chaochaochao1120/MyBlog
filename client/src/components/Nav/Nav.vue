<!--
    导航栏
-->
<template>
    <div>
        <div id="nav">
            <div class="content">
                <!--logo-->
                <div class="logo">
                    <span>Mr.lzc</span>
                </div>
                <!--登录注册-->
                <div class="login-reg">
                    <div v-if="LoginIn">
                        <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
                            <div class="block">
                                <img class="user-photo" :src="loginInfo.photo" alt="">
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
                                <el-dropdown-item command="quit" class="quit">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div v-if="loginOut">
                        <el-button type="primary" size="small" @click="ifShowLogin = true">登录</el-button>
                        <el-button type="success" size="small" @click="isShowRegister = true">注册</el-button>
                    </div>
                </div>
                <!--导航栏-->
                <div class="nav">
                    <ul :class="'list' + whichActive">
                        <li>
                            <router-link to="/">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/blog/0">博客</router-link>
                        </li>
                        <li>
                            <router-link to="/message">留言</router-link>
                        </li>
                        <li>
                            <router-link to="/diary">日记</router-link>
                        </li>
                        <!--<li><router-link to="/link">友链</router-link></li>-->
                        <li>
                            <router-link to="/about">关于</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <login
                :dialogVisible="ifShowLogin"
                @handleCloseLogin="handleCloseLogin"
        ></login>
        <register
                :dialogVisible="isShowRegister"
                @handleCloseRegister="handleCloseRegister"
        ></register>
    </div>
</template>

<script>
    import register from "../register/register";
    import login from "../login/login";

    export default {
        name: "Nav",
        components: {
            login,
            register,
        },
        data() {
            return {
                // 路由列表
                routerList: ["Home", "Blog", "Message", "Diary", "About"],
                // alertKey: 0,        // 弹窗的key值
                LoginIn: false,     // 是否登录
                loginOut: false,     // 是否登录
                loginInfo: {
                    userName: "",
                    photo: "",
                },
                ifShowLogin: false,
                isShowRegister: false,
            }
        },
        methods: {
            // 点击下拉菜单
            handleCommand(command){
                if(command === "userInfo"){
                    console.log(11111);
                }else{
                    console.log(22222);
                }
            },
            // 关闭登录弹窗
            handleCloseLogin(data){
                this.ifShowLogin = data;
            },
            // 关闭注册弹窗
            handleCloseRegister(data){
                this.isShowRegister = data;
            }
        },
        computed: {
            whichActive() {
                let index = this.routerList.indexOf(this.$route.name);
                return index + 1;
            }
        },
        created() {
            this.Api.ifLogin().then(res => {
                // console.log("判断是否登录", res.data);
                if (res.data.code === 0) {
                    this.LoginIn = true;
                    this.loginOut = false;
                    this.loginInfo.userName = res.data.data.userName;
                    this.loginInfo.photo = res.data.data.photo
                } else {
                    this.LoginIn = false;
                    this.loginOut = true;
                }
            })
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/css/font.css";

    #nav {
        width: 100%;
        height: 60px;
        background-color: #FFF;
        position: fixed;
        top: 0;
        z-index: 999;

        .content {
            width: 100%;
            max-width: 1380px;
            height: 100%;
            margin: 0 auto;
            line-height: 60px;
            padding: 0 50px;
            box-sizing: border-box;
            position: relative;

            .logo {
                float: left;
                width: 90px;
                height: 60px;

                span {
                    font-size: 45px;
                    font-family: BarbaraHand;
                }
            }

            .nav {
                float: right;
                width: 576px;
                height: 100%;
                position: absolute;
                right: 24%;

                ul {
                    display: flex;

                    li {
                        flex: 1;
                        text-align: center;
                        position: relative;
                        margin: 0 5px;

                        &::after {
                            content: "";
                            width: 0;
                            height: 2px;
                            background-color: #6bc30d;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            margin: 0 auto;
                            transition: width 0.5s;
                        }

                        a {
                            display: block;
                            font-size: 15px;
                            width: 100%;
                            height: 100%;
                        }

                    }

                    li:hover {
                        cursor: pointer;

                        a {
                            color: #6bc30d;
                        }

                        &::after {
                            width: 100%;
                        }
                    }

                    &.list1 li:nth-child(1),
                    &.list2 li:nth-child(2),
                    &.list3 li:nth-child(3),
                    &.list4 li:nth-child(4),
                    &.list5 li:nth-child(5),
                    &.list6 li:nth-child(6) {
                        a {
                            color: #6bc30d;
                        }

                        &::after {
                            width: 100%;
                        }
                    }

                }
            }

            .login-reg {
                float: right;

                div:nth-child(1) {
                    height: 60px;
                    line-height: 60px;
                    display: flex;
                    justify-items: center;
                    align-items: center;

                    .block {
                        width: 41px;
                        height: 40px;
                        background-color: pink;
                        border-radius: 50%;
                        margin-right: 10px;
                        overflow: hidden;
                        padding-left: 3px;
                        box-sizing: border-box;

                        &:hover{
                            cursor: pointer;
                        }

                        .user-photo {
                            width: 35px;
                            height: 35px;
                        }
                    }
                }
            }
        }
    }

    .el-dropdown-menu{

        .quit:hover{
            color: red;
        }
    }
</style>
