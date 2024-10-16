<template>
  <div class="preloader">
    <div class="preloader__loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  z-index: 999;

  .preloader__loader {
    display: inline-block;
    width: 100px;
    height: 100px;
    pointer-events: none;

    background: $c-orange;
    animation: loader 1.2s infinite ease-in-out;
  }

  @keyframes loader {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
}
</style>
