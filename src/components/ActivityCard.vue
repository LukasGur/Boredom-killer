<script>
import { useStore } from "vuex";
import FormButton from "@/components/FormButton";

export default {
  name: "ActivityCard",
  components: {
    FormButton
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    const handleFavouriteClick = key => {
      if (store.getters.checkIfFavouriteAcitivity(key)) {
        return store.dispatch("removeFavourite", props.data.key);
      }

      store.dispatch("newFavouriteActivity", props.data);
    };

    const checkIfFavourite = key => {
      if (store.getters.checkIfFavouriteAcitivity(key)) {
        return "heart";
      }
      return "heart-outline";
    };

    return {
      handleFavouriteClick,
      checkIfFavourite
    };
  }
};
</script>

<template>
  <div class="activity-card">
    <h3 class="activity-card__title">{{ data.activity }}</h3>
    <ul class="activity-card__list">
      <li class="activity-card__item">
        <i class="mdi mdi-compare-horizontal activity-card__icon"></i>
        Type:
        {{ data.type }}
      </li>
      <li class="activity-card__item">
        <i class="mdi mdi-account-group activity-card__icon"></i>
        Participants:
        {{ data.participants }}
      </li>
      <li class="activity-card__item" v-if="data.price !== 0">
        <i class="mdi mdi-cash-multiple activity-card__icon"></i>
        Price:
        {{ data.price * 10 }} / 10
      </li>
      <li class="activity-card__item" v-if="data.link">
        <i class="mdi mdi-link activity-card__icon"></i>
        Link:
        <a :href="data.link" target="_blank">{{ data.link }}</a>
      </li>
      <li class="activity-card__item" v-if="data.accessibility !== 0">
        <i class="mdi mdi-wheelchair-accessibility activity-card__icon"></i>
        Accessibility:
        {{ data.accessibility * 10 }} / 10
      </li>
    </ul>
    <form-button
      class="activity-card__linke-btn"
      v-on:click="handleFavouriteClick(data.key)"
      iconSize="24px"
      :icon="checkIfFavourite(data.key)"
    />
  </div>
</template>

<style lang="scss" scoped>
.activity-card {
  background-color: $purple-light;
  padding: 2rem 2.5rem;
  border-radius: 1.5rem 1.5rem 5px 1.5rem;
  position: relative;
  box-shadow: 5px 5px 5px -5px $gray;
}

.activity-card__title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: $purple-dark;
}

.activity-card__list {
  list-style-type: none;
}

.activity-card__item {
  line-height: 2rem;
  font-size: 1.2rem;
  color: $purple-dark;
  a {
    color: $purple-dark;
  }
}

.activity-card__icon {
  margin-right: 0.6rem;
}

.activity-card__linke-btn {
  position: absolute;
  right: 1.5rem;
  bottom: -1.2rem;
}
</style>
