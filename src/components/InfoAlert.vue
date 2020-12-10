<template>
  <div class="alert" :class="'alert--' + type">
    <i class="alert__icon material-icons">info_outline</i>
    <div>
      <h4 v-if="title" class="alert__title">{{ title }}</h4>
      <p v-if="text" class="alert__text">{{ text }}</p>
      <router-link class="btn red" v-if="routerLink" :to="routerLink.to">
        {{ routerLink.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoAlert",
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

<style lang="scss" scope>
.alert {
  border: 1px solid gray;
  background: rgb(223, 223, 223);
  border-radius: 10px;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  margin: 2rem 0;
}

.alert__title {
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}

.alert__text {
  color: black;
  font-size: 1.3rem;
  margin: 0;
}

.alert__icon {
  font-size: 3rem;
  margin-right: 1.5rem;
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
