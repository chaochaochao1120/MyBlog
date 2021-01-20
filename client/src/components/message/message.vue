<template>
    <div class="message">
        <div class="message-board">
            <h1>留言板</h1>
            <p>沟通交流，拉近你我！</p>
            <richText @Sub="handleSub"></richText>
        </div>
    </div>
</template>

<script>
    import richText from "./richText/richText";
    export default {
        name: "message",
        components: {
            richText
        },
        methods: {
            handleSub(data){
                console.log(data);
                // 判断是否登录
                this.Api.ifLogin().then(res => {
                    // console.log("判断是否登录", res.data);
                    if (res.data.code === 0) {
                        this.LoginIn = true;
                        this.loginOut = false;
                        this.loginInfo.userName = res.data.data.userName;
                        this.loginInfo.photo = "http://localhost:3000" + res.data.data.photo
                    } else {
                        this.LoginIn = false;
                        this.loginOut = true;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .message {
        width: 100%;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;

        .message-board{

            h1{
                font-weight: 700;
                font-size: 2rem;
                text-align: center;
            }

            p{
                font-size: 1.25rem;
                margin: 1rem 0 30px;
                text-align: center;
            }
        }
    }
</style>
