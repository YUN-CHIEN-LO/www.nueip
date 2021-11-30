import NuLayout from "../components/layout/NuLayout.vue";

// 基礎路由
const basicRoutes = [
  {
    path: "/error",
    component: NuLayout,
    children: [
      {
        name: "Error",
        path: "",
        component: () => import("@/views/Error"),
        meta: {
          hideFreeTrial: true,
        },
      },
    ],
  },
  {
    // 首頁
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

const constantRoutes = basicRoutes;

constantRoutes.push({
  // 預設查無對應網址時，進入錯誤提示頁
  path: "*",
  redirect: "/error",
  hidden: true,
});

export { constantRoutes };
