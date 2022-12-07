<template>
  <div class="login">
    <div
      style="width:380px;height: 280px;background-color: #6AD4FF;padding: 20px;margin: 140px auto;border-radius: 20px;"
    >
      <div
        style="font-size: 28px;font-weight: bold;color: black;text-align: center;margin-bottom: 50px;"
      >
        聊天系统
      </div>
      <el-form
        :model="loginForm"
        label-width="70px"
        :rules="loginRules"
        ref="loginForm"
      >
        <el-form-item label="账号" prop="accountNumber">
          <el-input
            v-model="loginForm.accountNumber"
            style="width: 280px;"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginForm.password"
            style="width: 280px;"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div
          @click="loginBtn"
          style="cursor: pointer; border-radius: 10px;margin: 48px auto 0 auto; width: 130px;height: 36px;line-height: 36px;text-align: center;font-size: 18px;color: white;background-color: orange;"
        >
          登录
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        accountNumber: '',
        password: '',
      },
      loginRules: {
        accountNumber: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'change',
          },
        ],
      },
    };
  },
  methods: {
    loginBtn() {
      this.$router.push('/home');
    },
  },
};
</script>
<style lang="scss" scoped></style>
