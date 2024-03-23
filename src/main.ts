import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// config Component library arco.design
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

// Use
createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
