import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import AuthService from "../src/assets/js/AuthService.js";

import "./assets/main.css";

VueElement.prototype.$authService = AuthService;

const app = createApp(App);
app.use(router);
app.mount("#app");
