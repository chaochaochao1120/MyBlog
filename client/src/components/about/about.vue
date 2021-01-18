<template>
    <div class="about">
        <div>
            <h1>关于我</h1>
            <p>毕业于一个不知名的二本大学，很迷茫。至今在前端行业摸爬滚打，沉迷撸码，日渐消瘦。</p>
            <span>可以通过以下方式联系我：</span>
            <ul>
                <li style="padding-left: 6px">email：<a href="mailto:604043484@qq.com">604043484@qq.com</a></li>
                <li>github：<a href="https://github.com/chaochaochao1120/MyBlog.git">https://github.com/chaochaochao1120/MyBlog.git</a></li>
            </ul>
        </div>
        <div>
            <h1>关于本站</h1>
            <p>本站建于2021年1月，主要是个人爱好写着玩。</p>
            <span>本站结构：</span>
            <ul>
                <li>前端：<code>Vue + Element</code></li>
                <li>后端：<code>Node + Mongoodb</code></li>
            </ul>
        </div>
        <div>
            <h1>关于版权</h1>
            <p>只要在使用时注明出处，那么您可以可以对本站所有原创内容进行转载、节选、二次创作，但是您不得对其用于商业目的。</p>
        </div>
        <div style="margin-bottom: 0">
            <h1>特别说明</h1>
            <ul style="margin-bottom: 10px">
                <li>本站文章仅代表个人观点，和任何组织或个人无关。</li>
                <li>本站前端开发代码没有考虑对IE浏览器的兼容。</li>
                <li>用户邮箱仅作回复消息用，不对外使用。</li>
            </ul>
            <img src="../../../src/assets/img/bg1.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped lang="less">
    .about{
        width: 100%;
        background-color: #fff;
        padding: 20px;
        box-sizing: border-box;

        div{
            margin-bottom: 60px;
            color: rgb(81, 82, 80);

            h1{
                margin-bottom: 1rem;
                padding-left: 1rem;
                border-left: .25rem solid #6bc30d;
                font-weight: 700;
                font-size: 1.5rem;
                line-height: 1.5rem;
            }

            p{
                margin: 20px 0;
                padding-left: 18px;
                font-family: Raleway,Segoe UI,Lucida Grande,Helvetica,Arial,Microsoft YaHei;
                line-height: 1.75rem;
                font-size: 14px;
            }

            span{
                padding-left: 18px;
                font-size: 14px;
            }

            ul{
                margin-top: 5px;
                padding-left: 18px;
                font-size: 14px;

                li{
                    line-height: 25px;

                    code{
                        background: rgba(27,31,35,.05);
                        padding: .2rem .4rem;
                        color: #bd4147;
                        border-radius: 4px;
                        font-family: Menlo,Monaco,Consolas,Courier New,monospace;
                    }

                    a{
                        color: #0366d6;
                    }
                }
            }

            img{
                width: 100%;
            }
        }
    }
</style>
