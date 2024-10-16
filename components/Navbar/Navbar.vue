<script setup>
import { navbarData as navsData } from "./navbarData";
import NavbarItemHasSubmenu from "./NavbarItemHasSubmenu.vue";
defineProps({ isOpen: Boolean });
const closeNavbar = inject('closeNavbar');
</script>

<template>
  <nav class="navbar" :class="{ open: isOpen }">
    <ul class="navbar__inner">
      <NavbarItemHasSubmenu parentDir="" :navData="navsData.company" />
      <NavbarItemHasSubmenu parentDir="/tools" :navData="navsData.tools" />
      <NavbarItemHasSubmenu
        parentDir="/analytics"
        :navData="navsData.analytics"
      />
      <NavbarItemHasSubmenu parentDir="/edu" :navData="navsData.edu" />
    </ul>
    <span class="close" @click="closeNavbar">x</span>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100%;
    height: 100vh;
    background: $c-black-gray;
    transition: left 0.4s ease-in-out;
    &.open {
      left: 0;
    }
  }
  .close {
    display: none;
    @media (max-width: 992px) {
      display: block;
      width: fit-content;
      font-size: 23px;
      font-weight: 700;
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
  .navbar__inner {
    display: flex;
    align-items: center;
    gap: $space-50;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
}
</style>
