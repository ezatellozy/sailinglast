import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scroll: "10",
    locale: Cookies.get("locale") || "ar",
    token: sessionStorage.getItem("token") || null,
    user: JSON.parse(sessionStorage.getItem("user")) || "",
  },
  mutations: {
    getScrollValue(state, paylod) {
      state.scroll = paylod;
    },
    setLocale(state, paylod) {
      state.locale = paylod;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isLogedIn(state) {
      return !!state.token;
    },
  },
});
