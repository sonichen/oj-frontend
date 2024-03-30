<template>
  <div id="userLoginView">
    <h2 style="margin-bottom: 16px">User Login</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
    >
      <a-form-item field="userAccount" label="Account">
        <a-input placeholder="Please enter your password" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="At least 8" label="Password">
        <a-input-password placeholder="Please enter your password" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          Login
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
export default {
  name: "UserLoginView",
};
</script>
<script setup lang="ts">
import { reactive } from "vue";
// import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * 表单信息
 */
// const form = reactive({
//   userAccount: "",
//   userPassword: "",
// } as UserLoginRequest);

const router = useRouter();
const store = useStore();

/**
 * 提交表单
 * @param data
 */
// const handleSubmit = async () => {
//   const res = await UserControllerService.userLoginUsingPost(form);
//   // 登录成功，跳转到主页
//   if (res.code === 0) {
//     await store.dispatch("user/getLoginUser");
//     router.push({
//       path: "/",
//       replace: true,
//     });
//   } else {
//     message.error("登陆失败，" + res.message);
//   }
// };
</script>
