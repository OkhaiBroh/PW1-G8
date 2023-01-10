import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {authService} from '../src/assets/js/AuthService.js'

import "./assets/main.css";

authService.Login();

const app = createApp(App);
app.use(router);
app.mount("#app");
