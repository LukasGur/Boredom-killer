<template>
  <nav class="main-navbar">
    <div class="main-navbar__wrapper container">
      <router-link to="/" class="main-navbar__logo">Boredom Killer</router-link>
      <div class="main-navbar__list">
        <router-link class="main-navbar__item" to="/">
          Home
        </router-link>
        <router-link class="main-navbar__item" to="/activity-generator">
          Get activity
        </router-link>
        <router-link class="main-navbar__item" to="/favourite-list">
          Favourite list
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar"
};
</script>

<style lang="scss" scoped>
.main-navbar {
  background-color: $purple;
}

.main-navbar__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-navbar__logo {
  font-size: 2rem;
  color: $white;
  font-weight: bold;
  text-decoration: none;
}

.main-navbar__list {
  display: flex;
  list-style-type: none;
}

.main-navbar__item {
  height: 100%;
  padding: 0.8rem 1rem;
  color: $white;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.2s;
  border-radius: 1rem 5px;
  margin: 0.8rem 0.3rem;

  &:hover {
    background-color: $white;
    color: $purple;
  }
}
</style>
