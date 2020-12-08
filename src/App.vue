<template>
  <main-navbar />
  <router-view />
</template>

<script>
import MainNavbar from "@/layout/MainNavbar";
export default {
  components: {
    MainNavbar
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

.m-0 {
  margin: 0 !important;
}
</style>
