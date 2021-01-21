<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
            <el-form-item label="用户名" prop="userName" label-width="80px">
                <el-input v-model="form.userName" class="input"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" label-width="80px">
                <el-input v-model="form.password" show-password class="input"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                // 注册表单数据
                form: {
                    userName: "",       // 用户名
                    password: "",       // 密码
                },
                // 注册表单数据规则
                rules: {
                    // 用户名匹配规则
                    userName: [
                        {
                            validator: (rule, value, cb) => {
                                if(!value){
                                    cb(new Error("请输入用户名"));
                                }else{
                                    if(!/^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{5,20}$/.test(value)){
                                        cb(new Error("请输入正确格式的用户名"));
                                    }else{
                                        cb();
                                    }
                                }
                            }
                        },
                        {
                            type: "string",
                            required: true,
                            trigger: ['blur', 'change']
                        },
                    ],
                    // 密码匹配规则
                    password: [
                        {
                            validator: (rule, value, cb) => {
                                if (value) {
                                    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/.test(value)) {
                                        cb();
                                    } else {
                                        cb(new Error("请输入正确格式的密码"));
                                    }
                                } else {
                                    cb(new Error("请输入密码"));
                                }
                            },
                            type: "string",
                            required: true,
                            trigger: ['blur', 'change'],
                        },
                    ],
                },
                disabled: false,        // 立即登录按钮
            }
        },
    }
</script>

<style scoped lang="less">
    .login {
        user-select: none;

        .form {
            padding-right: 0px;

            .btn {
                margin-bottom: 0;

                /deep/ .el-form-item__content {
                    margin-left: 150px !important;
                }
            }

            .input{
                float: left;
                width: 240px;
            }

            .checkCode {
                float: left;
                width: 33%;
            }

            .svg {
                float: left;
                width: 30%;
                height: 40px;

                /deep/ svg {
                    width: 100%;
                    height: 40px;
                }
            }

            .refresh {
                float: left;
                width: 37%;
                height: 40px;
                font-size: 11px;
                line-height: 50px;
                color: #2ea7e0;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }
</style>
