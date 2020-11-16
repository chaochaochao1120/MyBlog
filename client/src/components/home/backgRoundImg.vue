<template>
    <div class="backgRoundImg" :style="{height: bgHeight + 'px'}">
        <!-- 名字and描述 -->
        <div class="na-des">
            <h1>Mr.lzc</h1>
            <p>一个不知名的程序员</p>
            <router-link to="blog/0">Enter Blog</router-link>
        </div>
        <!-- 向下箭头 -->
        <div class="icon">
            <i class="el-icon-arrow-down"></i>
        </div>
        <!-- 右边操作 -->
        <div :class="[{'operation': true}, {'change': ifChange}]" @click="changeClass">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!--右边操作覆盖遮罩-->
        <div :class="[{'mask': true}, {'mask-move': ifMove}]">
            <router-link to="/">首页</router-link>
            <router-link to="blog/0">博客</router-link>
            <router-link to="message">留言</router-link>
            <span>Mr.lzc</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "backgRoundImg",
        data(){
            return {
                bgHeight: 0,        // 背景图片高度
                ifChange: false,    // 右边操作change类名是否存在
                ifMove: false
            }
        },
        methods: {
            // 获取可视区的高
            getbgHeight(){
                this.bgHeight = document.documentElement.clientHeight;
            },

            // 改变右边操作的类名
            changeClass(){
                this.ifChange = !this.ifChange;
                this.ifMove = !this.ifMove;
            }
        },

        mounted() {
            this.getbgHeight()
            window.addEventListener("resize", this.getbgHeight);
        },

        destroyed() {
            window.removeEventListener("resize", this.getbgHeight);
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/css/font.css";
    .backgRoundImg{
        position: relative;
        width: 100%;
        background: url("../../assets/img/homebgi.jpg") center center/cover;
        display: flex;
        align-items: center;

        &::before{
            content: "";
            position: absolute;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
        }

        .na-des{
            width: 100%;
            height: 171px;
            text-align: center;
            position: relative;
            z-index: 4;
            animation: show 1s 1;
            animation-fill-mode: forwards;
            @keyframes show{
                from{opacity: 0.5; transform: scale(0.5)}
                to{opacity: 1; transform: scale(1)}
            }

            h1{
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

        .icon{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            z-index: 4;
            bottom: 30px;
            left: 0;
            right: 0;
            margin: auto;
            cursor: pointer;

            &:hover{
                background-color: #6bc30d;
            }

            i{
                font-size: 50px;
                color: #fff;
            }
        }

        .operation{
            position: fixed;
            z-index: 10;
            right: 50px;
            top: 40px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            background-color: rgba(0,0,0,.1);
            transition: background-color 0.5s;

            &:hover{
                background-color: #6bc30d;
            }

            span{
                position: relative;
                top: 16px;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto auto 7px auto;
                display: block;
                background: #fff;
                width: 26px;
                height: 2px;
                line-height: 10px;
                transition: transform .5s, opacity .5s, top .5s;
            }
        }

        .change{

            &:hover{
                background-color: #6bc30d;
            }

            span:nth-child(1){
                top: 25px;
                transform: rotate(45deg);
            }

            span:nth-child(2){
                transform: rotate(-45deg);
            }

            span:nth-child(3){
                opacity: 0;
            }
        }

        .mask{
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.3);
            transition: opacity 0.4s;

            a{
                color: #686967;
                position: fixed;
                z-index: 8;
                right: 55px;
                font-size: 20px;

                &:hover{
                    color: #6bc30d;
                }

                &:hover::before{
                    width: 90px;
                }

                &::before{
                    content: "";
                    position: absolute;
                    top: 14px;
                    left: -24px;
                    width: 0;
                    height: 20px;
                    border-top: 1px solid #6bc30d;
                    transition: width .3s;
                }
            }

            a:nth-child(1){
                top: 250px;
            }

            a:nth-child(2){
                top: 350px;
            }

            a:nth-child(3){
                top: 450px;
            }

            span{
                color: #686967;
                position: fixed;
                z-index: 8;
                right: 55px;
                bottom: 50px;
                font-size: 55px;
                font-family: BarbaraHand;
            }

            &::before{
                content: "";
                position: fixed;
                z-index: 8;
                top: 0;
                left: 100%;
                width: 5000px;
                height: 100%;
                background-color: #fff;
                transform: skew(-12deg);
                transition: left .4s;
            }
        }

        .mask-move{
            opacity: 1;
            z-index: 5;

            &::before{
                left: 70%;
            }
        }
    }
</style>