<template>
  <div class="card">
    <div class="card-content">
      <button
        v-if="checkIfFavourite(data.key)"
        v-on:click="removeFavourite"
        class="btn-floating halfway-fab red"
      >
        <i class="material-icons">favorite</i>
        fhewoyfweo
      </button>
      <button
        v-else
        v-on:click="setFavourite"
        class="btn-floating halfway-fab red"
      >
        <i class="material-icons">favorite_border</i>
      </button>
      <span class="card-title">{{ data.activity }}</span>
      <ul class="activity__list">
        <li class="activity__list-item">
          <i class="material-icons activity__list-item--icon">
            compare_arrows
          </i>
          type:
          {{ data.type }}
        </li>
        <li class="activity__list-item">
          <i
            v-if="data.participants > 1"
            class="material-icons activity__list-item--icon"
          >
            group
          </i>
          <i v-else class="material-icons activity__list-item--icon">
            person
          </i>
          participants:
          {{ data.participants }}
        </li>
        <li v-if="data.price > 0" class="activity__list-item">
          <i class="material-icons activity__list-item--icon">
            local_offer
          </i>
          price:
          {{ data.price * 10 }} / 10
        </li>
        <li v-if="data.link" class="activity__list-item">
          <i class="material-icons activity__list-item--icon">link</i>
          link:
          <a :href="data.link" target="_blank">
            {{ data.link }}
          </a>
        </li>
        <li v-if="data.accessibility > 0" class="activity__list-item">
          <i class="material-icons activity__list-item--icon">
            accessibility_new
          </i>
          accessibility: {{ data.accessibility * 10 }} / 10
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "ActivityCard",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    const setFavourite = () => {
      store.dispatch("newFavouriteActivity", props.data);
    };

    const removeFavourite = () => {
      store.dispatch("removeFavourite", props.data.key);
    };

    const checkIfFavourite = key => {
      return store.getters.checkIfFacouriteAcitivity(key);
    };

    return {
      setFavourite,
      removeFavourite,
      checkIfFavourite
    };
  }
};
</script>

<style lang="scss" scoped>
.activity__list-item {
  line-height: 2rem;
  &--icon {
    position: relative;
    top: 6px;
    margin-right: 0.5rem;
  }
}
</style>
