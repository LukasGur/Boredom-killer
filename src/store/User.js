export default {
  state: {
    user: null,
    favouriteActivities: []
  },
  mutations: {
    PUSH_FAVOURITE_ACTIVITY(state, activity) {
      state.favouriteActivities.push(activity);
    },
    REMOVE_FAVOURITE(state, key) {
      state.favouriteActivities = state.favouriteActivities.filter(x => {
        return x.key != key;
      });
    }
  },
  actions: {
    newFavouriteActivity({ commit, state }, activity) {
      if (!state.favouriteActivities.includes(activity)) {
        commit("PUSH_FAVOURITE_ACTIVITY", activity);
      }
    },

    removeFavourite({ commit }, key) {
      commit("REMOVE_FAVOURITE", key);
    }
  },
  getters: {
    checkIfFacouriteAcitivity: state => key => {
      if (state.favouriteActivities.find(x => x.key === key)) {
        return true;
      }

      return false;
    }
  }
};
