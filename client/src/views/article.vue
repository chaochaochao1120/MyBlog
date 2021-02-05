<template>
    <div id="article">
        <Nav></Nav>
        <div class="content">
            <articleDetails></articleDetails>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import articleDetails from "../components/article/articleDetails";
    export default {
        name: "article",
        components: {
            Nav,
            articleDetails
        }
    }
</script>

<style scoped lang="less">
    #article{
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
    }
</style>
