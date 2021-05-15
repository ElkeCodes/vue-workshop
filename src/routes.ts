import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Clients from "./views/Clients.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/clients",
    name: "clients",
    component: Clients,
  },
  { path: "/", redirect: "/clients" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
