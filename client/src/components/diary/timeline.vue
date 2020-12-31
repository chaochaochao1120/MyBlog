<template>
    <div class="timeline">
        <el-timeline>
            <el-timeline-item v-for="item in diaryList" :timestamp="item.date" placement="top">
                <el-card>
                    <p>{{item.content}}</p>
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
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        date: "2018/4/12",
                        content: "王小虎 提交于 2018/4/12 20:46"
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
        }

        .el-timeline-item__content{

            p{
                line-height: 30px;
            }
        }
    }
</style>
