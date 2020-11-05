<template>
    <div id="blog">
        <Nav></Nav>
        <div class="content">
            <el-container style="height: 100%;">
                <!-- 主要内容-->
                <el-main style="width: calc(100% - 320px)"><articleShow></articleShow></el-main>
                <!--侧边栏-->
                <el-aside width="300px">
                    <sidebar></sidebar>
                </el-aside>
            </el-container>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import sidebar from "../components/Blog/sidebar";
    import articleShow from "../components/Blog/articleShow";

    export default {
        name: "Blog",
        data(){
            return{}
        },

        components: {
            Nav,
            sidebar,
            articleShow
        },
    }
</script>

<style scoped lang="less">
    #blog {
        width: 100%;
        padding-top: 80px;
        box-sizing: border-box;

        .content {
            width: 100%;
            max-width: 1380px;
            height: 100%;
            margin: 0 auto;
            padding: 0 50px;
            box-sizing: border-box;

            /*侧边栏*/
            .el-aside {
                color: #333;
            }

            .el-main {
                color: #333;
                padding: 0;
                margin: 0 20px 0 0;
            }

            body > .el-container {
                margin-bottom: 40px;
            }
        }
    }
</style>