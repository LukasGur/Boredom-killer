<template>
  <!-- <i v-if="activityState.loading" class="mdi mdi-loading mdi-spin"></i> -->
  <div class="activity-wrapper">
    <form v-on:submit.prevent="getNewActivity" class="activity-form">
      <form-input
        class="activity-form__item"
        icon="compare-horizontal"
        placeholder="Type"
      />
      <form-input
        class="activity-form__item"
        icon="account-group"
        type="number"
        placeholder="Participants 1-10"
      />
      <form-input
        class="activity-form__item"
        icon="cash-multiple"
        type="number"
        placeholder="Price 0-10"
      />
      <form-input
        class="activity-form__item"
        icon="wheelchair-accessibility"
        type="number"
        placeholder="Accessibility 0-10"
      />
      <form-button
        :icon="activityState.loading ? 'loading mdi-spin' : 'arrow-right'"
        class="activity-form__button"
      >
        Get activity
      </form-button>
    </form>
    <div>
      <transition
        class="animate__faster animate__animated"
        enter-active-class="animate__fadeIn"
        leave-active-class="animate__fadeOut"
        mode="out-in"
      >
        <activity-card
          v-if="!activityState.loading && activityState.data"
          :data="activityState.data"
        />
      </transition>
    </div>
  </div>
  <!-- <div v-else-if="activityState.error">
    {{ activityState.error }}
  </div> -->
</template>

<script>
// libraries
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
// components
import ActivityCard from "@/components/ActivityCard";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";

export default {
  name: "ActivityGenerator",
  components: {
    ActivityCard,
    FormButton,
    FormInput
  },
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
