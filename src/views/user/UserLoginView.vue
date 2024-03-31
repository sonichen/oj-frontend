<template>
  <div id="userLoginView">
    <h2 style="margin-bottom: 16px; text-align: center; color: #374550">
      User Login
    </h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="Account">
        <a-input
          v-model="form.userAccount"
          placeholder="Please input account"
        />
      </a-form-item>
      <a-form-item
        field="userPassword"
        tooltip="At least 8 characters"
        label="Password"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="Please input password"
        />
      </a-form-item>
      <a-form-item>
        For new users, please sign up &nbsp; <a href="/user/register">here</a>.
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="
            width: 120px;
            margin: 0 auto;
            display: block;
            background-color: #374550;
          "
        >
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
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

const router = useRouter();
const store = useStore();

/**
 * Submit the user form
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  // success
  if (res.code === 0) {
    await store.dispatch("user/getLoginUser");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("Fail: " + res.message);
  }
};
</script>
