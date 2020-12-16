// libraries
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// modules
import activity from "./Activity.js";
import user from "./User.js";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    activity,
    user
  },
  plugins: [createPersistedState()]
});
