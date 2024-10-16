<script setup>
import Navbar from "./Navbar/Navbar.vue";
const isOpenNavbar = ref(false);

const closeNavbar = () => {
  isOpenNavbar.value = false;
};
provide('closeNavbar', closeNavbar);
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="header__inner">
        <NuxtLinkLocale class="header__logo" to="/">
          <img src="/logo.svg" alt="Logo" />
        </NuxtLinkLocale>
        <Navbar class="header__navbar" :isOpen="isOpenNavbar" @close="closeNavbar" />
        <div class="buttons">
          <Button text="Sign Up" className="button-sign" action="register" />
          <Button text="Log In" className="button-orange" action="login" />
        </div>
        <div class="burger" @click="isOpenNavbar = !isOpenNavbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: rgba(0, 0, 0, 0.86);
  color: $c-white;
  height: var(--header-height);
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  .wrapper {
    display: flex;
    align-items: center;
  }
  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 992px) {
      justify-content: unset;
    }
    @media (max-width: 480px){
      flex-wrap: wrap;
      gap: 15px;
    }
  }
  .header__navbar{
    @media (max-width: 992px) {
      padding-top: 40px;
    }
  }

  .header__logo{
    @media (max-width: 480px){
      width: 100%;
      img{
        max-width: 110px;
        margin: 0 auto;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: $space-30;
    @media (max-width: 992px){
      margin-left: auto;
      margin-right: 3vw;
    }
    @media (max-width: 480px){
      margin-left: unset;
      .button-orange{
        padding: 8px 18px;
      }
    }
  }
  .burger{
    display: none;
    @media (max-width: 992px) {
      width: 30px;
      height: 30px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      span{
        background: $c-white;
        height: 2px;
        border-radius: 8px;
      }
    }
    @media (max-width: 480px){
      margin-left: auto;
    }
  }
}
</style>
