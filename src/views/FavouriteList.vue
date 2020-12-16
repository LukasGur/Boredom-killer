<template>
  <transition-group
    enter-active-class="animate__faster animate__animated animate__fadeIn"
    leave-active-class="animate__faster animate__animated animate__fadeOut"
    mode="out-in"
  >
    <info-alert
      v-if="!favouriteActivities.length"
      title="You haven't any favourite activities."
      :routerLink="{
        to: '/activity-generator',
        text: 'Get some activity!'
      }"
      :key="1"
    />
    <div :key="2" class="favourite-wrapper">
      <activity-card
        v-for="activity in favouriteActivities"
        :key="activity.key"
        :data="activity"
      />
    </div>
  </transition-group>
</template>

<script>
// libraries
import { computed } from "vue";
import { useStore } from "vuex";
// components
import ActivityCard from "@/components/ActivityCard";
import InfoAlert from "@/components/InfoAlert";

export default {
  name: "FavouriteList",
  components: {
    ActivityCard,
    InfoAlert
  },
  setup() {
    const store = useStore();

    const favouriteActivities = computed(
      () => store.getters["user/getFavouriteActivities"]
    );

    return {
      favouriteActivities
    };
  }
};
</script>

<style lang="scss" scoped>
.favourite-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @include md {
    grid-template-columns: 1fr;
  }
}
</style>
