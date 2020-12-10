<template>
  <div class="container">
    <div class="progress deep-purple accent-2" v-if="activityState.loading">
      <div class="indeterminate deep-purple lighten-5"></div>
    </div>
    <div
      class="row valign-wrapper"
      v-else-if="!activityState.loading && activityState.data"
    >
      <div class="col s9 m-0">
        <activity-card :data="activityState.data" :neco="'honvo'" />
      </div>
      <div class="col s2">
        <button
          v-on:click="getNewActivity"
          class="btn-floating btn-large deep-purple accent-2"
        >
          <i class="material-icons">redo</i>
        </button>
      </div>
    </div>
    <div v-else-if="activityState.error">
      {{ activityState.error }}
    </div>
  </div>
</template>

<script>
// libraries
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
// components
import ActivityCard from "@/components/ActivityCard";

export default {
  name: "ActivityGenerator",
  components: { ActivityCard },
  setup() {
    const store = useStore();

    const activityState = computed(() => store.state.activity);

    const getNewActivity = () => store.dispatch("getNewActivity");

    onBeforeMount(() => {
      getNewActivity();
    });

    return {
      // methods
      getNewActivity,
      // variables
      activityState
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2rem;
}
</style>
