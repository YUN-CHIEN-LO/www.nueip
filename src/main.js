import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import i18n from "./locale";
import directives from "@/directives";
import "@mdi/font/css/materialdesignicons.min.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(directives);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
