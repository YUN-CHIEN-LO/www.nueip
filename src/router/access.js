// 選單路由
export const menuRoutes = [{}];

// 系統功能路由
export const systemRoutes = [
  {
    // 預設查無對應網址時，進入錯誤提示頁
    path: "*",
    redirect: "/error",
    hidden: true,
  },
];

export const accessRoutes = menuRoutes.concat(systemRoutes);
