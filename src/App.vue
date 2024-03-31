<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>

<script lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
export default {
  name: "App",
  components: { BasicLayout },
};
</script>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

/**
 * Init the project, grobally
 */
const doInit = () => {
  console.log("Loading OJ system......");
};

onMounted(() => {
  doInit();
});
</script>
