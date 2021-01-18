<template>
    <div class="starry-sky">
        <div class="about-title">
            <h1>关于</h1>
            <p>剑气纵横三万里,一剑光寒十九洲.</p>
        </div>
        <canvas class="cash" id="canv"></canvas>
    </div>
</template>

<script>
    import {stars_nest} from "./stars_nest";

    export default {
        name: "starry-sky",
        mounted(){
            stars_nest();
        },
    }
</script>

<style scoped lang="less">
    .starry-sky {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 250px;
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,#3b87a5),color-stop(1,#1c1f22));
        > canvas {
            width: 100%;
            height: 100%;
        }

        .about-title{
            position: absolute;
            text-align: center;
            color: #FFFFFF;
        }
    }
</style>
