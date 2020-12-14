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
select {
  display: inline-block;
}

#app {
  min-height: 100vh;
}

.m-0 {
  margin: 0 !important;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2rem;
  transition: 2s;
}
</style>
