import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import i18n from "./locale";
import directives from "@/directives";
import AOS from "aos";
import "aos/dist/aos.css";
import "@mdi/font/css/materialdesignicons.min.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(directives);
Vue.use(AOS);
AOS.init();
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
