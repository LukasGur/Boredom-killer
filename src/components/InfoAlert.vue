<template>
  <div class="alert" :class="type ? 'alert--' + type : ''">
    <i class="alert__icon mdi mdi-information-outline"></i>
    <div>
      <h4 v-if="title" class="alert__title">{{ title }}</h4>
      <p v-if="text" class="alert__text">{{ text }}</p>
      <form-button v-if="routerLink" :to="routerLink.to">
        {{ routerLink.text }}
      </form-button>
    </div>
  </div>
</template>

<script>
import FormButton from "@/components/FormButton";

export default {
  name: "InfoAlert",
  components: {
    FormButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String
    },
    type: {
      type: String
    },
    routerLink: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  border: 1px solid $purple;
  background: $purple-light;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  align-items: center;
}

.alert__title {
  color: $purple;
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}

.alert__text {
  color: $purple;
  font-size: 1.3rem;
  margin: 0;
}

.alert__icon {
  font-size: 3rem;
  margin-right: 2rem;
  color: $purple;
}

.alert--red {
  background-color: rgb(255, 221, 221);
  border-color: red;

  .alert__title,
  .alert__text,
  .alert__icon {
    color: red;
  }
}
</style>
