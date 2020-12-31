<template>
    <div class="register">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
                <el-input v-model="form.checkPassword" show-password></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="checkCode">
                <el-input v-model="form.checkCode" class="checkCode"></el-input>
                <div class="svg" v-html="svgCode"></div>
                <p class="refresh" @click="getCheckCode">看不清，换一张？</p>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="success" @click="register('form')">立即注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                // 注册表单数据
                form: {
                    userName: "",       // 用户名
                    password: "",       // 密码
                    checkPassword: "",  // 确认密码
                    checkCode: "",      // 验证码
                },
                // 注册表单数据规则
                rules: {
                    // 用户名匹配规则
                    userName: [
                        {
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            type: "string",
                            pattern: /^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{5,10}$/,
                            message: "5-10位，数字 字母 下划线 中日韩文组成",
                            trigger: ['blur', 'change']
                        }
                    ],
                    // 密码匹配规则
                    password: [
                        {
                            validator: (rule, value, cb) => {
                                if (value) {
                                    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/.test(value)) {
                                        cb();
                                    } else {
                                        cb(new Error("5-10位字母和数字组成"));
                                    }
                                } else {
                                    cb(new Error("请输入密码"));
                                }
                                // 触发确认密码的验证
                                if (this.form.checkPassword) {
                                    this.$refs.form.validateField('checkPassword');
                                }
                            },
                            type: "string",
                            required: true,
                            trigger: ['blur', 'change'],
                        },
                    ],
                    // 确认密码匹配规则
                    checkPassword: [
                        {
                            required: true,
                            message: '请再次输入密码',
                            trigger: 'blur'
                        },
                        {
                            validator: (rule, value, cb) => {
                                if (value === this.form.password) {
                                    cb();
                                } else {
                                    cb(new Error("两次密码不一致"));
                                }
                            },
                            trigger: ['blur', 'change']
                        }
                    ],
                    // 验证码匹配规则
                    checkCode: [
                        {
                            validator: (rule, value, cb) => {
                                if (!value) {
                                    cb(new Error("请输入验证码"));
                                } else {
                                    this.Api.judgeCheckCode(value).then(res => {
                                        if (res.data.code === 0) {
                                            cb();
                                        } else {
                                            cb(new Error("验证码错误"));
                                        }
                                    }).catch(err => {
                                        cb(new Error("未知错误"));
                                    })
                                }
                            },

                        },
                        {
                            type: "string",
                            required: true,
                            trigger: 'blur',
                        }
                    ]
                },
                svgCode: "",    // 验证码svg
            }
        },
        methods: {
            // 获取验证码
            getCheckCode() {
                this.Api.getCheckCode().then(res => {
                    this.svgCode = res.data.data;
                })
            },
            // 立即注册
            register(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.Api.submitRegister(this.form).then(res => {
                            // console.log("注册", res.data);
                            if(res.data.code === 0){
                                console.log("注册成功");
                            }else{
                                this.$message.error(res.data.data);
                            }
                        })
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted() {
            // 注册组件加载后，获取验证码
            this.getCheckCode();
        }
    }
</script>

<style scoped lang="less">
    .register {
        user-select: none;

        .form {
            padding-right: 30px;

            .btn {
                margin-bottom: 0;

                /deep/ .el-form-item__content {
                    margin-left: 150px !important;
                }
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
