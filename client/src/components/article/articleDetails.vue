<template>
    <div class="articleDetails">
        <h1>{{id}}</h1>
    </div>
</template>

<script>
    export default {
        name: "articleDetails",
        data(){
            return {
                id: this.$route.params.id
            }
        }
    }
</script>

<style scoped lang="less">
    .articleDetails{
        width: 100%;
        height: 2000px;
        background-color: #fff;
        padding: 25px;
        box-sizing: border-box;
    }
</style>
