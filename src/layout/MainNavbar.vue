<template>
  <nav class="main-navbar">
    <div class="main-navbar__wrapper container">
      <router-link to="/" class="main-navbar__logo">Boredom Killer</router-link>
      <div
        class="main-navbar__list"
        :class="{ 'main-navbar__list--open': mobileIsOpen }"
      >
        <router-link
          v-on:click="mobileIsOpen = !mobileIsOpen"
          class="main-navbar__item"
          to="/"
        >
          Home
        </router-link>
        <router-link
          v-on:click="mobileIsOpen = !mobileIsOpen"
          class="main-navbar__item"
          to="/activity-generator"
        >
          Get activity
        </router-link>
        <router-link
          v-on:click="mobileIsOpen = !mobileIsOpen"
          class="main-navbar__item"
          to="/favourite-list"
        >
          Favourite list
        </router-link>
      </div>
      <a
        href="#nav"
        class="main-navbar__btn-mobile"
        :class="{ 'main-navbar__btn-mobile--open': mobileIsOpen }"
        v-on:click.prevent="mobileIsOpen = !mobileIsOpen"
      >
        <div class="main-navbar__btn-mobile-burger"></div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      mobileIsOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
.main-navbar {
  background: $purple;
  position: relative;
  z-index: 1;
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
  padding: 1rem 0;

  @include xs {
    font-size: 1.5rem;
  }
}

.main-navbar__list {
  display: flex;
  list-style-type: none;

  @include md {
    height: calc(100% - 76px);
    margin-top: 76px;
    transform: translate(100%);
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: -1;
    top: 0px;
    right: 0;
    background-color: $white;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 140px;
  }

  &--open {
    transform: translate(0);
  }
}

.main-navbar__item {
  height: 100%;
  padding: 0.8rem 1rem;
  color: $white;
  text-decoration: none;
  font-size: 1rem;
  transition: 0.2s;
  border-radius: 1rem 5px;
  margin: 0 0.3rem;

  @include md {
    font-size: 2rem;
    height: 4rem;
    color: $white;
    background-color: $purple;
    margin-bottom: 2rem;
    width: 300px;
    text-align: center;
  }

  @include xs {
    width: 250px;
  }

  &:hover {
    background-color: $white;
    color: $purple;
  }
}

.main-navbar__btn-mobile {
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: none;
  border: none;
  z-index: 100;

  @include md {
    display: flex;
  }

  &--open {
    .main-navbar__btn-mobile-burger {
      transform: translateX(-100%);
      background: transparent;
    }
    .main-navbar__btn-mobile-burger::before {
      transform: rotate(45deg) translate(25px, -25px);
    }
    .main-navbar__btn-mobile-burger::after {
      transform: rotate(-45deg) translate(25px, 25px);
    }
  }
}

.main-navbar__btn-mobile-burger {
  width: 35px;
  height: 3px;
  background: $white;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 3px;
    background: $white;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: translateY(-9px);
  }

  &::after {
    transform: translateY(9px);
  }
}
</style>
