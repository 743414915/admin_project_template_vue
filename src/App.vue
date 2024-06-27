<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from "element-plus/es/locale/lang/zh-cn";

// 自定义文字（使用默认文字不用设置）
zhCn.el.pagination = {
  goto: "跳转至第",
  pagesize: "条/每页",
  total: "共{total}条",
  pageClassifier: "页",
  page: "",
  prev: "",
  next: "",
  currentPage: "",
  prevPages: "",
  nextPages: "",
  deprecationWarning: "",
};
</script>

<style scoped lang="less">
.app {
  height: 100vh;
  width: 100vw;
}
</style>
