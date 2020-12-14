// libraries
import axios from "axios";

export default {
  namespaced: true,
  state: {
    data: null,
    usedKeys: [],
    loading: false,
    error: null,
    options: {
      type: "",
      participants: "",
      price: "",
      accessibility: ""
    },
    defaultTypeValues: [
      "education",
      "recreational",
      "social",
      "diy",
      "charity",
      "cooking",
      "relaxation",
      "music",
      "busywork"
    ]
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
    },
    CHANGE_OPTIONS(state, options) {
      state.options = options;
    }
  },
  actions: {
    getNewActivity({ dispatch, commit, state }, tryes = 0) {
      if (tryes > 5) {
        commit("SET_LOADING", false);
        commit("SET_ERROR", "No other activity with these conditions");
        return;
      }
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      commit("SET_DATA", null);

      let url = "https://www.boredapi.com/api/activity/?";

      for (const key in state.options) {
        let value = state.options[key];
        if (value) {
          if (key === "price" || key === "accessibility") {
            value = parseInt(value, 10) / 10;
          } else if (
            key === "type" &&
            !state.defaultTypeValues.includes(value)
          ) {
            commit("SET_LOADING", false);
            commit(
              "SET_ERROR",
              `Type is must be one of these values:
              ${state.defaultTypeValues.join(", ")}`
            );
            return;
          }

          url += `${key}=${value}&`;
        }
      }

      console.log(url);
      axios
        .get(url)
        .then(response => {
          response = response.data;

          if (state.usedKeys.includes(response.key)) {
            return dispatch("getNewActivity", ++tryes);
          }

          commit("SET_LOADING", false);

          if (response.error) {
            return commit("SET_ERROR", response.error || "Error");
          }

          commit("PUSH_KEY", response.key);
          commit("SET_DATA", response);
        })
        .catch(err => {
          commit("SET_ERROR", err.message || "Error");
        });
    },

    changeOtions({ commit }, options) {
      commit("CHANGE_OPTIONS", options);
    }
  },
  getters: {
    getState: state => {
      return state;
    }
  }
};
