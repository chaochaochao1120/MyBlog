<template>
    <div class="timeline">
        <el-timeline :reverse="true">
            <el-timeline-item v-for="(item,index) in diaryList" :key="index" :timestamp="item.date" placement="top">
                <el-card>
                    <p>{{item.content}}</p>
                    <el-image
                        v-for="(it,index) in item.img"
                        :key="index"
                        :src="it"
                        :preview-src-list="item.img">
                    </el-image>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "timeline",
        data(){
            return{
                diaryList: [
                    {
                        date: "2020/4/12",
                        content: "这是我的第一篇日志！！",
                        img: ["http://localhost:3000/img/diary/11.jpg", "http://localhost:3000/img/diary/22.jpg"]
                    },
                    {
                        date: "2021/1/2",
                        content: "这是我的第二篇日志！！",
                    },
                    {
                        date: "2021/1/3",
                        content: "这是我的第三篇日志！！",
                        img: ["http://localhost:3000/img/diary/33.jpg"]
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .timeline{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding: 50px 8% 50px 18%;
        box-sizing: border-box;

        /deep/.el-timeline-item__timestamp{
            position: absolute;
            left: -120px;
            font-size: 20px;
            color: #6bc30d;
        }

        .el-timeline-item__content{

            .el-card{
                background-color: #484348;
            }

            p{
                line-height: 30px;
                color: #fff;
            }
        }
    }
</style>
