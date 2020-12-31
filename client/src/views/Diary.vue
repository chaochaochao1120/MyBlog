<template>
    <div id="diary">
        <Nav></Nav>
        <div class="content">
            <timeline></timeline>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import timeline from "../components/diary/timeline";
    export default {
        name: "Diary",
        components: {
            Nav,
            timeline,
        }
    }
</script>

<style scoped lang="less">
    #diary{
        width: 100%;
        padding-top: 80px;
        box-sizing: border-box;

        .content{
            width: 100%;
            max-width: 1380px;
            height: 100%;
            margin: 0 auto;
            padding: 0 50px 20px;
            box-sizing: border-box;
        }
    }
</style>
