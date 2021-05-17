import { createLogger, createStore } from "vuex";
import { clientsModule } from "./clients";

export interface GlobalState {
  isReadOnly: boolean;
}

export const store = createStore({
  state: (): GlobalState => ({
    isReadOnly: true,
  }),
  getters: {
    isLocked(state: GlobalState) {
      return state.isReadOnly;
    },
    isUnlocked(state: GlobalState) {
      return !state.isReadOnly;
    },
  },
  mutations: {
    toggleLock(state: GlobalState) {
      state.isReadOnly = !state.isReadOnly;
    },
  },
  actions: {
    toggleLock({ commit }) {
      commit("toggleLock");
    },
  },
  modules: {
    clients: clientsModule,
  },
  plugins: import.meta.env.NODE_ENV !== "production" ? [createLogger()] : [],
});
