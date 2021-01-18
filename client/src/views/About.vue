<template>
    <div id="About">
        <Nav></Nav>
        <xingkong></xingkong>
        <div class="content">
            <about></about>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import about from "../components/about/about";
    import xingkong from "../components/xingkong/xingkong";
    export default {
        name: "About",
        components: {
            Nav,
            about,
            xingkong
        }
    }
</script>

<style scoped lang="less">
    #About{
        width: 100%;
        padding-top: 60px;
        box-sizing: border-box;

    .content{
        width: 100%;
        max-width: 1380px;
        height: 100%;
        margin: 20px auto 0;
        padding: 0 50px 20px;
        box-sizing: border-box;
    }
    }
</style>
