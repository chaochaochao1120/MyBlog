<template>
    <div class="history">
        <ul class="message-list">
            <li class="message-item" v-for="(item,index) in message" :key="item._id">
                <!--父评论-->
                <div class="p-comment">
                    <img class="p-photo" :src="item.user.photo" alt="">
                    <div class="p-info">
                        <span class="userName">{{item.user.userName}}</span>
                    </div>
                    <div class="comment-content" v-html="item.content"></div>
                    <div class="p-date">
                        <div class="date">{{item.date | getTime}}</div>
                        <a href="javascript:;" class="reply" @click="replyComment(index)">
                            {{item.reply.lastIndexArr[0] === index && item.reply.lastIndexArr[1] === undefined ? "收起" : "回复"}}
                        </a>
                    </div>
                </div>
                <hr v-if="item.children.length > 0">
                <!--子评论-->
                <div class="c-comment" v-for="(it, ind) in item.children" :key="it.date + Math.random()">
                    <img class="c-photo" :src="it.user.photo" alt="">
                    <div class="c-info">
                        <span class="userName">{{it.user.userName}}</span>
                        <span>回复</span>
                        <span class="parentUserName">{{it.parentUserName}}</span>
                    </div>
                    <div class="comment-content" v-html="it.content"></div>
                    <div class="c-date">
                        <div class="date">{{it.date | getTime}}</div>
                        <a href="javascript:;" class="reply" @click="replyComment(index, ind)">
                            {{item.reply.lastIndexArr[0] === index && item.reply.lastIndexArr[1] === ind ? "收起" : "回复"}}
                        </a>
                    </div>
                </div>
                <div :class="['comment-reply', {'show': item.reply.ifshow}]">
                    <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="item.reply.content" :placeholder="'回复' + '【' + item.reply.parentUserName + '】'"></el-input>
                    <button type="button" class="layui-btn layui-btn-xs" @click="submit(index)">提交</button>
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
        props: {
            ifLoading: false,   // 是否显示loading图
            ifNoMore: false,    // 是否显示没有了
        },
        data(){
            return {
                // 留言数据
                message: [],
            }
        },
        methods: {
            // 打开回复框
            replyComment(pIndex, cIndex){
                let parentData = this.message[pIndex];

                if(cIndex === undefined){
                    this.message[pIndex].reply.parentUserName = this.message[pIndex].user.userName;
                }else{
                    this.message[pIndex].reply.parentUserName = this.message[pIndex].children[cIndex].user.userName;
                }

                // 判断回复框是否打开
                if(pIndex === parentData.reply.lastIndexArr[0] && cIndex === parentData.reply.lastIndexArr[1]){
                    parentData.reply.lastIndexArr = [];
                    parentData.reply.ifshow = false;
                }else{
                    parentData.reply.lastIndexArr = [pIndex, cIndex];
                    parentData.reply.ifshow = true;
                }
            },
            // 获取留言列表
            getMessageList(){
                this.$emit("fun", false);
                this.$emit("fun1", false);
                this.Api.getMessageList(true).then(res => {
                    // console.log("获取留言列表", res.data.data);
                    let data = res.data.data;
                    this.message = data.map(item => {
                        item.reply =  {
                            userName: "",
                            content: "",
                            parentUserName: "",
                            date: "",
                            ifshow: false,
                            lastIndexArr: [],
                        }
                        return item;
                    })
                })
            },
            // 滚动高+可视区高>=文档高-200时，继续请求文章列表
            handleScroll(){
                if (this.ifNoMore || this.ifLoading) {return;}
                // 文档高
                let c = document.documentElement.offsetHeight;
                // 滚动高
                let a = document.documentElement.scrollTop;
                // 可视区高
                let b = document.documentElement.clientHeight;
                if (a + b >= c - 50) {
                    this.$emit("fun2", true);
                    this.Api.getMessageList(false).then(res => {
                        // console.log(res.data.data);
                        this.$emit("fun3", false);
                        if (res.data.data.length) {
                            let data = res.data.data;
                            let list = [];
                            list = data.map(item => {
                                item.reply =  {
                                    userName: "",
                                    content: "",
                                    parentUserName: "",
                                    date: "",
                                    ifshow: false,
                                    lastIndexArr: [],
                                }
                                return item;
                            })
                            this.message.push(...list);
                        }else{
                            this.$emit("fun4", true);
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }else{}
            },
            // 回复
            submit(pIndex){
                this.Api.ifLogin().then(res => {
                    // console.log("判断是否登录", res.data);
                    if (res.data.code === 0) {
                        if(this.message[pIndex].reply.content){
                            console.log({
                                parentId: this.message[pIndex]._id,
                                user: res.data.data._id,
                                content: this.message[pIndex].reply.content,
                                parentUserName: this.message[pIndex].reply.parentUserName
                            })
                            this.Api.replyMessage({
                                parentId: this.message[pIndex]._id,
                                user: res.data.data._id,
                                content: this.message[pIndex].reply.content,
                                parentUserName: this.message[pIndex].reply.parentUserName
                            }).then(res => {
                                console.log("回复留言", res);
                                if(res.data.code === 0){
                                    setTimeout(() => {
                                        window.location.reload();
                                    },500)
                                    layer.msg('回复成功', {
                                        icon: 6,
                                        offset: '300px',
                                        time: 2000 //2秒关闭（如果不配置，默认是3秒）
                                    });
                                }
                            })
                        }else{
                            layer.msg('请输入内容！', {
                                icon: 5,
                                offset: '300px',
                                time: 2000, //2秒关闭（如果不配置，默认是3秒）
                                anim: 6, // 抖动
                            });
                        }
                    } else {
                        layer.msg('请先登录！', {
                            icon: 5,
                            offset: '300px',    // top: 300px
                            time: 2000,     // 2秒关闭（如果不配置，默认是3秒）
                            anim: 6, // 抖动
                        });
                    }
                })
            }
        },
        mounted() {
            // 实例挂载后获取留言
            this.getMessageList();

            // 监听滚轮位置
            window.addEventListener("scroll", this.handleScroll);
        },
        // 销毁滚动事件
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped lang="less">
    .history {
        width: 100%;

        .message-list{
            li:nth-child(1){
                border-width: 0;
            }

            .message-item{
                background-color: #fff;
                width: 100%;
                border-top: 1px dotted grey;
                padding: 20px 15px;
                position: relative;
                box-sizing: border-box;
                animation: show 0.8s 1;
                animation-fill-mode: forwards;

                @keyframes show{
                    from{opacity: 0.5; transform: scale(0.2)}
                    to{opacity: 1; transform: scale(1)}
                }

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

                /*回复*/
                .comment-reply{
                    margin-left: 56px;
                    height: 0;
                    overflow: hidden;
                    transition: height .3s;

                    &.show{
                        height: 124px;
                    }

                    .layui-btn-xs{
                        margin-top: 10px;
                    }

                    /deep/.el-textarea{
                        .el-textarea__inner{
                            resize: none;
                        }
                    }
                }
            }
        }
    }
</style>
