<template>
  <transition
    class="animate__faster animate__animated"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
  >
    <info-alert
      v-if="!favouriteActivities.length"
      title="You haven't any favourite activities."
      :routerLink="{
        to: '/activity-generator',
        text: 'Get some activity!'
      }"
    />
  </transition>
  <div class="two-columns">
    <transition-group
      enter-active-class="animate__animated animate__faster  animate__fadeIn"
      leave-active-class="animate__animated animate__faster  animate__fadeOut"
      appear
      name="animate"
    >
      <activity-card
        v-for="(activity, i) in favouriteActivities"
        :key="activity.activity"
        v-bind:data-index="i"
        :data="activity"
      />
    </transition-group>
  </div>
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

    const favouriteActivities = computed(() => {
      return store.state.user.favouriteActivities;
    });

    return {
      favouriteActivities
    };
  }
};
</script>
