<template>
    <div id="home">
        <backgRoundImg></backgRoundImg>
        <hotArticle></hotArticle>
    </div>
</template>

<script>
    import backgRoundImg from "../components/home/backgRoundImg";
    import hotArticle from "../components/home/hotArticle";
    export default {
        name: "Home",
        components: {
            backgRoundImg,
            hotArticle
        }
    }
</script>

<style scoped lang="less">

</style>