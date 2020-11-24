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
            background-color: rgb(35, 35, 40);;
        }
    }
</style>