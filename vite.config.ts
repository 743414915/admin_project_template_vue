import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import inject from "@rollup/plugin-inject";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    inject({
      $: "jquery", // 这里会自动载入 node_modules 中的 jquery
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      // 指定symbolId格式
      symbolId: "[name]",
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
