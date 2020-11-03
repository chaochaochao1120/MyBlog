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
            <el-form-item>
                <el-button type="primary" @click="">立即注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return {
                // 注册表单数据
                form: {
                    userName: "",
                    password: "",
                    checkPassword: "",
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
                            pattern:  /^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{5,10}$/,
                            message: "5-10位，数字 字母 下划线 中日韩文组成",
                            trigger: ['blur', 'change']
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'
                        },
                        {
                            type: "string",
                            pattern:  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,10}$/,
                            message: "5-10位的字母和数字组成",
                            trigger: ['blur', 'change']
                        }
                    ],
                    checkPassword: [
                        { required: true, message: '请确认密码', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .register{

        .form{
            padding-right: 30px;
        }
    }
</style>