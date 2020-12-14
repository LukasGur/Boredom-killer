<template>
  <main-navbar />
  <div class="container">
    <main-header />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from "@/layout/MainNavbar";
import MainHeader from "@/layout/MainHeader";

export default {
  components: {
    MainNavbar,
    MainHeader
  }
};
</script>

<style lang="scss">
.container {
  margin-bottom: 3rem;
}
</style>
