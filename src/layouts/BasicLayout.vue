<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a
          href="https://github.com/sonichen/oj-frontend"
          target="_blank"
          style="color: aliceblue"
        >
          Black Online Judge System
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  name: "BasicLayout",
  components: { GlobalHeader },
};
</script>
<style scoped>
#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
  background-color: #34495e !important;
}

#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);

  /* background-color: #efefef; */
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: #34495e;
  color: aliceblue !important;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
