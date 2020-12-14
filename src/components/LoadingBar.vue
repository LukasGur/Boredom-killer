<template>
  <div class="loading-wrapper">
    <div class="loading-bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.loading-wrapper {
  width: 100%;
  background-color: $purple-light;
  height: 8px;
  border-radius: 2px 5px;
  overflow: hidden;
}

.loading-bar {
  width: 30%;
  background-color: $purple;
  height: 8px;
  border-radius: 5px;
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes loading {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(333%);
  }
}
</style>
