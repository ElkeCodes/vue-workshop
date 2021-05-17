import { Module } from "vuex";
import { GlobalState } from ".";
import { Client, defaultClient } from "../models/Client";

const clientsApiURL = "https://base-app-backend.herokuapp.com/clients";

export interface ClientsState {
  clients: Client[];
  client?: Client;
}

export const clientsModule: Module<ClientsState, GlobalState> = {
  namespaced: true,
  state: (): ClientsState => ({
    clients: [],
    client: defaultClient,
  }),
  mutations: {
    setClients(state: ClientsState, clients: Client[]) {
      state.clients = clients;
    },
    setClient(state: ClientsState, client: Client) {
      state.client = client;
    },
  },
  actions: {
    loadClients({ commit }) {
      return fetch(clientsApiURL)
        .then((response) => response.json())
        .then((clients) => commit("setClients", clients));
    },
    deleteClient({ dispatch }, id: number) {
      return fetch(`${clientsApiURL}/${id}`, {
        method: "DELETE",
      }).then(() => dispatch("loadClients"));
    },
    createClient({ commit }, client: Client) {
      return fetch(clientsApiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      }).then(() => commit("setClient", defaultClient));
    },
    editClient({ commit }, client: Client) {
      return fetch(`${clientsApiURL}/${client.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      }).then(() => commit("setClient", defaultClient));
    },
    loadClient({ commit }, id: number) {
      return fetch(`${clientsApiURL}/${id}`)
        .then((response) => response.json())
        .then((client) => commit("setClient", client));
    },
  },
};
