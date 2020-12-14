<template>
  <component :is="type" :to="to" class="button">
    <slot></slot>
    <i v-if="icon" :class="'mdi mdi-' + icon + ' mdi-' + iconSize"></i>
  </component>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    icon: String,
    iconSize: String,
    to: String
  },
  computed: {
    type() {
      return this.to ? "router-link" : "button";
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: none;
  background-color: $purple;
  color: $white;
  padding: 0.8rem 1.2rem;
  border-radius: 5px 1rem;
  text-decoration: none;
  display: inline-block;
  box-shadow: 5px 5px 5px -5px $gray;
  cursor: pointer;
}
</style>
