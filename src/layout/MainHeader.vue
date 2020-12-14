<template>
  <h1 class="main-title">{{ $route.name }}</h1>
</template>

<style lang="scss" scoped>
.main-title {
  margin: 2rem 0;
  padding-bottom: 1.5rem;
  font-size: 3rem;
  border-bottom: 1px solid rgb(202, 202, 202);
  color: $purple;

  @include sm {
    font-size: 2.3rem;
  }

  @include xs {
    font-size: 2rem;
  }
}
</style>
