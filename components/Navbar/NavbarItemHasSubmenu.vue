<script setup>
const props = defineProps({ navData: Object, parentDir: String });
const { locale } = useI18n();

const { platformLink } = useRuntimeConfig().public;
const closeNavbar = inject('closeNavbar');
</script>

<template>
  <li class="navbar__item">
    <p class="navbar__item--main">
      <span> {{ navData.main[locale] }} </span>
      <span class="caret"></span>
    </p>
    <div class="navbar__submenu">
      <NuxtLinkLocale
        v-for="(item, key, idx) in navData.submenu"
        :key="idx"
        :to="key === 'platform' ? platformLink : `${parentDir}/${key}`"
        class="navbar__link"
        @click="closeNavbar"
      >
        {{ item[locale] }}
      </NuxtLinkLocale>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.navbar__item {
  position: relative;

  &:hover {
    .navbar__item--main {
      .caret {
        transform: rotate(180deg);
      }
    }

    .navbar__submenu {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      @media (max-width: 992px) {
        transform: unset;
        max-height: 350px;
        padding: 8px;
      }
    }
  }

  .navbar__item--main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    padding: 16px 0;
    cursor: pointer;

    @media (max-width: 992px) {
      justify-content: center;
      gap: 10px;
      padding: 0;
    }

    .caret {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid $c-white;
      transition: $transition-main;
    }
  }

  .navbar__submenu {
    position: absolute;
    top: 100%;
    left: 0;
    width: fit-content;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: $c-black-gray;
    border: 1px solid $c-orange;
    box-shadow: 0px 2px 4px 0px $c-orange;
    transform: translateY(30px);
    transition: $transition-main;
    z-index: 1;
    opacity: 0;
    visibility: hidden;

    @media (max-width: 992px) {
      padding: 0;
      position: static;
      transform: unset;
      border: unset;
      box-shadow: unset;
      max-height: 0px;
      overflow: hidden;
      padding: 0 8px;
      text-align: center;

    }

    .navbar__link {
      text-wrap: nowrap;
    }
  }
}
</style>
