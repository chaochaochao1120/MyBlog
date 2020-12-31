<template>
    <div id="app">
        <router-view></router-view>
        <el-backtop></el-backtop>
    </div>
</template>

<style lang="less" scoped>
    @import "assets/css/clearDefaultStyle.css";

    #app{
        width: 100%;
        background: url("./assets/img/bg1.jpg") center top/cover fixed;
    }
</style>
