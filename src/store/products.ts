import { Module } from "vuex";
import { GlobalState } from ".";
import { Product, defaultProduct } from "../models/Product";

const productsApiURL = "https://base-app-backend.herokuapp.com/products";

export interface ProductsState {
  products: Product[];
  product?: Product;
}

export const productsModule: Module<ProductsState, GlobalState> = {
  namespaced: true,
  state: (): ProductsState => ({
    products: [],
    product: defaultProduct,
  }),
  mutations: {
    setProducts(state: ProductsState, products: Product[]) {
      state.products = products;
    },
    setProduct(state: ProductsState, product: Product) {
      state.product = product;
    },
  },
  actions: {
    loadProducts({ commit }) {
      return fetch(productsApiURL)
        .then((response) => response.json())
        .then((products) => commit("setProducts", products));
    },
    deleteProduct({ dispatch }, id: string) {
      return fetch(`${productsApiURL}/${id}`, {
        method: "DELETE",
      }).then(() => dispatch("loadProducts"));
    },
    createProduct({ commit }, product: Product) {
      return fetch(productsApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then(() => commit("setProduct", defaultProduct));
    },
    editProduct({ commit }, product: Product) {
      return fetch(`${productsApiURL}/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then(() => commit("setProduct", defaultProduct));
    },
    loadProduct({ commit }, id: string) {
      return fetch(`${productsApiURL}/${id}`)
        .then((response) => response.json())
        .then((product) => commit("setProduct", product));
    },
  },
};
