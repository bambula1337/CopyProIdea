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
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    children: [
      {
        path: "company",
        component: () => import("@/views/Company.vue"),
      },
      {
        path: "leadership",
        component: () => import("@/views/About.vue"),
      }

    ]
  },
  {
    path:"/default",
    name: "Default",
    component: () => import("@/views/Default.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
