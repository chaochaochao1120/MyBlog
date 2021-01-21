<template>
    <div class="history">
        <ul class="message-list">
            <li class="message-item" v-for="item in comment">
                <!--父评论-->
                <div class="p-comment">
                    <img class="p-photo" :src="item.user.photo" alt="">
                    <div class="p-info">
                        <span class="userName">{{item.user.userName}}</span>
                    </div>
                    <div class="comment-content" v-html="item.content"></div>
                    <div class="p-date">
                        <div class="date">{{item.date | getTime}}</div>
                        <a href="javascript:;" class="reply">回复</a>
                    </div>
                </div>
                <hr v-if="item.children.length > 0">
                <!--子评论-->
                <div class="c-comment" v-for="it in item.children">
                    <img class="c-photo" :src="it.user.photo" alt="">
                    <div class="c-info">
                        <span class="userName">{{it.user.userName}}</span>
                        <span>回复</span>
                        <span class="parentUserName">{{it.parentUserName}}</span>
                    </div>
                    <div class="comment-content" v-html="it.content"></div>
                    <div class="c-date">
                        <div class="date">{{it.date | getTime}}</div>
                        <a href="javascript:;" class="reply">回复</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "history",
        filters: {
            getTime(val){
                let date = new Date(val);
                let YY = date.getFullYear(),
                    MM = date.getMonth() + 1,
                    DD = date.getDate(),
                    hh = date.getHours(),
                    mm = date.getMinutes(),
                    ss = date.getSeconds();
                if(MM < 10){
                    MM = "0" + MM;
                }
                if(DD < 10){
                    DD = "0" + DD;
                }
                if(mm < 10){
                    mm = "0" + mm;
                }
                if(ss < 10){
                    ss = "0" + ss;
                }

                return `${YY}/${MM}/${DD} ${hh}:${mm}:${ss}`
            }
        },
        data(){
            return {
                comment: [
                    {
                        _id: "XXX",
                        user: {
                            _id: "xxx",
                            userName: "张三",
                            photo: "http://localhost:3000/img/defaultAvatar.jpg",
                        },
                        content: "<p>君不见黄河之水天上来，奔流到海不复回。<img src=\"http://localhost:8080/layui/images/face/2.gif\" alt=\"[哈哈]\"></p><p>君不见高堂明镜悲白发，朝如青丝暮成雪。<img src=\"http://localhost:8080/layui/images/face/2.gif\" alt=\"[哈哈]\"></p>",
                        date: new Date() + "",
                        // 子评论
                        children: [
                            {
                                parentUserName: "张三",
                                user: {
                                    _id: "xxx",
                                    userName: "李四",
                                    photo: "http://localhost:3000/img/defaultAvatar.jpg",
                                },
                                content: "<p>人生得意须尽欢，莫使金樽空对月。</p>",
                                date: new Date() + "",
                            },
                            {
                                parentUserName: "张三",
                                user: {
                                    _id: "xxx",
                                    userName: "王五",
                                    photo: "http://localhost:3000/img/defaultAvatar.jpg",
                                },
                                content: "<p>天生我材必有用，千金散尽还复来。</p>",
                                date: new Date() + "",
                            },
                        ]
                    },
                    {
                        _id: "XXX",
                        user: {
                            _id: "xxx",
                            userName: "张三1",
                            photo: "http://localhost:3000/img/defaultAvatar.jpg",
                        },
                        content: "<p>烹羊宰牛且为乐，会须一饮三百杯。</p>",
                        date: new Date() + "",
                        // 子评论
                        children: [
                            {
                                parentUserName: "张三1",
                                user: {
                                    _id: "xxx",
                                    userName: "李四1",
                                    photo: "http://localhost:3000/img/defaultAvatar.jpg",
                                },
                                content: "<p>岑夫子，丹丘生，将进酒，杯莫停。</p>",
                                date: new Date() + "",
                            },
                            {
                                parentUserName: "张三1",
                                user: {
                                    _id: "xxx",
                                    userName: "王五1",
                                    photo: "http://localhost:3000/img/defaultAvatar.jpg",
                                },
                                content: "<p>与君歌一曲，请君为我倾耳听。</p>",
                                date: new Date() + "",
                            },
                        ]
                    },
                    {
                        _id: "XXX",
                        user: {
                            _id: "xxx",
                            userName: "张三",
                            photo: "http://localhost:3000/img/defaultAvatar.jpg",
                        },
                        content: "<p>君不见黄河之水天上来，奔流到海不复回。</p><p>君不见高堂明镜悲白发，朝如青丝暮成雪。</p>",
                        date: new Date() + "",
                        // 子评论
                        children: []
                    }
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    .history {
        width: 100%;
        background-color: #fff;

        .message-list{
            li:nth-child(1){
                border-width: 0;
            }

            .message-item{
                width: 100%;
                border-top: 1px dotted grey;
                padding: 20px 15px;
                box-sizing: border-box;

                /*父评论*/
                .p-comment{

                    .p-photo{
                        width: 45px;
                        height: 45px;
                        position: absolute;
                        border-radius: 50px;
                    }

                    .p-info{
                        margin-left: 56px;
                        margin-bottom: 5px;
                        font-size: 13px;

                        .userName{
                            color: #01aaed;
                        }
                    }

                    /deep/.comment-content{
                        margin-left: 56px;
                        margin-bottom: 10px;

                        p{
                            line-height: 25px;
                        }
                    }

                    .p-date{
                        margin-left: 56px;
                        margin-bottom: 12px;
                        font-size: 13px;

                        .date{
                            display: inline;
                            margin-right: 10px;
                        }

                        .reply{
                            text-decoration: none;
                            border: none;
                            color: #009688;
                        }
                    }
                }

                hr{
                    height: 1px;
                    margin: 10px 0 0px 56px;
                    border: 0;
                    clear: both;
                    background-color: #e6e6e6;
                }

                /*子评论*/
                .c-comment{
                    margin-left: 56px;
                    margin-top: 15px;

                    .c-photo{
                        width: 45px;
                        height: 45px;
                        position: absolute;
                        border-radius: 50px;
                    }

                    .c-info{
                        margin-left: 56px;
                        margin-bottom: 5px;
                        font-size: 13px;

                        .userName{
                            color: #01aaed;
                            margin-right: 5px;
                        }

                        .parentUserName{
                            color: #01aaed;
                            margin-left: 5px;
                        }
                    }

                    /deep/.comment-content{
                        margin-left: 56px;
                        margin-bottom: 10px;

                        p{
                            line-height: 25px;
                        }
                    }

                    .c-date{
                        margin-left: 56px;
                        margin-bottom: 12px;
                        font-size: 13px;

                        .date{
                            display: inline;
                            margin-right: 10px;
                        }

                        .reply{
                            text-decoration: none;
                            border: none;
                            color: #009688;
                        }
                    }
                }
            }
        }
    }
</style>
