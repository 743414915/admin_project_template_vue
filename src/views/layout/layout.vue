<template>
  <div class="layout">
    <el-container class="main-content">
      <!-- 菜单 -->
      <el-aside :width="asideWidth"> el-menu </el-aside>

      <el-container>
        <!-- header头部 -->
        <el-header height="50px"> el-header </el-header>

        <!-- main中间 -->
        <el-main>
          <Suspense>
            <router-view></router-view>
          </Suspense>
        </el-main>

        <!-- 底部 -->
        <el-footer height="50px" class="footer"> el-footer </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
// #region -----------------------------导包 start-----------------------------

import { ref, computed } from "vue";
import { useRoute, type RouteLocationMatched } from "vue-router";

import ROUTER from "@/enums/router";

// #endregion -----------------------------导包 end-----------------------------

// #region -----------------------------菜单相关 start-----------------------------

// 菜单是否折叠
const isCollapse = ref(false);
function collapseChange(flag: boolean) {
  isCollapse.value = flag;
}

// 设置菜单所在div的宽度
const asideWidth = computed(() => {
  return isCollapse.value ? "60px" : "210px";
});

// #endregion -----------------------------菜单相关 end-----------------------------

// #region -----------------------------页面信息相关 start-----------------------------

// 获取面包屑信息
const route = useRoute();
const getBreadcrumbs = computed<RouteLocationMatched[]>(() => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  let levelList = matched.filter(
    (item) => item.meta?.title && item.name !== ROUTER.LAYOUT_NAME,
  );
  return levelList;
});

// #endregion -----------------------------页面信息相关 end-----------------------------

// #region -----------------------------退出登录 start-----------------------------

async function logout() {}

// #endregion -----------------------------退出登录 end-----------------------------
</script>
<style lang="less" scoped>
@import url("./layout.less");
</style>
