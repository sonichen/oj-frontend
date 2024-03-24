// initial state
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "not login",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      // TODO
      commit("updateUser", { userName: "soni" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
