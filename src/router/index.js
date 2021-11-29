import Vue from "vue";
import VueRouter from "vue-router";
import NuLayout from "../components/layout/NuLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: NuLayout,
    children: [
      {
        name: "Home",
        path: "",
        component: () => import("@/views/Home"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
