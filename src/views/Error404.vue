<template>
  <p>This page could not be found.</p>
  <div class="buttons-wrapper">
    <form-button to="/">
      Home
    </form-button>
    <form-button to="/activity-generator">
      Get activity
    </form-button>
  </div>
</template>

<script>
import FormButton from "../components/FormButton.vue";

export default {
  name: "Error404",
  components: { FormButton }
};
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  margin-top: 1rem;
  > * {
    margin-right: 1rem;
  }
}
</style>
