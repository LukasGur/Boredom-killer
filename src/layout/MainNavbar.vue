<template>
  <nav class="deep-purple accent-2">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo">Boredom Killer</router-link>
      <ul class="right">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/activity-generator">Get activity</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar"
};
</script>
