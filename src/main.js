import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import {authService} from '../src/assets/js/AuthService.js'

import "./assets/main.css";

authService.Login();

const app = createApp(App);
app.use(router);
app.mount("#app");

/*Vue.prototype.$token = new Token();

new Vue({

})*/

