import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register-account",
      name: "register account",
      component: () => import("../views/RegisterViewStep1.vue"),
    },
    {
      path: "/register-security",
      name: "register security",
      component: () => import("../views/RegisterViewStep2.vue"),
    },
  ],
});

export default router;
