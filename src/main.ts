import { createApp } from "vue";
import "@/assets/css/index.less";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "3dm-im-components/lib/style.css";
import registerIcons from "./global/register-icon";
import { installSvgIcon } from "./icons";
import $ from "jquery";

const app = createApp(App);

app.use(registerIcons);
app.use(installSvgIcon);
app.use(router);
app.use(pinia);
app.use($);

app.mount("#app");
