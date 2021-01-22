<template>
    <div id="Message">
        <Nav></Nav>
        <div class="content">
            <message></message>
            <history
                    :ifLoading="ifLoading"
                    :ifNoMore="ifNoMore"
                    @fun="fun"
                    @fun1="fun1"
                    @fun2="fun2"
                    @fun3="fun3"
                    @fun4="fun4"
            ></history>
        </div>
        <div class="footer">
            <div class="loading" v-if="ifLoading"></div>
            <p class="no-more" v-if="ifNoMore">哼╭(╯^╰)╮，我也是有底线的！！！</p>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import message from "../components/message/message";
    import history from "../components/message/history";

    export default {
        name: "Message",
        components: {
            Nav,
            message,
            history
        },
        data(){
            return {
                ifLoading: false,   // 是否显示loading图
                ifNoMore: false,    // 是否显示没有了
            }
        },
        created() {
            document.documentElement.scrollTop = 0;
        },
        methods: {
            fun(data){
                this.ifLoading = data;
            },
            fun1(data){
                this.ifNoMore = data;
            },
            fun2(data){
                this.ifLoading = data;
            },
            fun3(data){
                this.ifLoading = data;
            },
            fun4(data){
                this.ifNoMore = data;
            },
        }
    }
</script>

<style scoped lang="less">
    #Message {
        width: 100%;
        padding-top: 60px;
        box-sizing: border-box;

        .content {
            width: 100%;
            max-width: 1380px;
            height: 100%;
            margin: 20px auto 0;
            padding: 0 50px 20px;
            box-sizing: border-box;
        }

        .loading{
            width: 380px;
            height: 30px;
            background-image: url("../assets/img/loading.gif");
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
