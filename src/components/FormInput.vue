<template>
  <div
    class="input__group"
    :class="{
      'input__group--icon-left': icon && !iconRight,
      'input__group--icon-right': icon && iconRight
    }"
  >
    <i v-if="icon" class="mdi input__icon" :class="'mdi-' + icon"></i>
    <input
      class="input__input"
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    icon: String,
    iconRight: Boolean,
    placeholder: String,
    type: String,
    modelValue: String,
    id: String
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.input__group {
  position: relative;
  width: 100%;
}

.input__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: $purple-dark;
}

.input__input {
  width: 100%;
  padding: 1em 2em;
  border: none;
  border-radius: 1rem 5px 1rem 5px;
  background-color: $purple-light;
  box-shadow: 5px 5px 15px -15px $gray;
}

.input__group--icon-right .input__input {
  padding-right: 3em;
}
.input__group--icon-right .input__icon {
  right: 0.8em;
}

.input__group--icon-left .input__input {
  padding-left: 3em;
}
.input__group--icon-left .input__icon {
  left: 0.8em;
}
</style>
