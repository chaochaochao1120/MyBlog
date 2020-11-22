<template>
    <div id="home">
        <backgRoundImg></backgRoundImg>
        <hotArticle></hotArticle>
        <other></other>
    </div>
</template>

<script>
    import backgRoundImg from "../components/home/backgRoundImg";
    import hotArticle from "../components/home/hotArticle";
    import other from "../components/home/other";
    export default {
        name: "Home",
        components: {
            backgRoundImg,
            hotArticle,
            other
        }
    }
</script>

<style scoped lang="less">

</style>