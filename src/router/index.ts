// coderwhy add3page_setup menu -d src/views/layout/system/menu

// #region -----------------------------方法相关 start-----------------------------

import { createRouter, createWebHashHistory } from "vue-router";

import ROUTER from "@/enums/router";

import before from "./beforeRouter";

// #endregion -----------------------------方法相关 end-----------------------------

const constantRoutes = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 404页面
    {
      path: ROUTER.PATH_MATCH,
      component: () => import("@/views/not-found/not-found.vue"),
    },
    {
      path: ROUTER.ROOT_PATH,
      name: ROUTER.ROOT_NAME,
      redirect: ROUTER.LAYOUT_PATH,
    },
    // 主页面
    {
      path: ROUTER.LAYOUT_PATH,
      component: () => import("@/views/layout/layout.vue"),
      // redirect: ROUTER.LAYOUT_PATH,
      name: ROUTER.LAYOUT_NAME,
      meta: {
        title: "系统管理",
        icon: "nested",
      },
      children: [],
    },
  ],
};

const router = createRouter(constantRoutes);
router.beforeEach((to, from, next) => {
  before(to, from, next);
});
router.afterEach(() => {});

export default router;

/**
 * 清空layout下面的所有路由
 */
export function resetRouter() {
  // 白名单,清空路由的时候，这几个永远不会清除
  const whiteList = [
    ROUTER.LAYOUT_NAME,
    ROUTER.LOGIN_NAME,
    ROUTER.TRANSIT_PAGE_NAME,
    ROUTER.ROOT_NAME,
  ];

  router.getRoutes().map((it: any) => {
    if (!whiteList.includes(it.name)) {
      router.removeRoute(it.name);
    }
  });
}
