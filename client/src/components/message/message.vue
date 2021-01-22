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
                // 判断是否登录
                this.Api.ifLogin().then(res => {
                    // console.log("判断是否登录", res.data);
                    if (res.data.code === 0) {
                        if(data){
                            this.Api.commitMessage({
                                user: res.data.data._id,
                                content: data
                            }).then(res => {
                                // console.log("留言", res);
                                if(res.data.code === 0){
                                    setTimeout(() => {
                                        window.location.reload();
                                    },500)
                                    layer.msg('留言成功', {
                                        icon: 6,
                                        offset: '300px',
                                        time: 2000 //2秒关闭（如果不配置，默认是3秒）
                                    });
                                }
                            })
                        }else{
                            layer.msg('请输入内容！', {
                                icon: 5,
                                offset: '300px',
                                time: 2000, //2秒关闭（如果不配置，默认是3秒）
                                anim: 6, // 抖动
                            });
                        }
                    } else {
                        layer.msg('请先登录！', {
                            icon: 5,
                            offset: '300px',    // top: 300px
                            time: 2000,     // 2秒关闭（如果不配置，默认是3秒）
                            anim: 6, // 抖动
                        });
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
