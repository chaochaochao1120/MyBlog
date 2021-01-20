<template>
    <div id="Message">
        <Nav></Nav>
        <div class="content">
            <message></message>
            <history></history>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav/Nav";
    import message from "../components/message/message";
    import history from "../components/message/history";

    export default {
        name: "Message",
        components: {
            Nav,
            message,
            history
        }
    }
</script>

<style scoped lang="less">
    #Message {
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
