import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

Vue.prototype.$authService = new AuthService();
app.mount("#app");

/*Vue.prototype.$token = new Token();

new Vue({

})*/

