export default {
  state: {
    user: null,
    favouriteActivities: [
      {
        accessibility: 0.4,
        activity: "Go to a concert with some friends",
        key: "4558850",
        link: "",
        participants: 4,
        price: 0.6,
        type: "social"
      },
      {
        accessibility: 0,
        activity: "Start a daily journal",
        key: "8779876",
        link: "",
        participants: 1,
        price: 0,
        type: "relaxation"
      },
      {
        accessibility: 0.1,
        activity: "Volunteer at your local food bank",
        key: "2055368",
        link: "",
        participants: 1,
        price: 0,
        type: "charity"
      }
    ]
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
    checkIfFavouriteAcitivity: state => key => {
      if (state.favouriteActivities.find(x => x.key === key)) {
        return true;
      }

      return false;
    }
  }
};
