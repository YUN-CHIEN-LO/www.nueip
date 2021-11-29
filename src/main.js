import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import i18n from "./locale";
import "./scss/index.scss";
import "@mdi/font/css/materialdesignicons.min.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
