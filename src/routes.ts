import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import Clients from "./views/Clients.vue";
import CreateClient from "./views/CreateClient.vue";
import EditClient from "./views/EditClient.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/clients/:id/edit",
    name: "editClient",
    component: EditClient,
    props: (route: RouteLocationNormalized) => ({ id: +route.params.id }),
  },
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
