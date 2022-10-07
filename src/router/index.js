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
      path: "/messages",
      name: "messages",
    
      component: () => import("../views/MessagesView.vue"),
    },
    {
      path: "/events",
      name: "events",
    
      component: () => import("../views/EventsView.vue"),
    },
    {
      path: "/friends",
      name: "friends",
    
      component: () => import("../views/FriendsView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
    
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/home",
      name: "home",
    
      component: () => import("../views/HomeView.vue"),
    },


  ],
});

export default router;
