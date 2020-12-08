// libraries
import axios from "axios";

export default {
  state: {
    data: "null",
    usedKeys: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_LOADING(state, status) {
      state.loading = status;
    },
    PUSH_KEY(state, key) {
      state.usedKeys.push(key);
    },
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_ERROR(state, error) {
      state.error = error;
    }
  },
  actions: {
    getNewActivity({ dispatch, commit, state }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      commit("SET_DATA", null);

      axios
        .get("https://www.boredapi.com/api/activity/")
        .then(response => {
          response = response.data;
          if (state.usedKeys.includes(response.key)) {
            console.log("ale neee");
            return dispatch("getNewActivity");
          }
          console.log(state.data);

          commit("SET_LOADING", false);
          commit("PUSH_KEY", response.key);
          commit("SET_DATA", response);
        })
        .catch(err => {
          commit("SET_ERROR", err.message || "Error");
        });
    }
  }
};
