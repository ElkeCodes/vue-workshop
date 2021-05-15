import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Clients from "./views/Clients.vue";
import CreateClient from "./views/CreateClient.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/clients/create",
    name: "createClient",
    component: CreateClient,
  },
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
