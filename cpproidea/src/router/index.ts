import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  
  {
    path:"/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  
  {
    path:"/pricing",
    name: "Pricing",
    component: () => import("@/views/Pricing.vue"),
  },

  {
    path:"/faq",
    name: "FAQ",
    component: () => import("@/views/FAQ.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
