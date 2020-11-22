<template>
    <div class="other">
        <div class="section1">

        </div>
        <div class="section2">

        </div>
        <div class="section3">

        </div>
    </div>
</template>

<script>
    export default {
        name: "other",
        data(){
            return{
                bgHeight: "",  // 浏览器高度
            }
        },
        mounted() {
            this.bgHeight = document.documentElement.clientHeight;
        }
    }
</script>

<style scoped lang="less">
    .other{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 890px;
        background: url("../../assets/img/bgc2.jpg") center/cover;

        .section1{
            width: 100%;
            height: 270px;
            /*background-color: pink;*/
        }

        .section2{
            width: 100%;
            height: 276px;
            /*background-color: blue;*/
        }

        .section3{
            width: 100%;
            height: 344px;
            /*background-color: darkgreen;*/
        }
    }
</style>