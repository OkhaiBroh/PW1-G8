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
      path: "/register-account",
      name: "register account",
      component: () => import("../views/RegisterViewStep1.vue"),
    },
    {
      path: "/register-security",
      name: "register security",
      component: () => import("../views/RegisterViewStep2.vue"),
    },
    {
      path: "/register-successful",
      name: "register successful",
      component: () => import("../views/RegisterViewStep3.vue"),
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
      path: "/create-event-1",
      name: "create event 1",
    
      component: () => import("../views/CreateEventViewStep1.vue"),
    },
    {
      path: "/create-event-3",
      name: "create event 3",
    
      component: () => import("../views/CreateEventViewStep3.vue"),
    },
  ],
});

export default router;
