<template>
  <div class="container">
    <info-alert
      v-if="!favouriteActivities.length"
      title="You haven't any favourite activities."
      type="red"
      :routerLink="{
        to: '/activity-generator',
        text: 'Get some activity!'
      }"
    />
    <transition-group
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <activity-card
        v-for="activity in favouriteActivities"
        :key="activity.key"
        :data="activity"
        class="card"
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
  components: { ActivityCard, InfoAlert },
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
