// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        alias: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "menu",
        name: "Menu",
        component: () => import("@/views/Menu.vue"),
      },
      {
        path: "location",
        name: "Location",
        component: () => import("@/views/Location.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        component: () => import("@/views/Cart.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
