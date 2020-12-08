<template>
  <div class="container">
    <div class="progress deep-purple accent-2" v-if="state.loading">
      <div class="indeterminate deep-purple lighten-5"></div>
    </div>
    <div class="row valign-wrapper" v-else-if="!state.loading && state.data">
      <div class="col s9 m-0">
        <div class="card">
          <div class="card-content">
            <a class="btn-floating halfway-fab red">
              <i class="material-icons">favorite_border</i>
            </a>
            <span class="card-title">{{ state.data.activity }}</span>
            <ul>
              <li>
                <i class="material-icons">compare_arrows</i>
                type:
                {{ state.data.type }}
              </li>
              <li>
                <i v-if="state.data.participants > 1" class="material-icons">
                  group
                </i>
                <i v-else class="material-icons">
                  person
                </i>
                participants:
                {{ state.data.participants }}
              </li>
              <li v-if="state.data.price > 0">
                <i class="material-icons">local_offer</i>
                price:
                {{ state.data.price * 10 }} / 10
              </li>
              <li v-if="state.data.link">
                <i class="material-icons">link</i>
                link:
                <a :href="state.data.link" target="_blank">
                  {{ state.data.link }}
                </a>
              </li>
              <li v-if="state.data.accessibility > 0">
                <i class="material-icons">accessibility_new</i>
                accessibility: {{ state.data.accessibility * 10 }} / 10
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col s2">
        <button
          v-on:click="getData"
          class="btn-floating btn-large deep-purple accent-2 pulse"
        >
          <i class="material-icons">redo</i>
        </button>
        {{ state.data.usedKeys }}
      </div>
    </div>
  </div>

  {{ data }}
</template>

<script>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ActivityGenerator",
  setup() {
    const store = useStore();

    const state = computed(() => store.state.activity);

    const getData = () => store.dispatch("getNewActivity");

    onBeforeMount(() => {
      getData();
    });

    return {
      getData,
      state
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
}

li {
  display: flex;
  align-items: center;
  line-height: 2rem;
  i {
    margin-right: 1rem;
  }
}
</style>
