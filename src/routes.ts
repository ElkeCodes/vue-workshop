import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import Clients from "./views/Clients.vue";
import CreateClient from "./views/CreateClient.vue";
import EditClient from "./views/EditClient.vue";
import Products from "./views/Products.vue";
import CreateProduct from "./views/CreateProduct.vue";
import EditProduct from "./views/EditProduct.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/products/:id/edit",
    name: "editProduct",
    components: {
      modal: EditProduct,
      default: Products,
    },
    props: {
      modal: (route: RouteLocationNormalized) => ({ id: route.params.id }),
    },
  },
  {
    path: "/products/create",
    name: "createProduct",
    component: CreateProduct,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
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
