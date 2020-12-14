<template>
  <div class="activity-wrapper">
    <form v-on:submit.prevent="getNewActivity" class="activity-form">
      <form-input
        class="activity-form__item"
        icon="compare-horizontal"
        placeholder="Type"
        v-model="activityOptions.type"
      />
      <form-input
        class="activity-form__item"
        icon="account-group"
        type="number"
        placeholder="Participants 1-n"
        v-model="activityOptions.participants"
        :min="1"
      />
      <form-input
        class="activity-form__item"
        icon="cash-multiple"
        type="number"
        placeholder="Price 0-10"
        v-model="activityOptions.price"
        :min="0"
        :max="10"
      />
      <form-input
        class="activity-form__item"
        icon="wheelchair-accessibility"
        type="number"
        placeholder="Accessibility 0-10"
        v-model="activityOptions.accessibility"
        :min="0"
        :max="10"
      />
      <form-button
        :icon="activityState.loading ? 'loading mdi-spin' : 'arrow-right'"
        class="activity-form__button"
      >
        Get activity
      </form-button>
    </form>
    <div>
      <transition-group
        enter-active-class="animate__faster animate__animated animate__fadeIn"
        leave-active-class="animate__faster animate__animated animate__fadeOut"
        mode="out-in"
      >
        <activity-card
          v-if="!activityState.loading && activityState.data"
          :data="activityState.data"
        />
        <info-alert
          v-if="activityState.error"
          title="Ouch!"
          :text="activityState.error"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
// libraries
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
// components
import ActivityCard from "@/components/ActivityCard";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import InfoAlert from "@/components/InfoAlert.vue";

export default {
  name: "ActivityGenerator",
  components: {
    ActivityCard,
    FormButton,
    FormInput,
    InfoAlert
  },
  setup() {
    const store = useStore();

    const activityState = computed(() => store.getters["activity/getState"]);
    const activityOptions = activityState.value.options;
    const getNewActivity = () => store.dispatch("activity/getNewActivity");
    onBeforeMount(() => {
      getNewActivity();
    });

    return {
      // methods
      getNewActivity,
      // variables
      activityState,
      activityOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.activity-wrapper {
  display: grid;
  grid-template-columns: 40% auto;
  gap: 3rem;
}

.activity-form {
  display: flex;
  flex-direction: column;
}

.activity-form__item {
  margin-bottom: 1rem;
}

.activity-form__button {
  width: fit-content;
  margin-left: auto;
}
</style>
