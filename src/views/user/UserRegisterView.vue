<template>
  <div id="userLoginView">
    <h2 style="margin-bottom: 16px">User Register</h2>
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
          Register
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
export default {
  name: "UserRegisterView",
};
</script>
