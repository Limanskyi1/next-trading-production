<script setup>
const { locale, locales } = useI18n();
const availableLocales = computed(() =>
  locales.value.filter((i) => i.code !== locale.value)
);
</script>

<template>
  <div class="lang-menu">
    <div class="lang-menu__select">
      <span class="selected text-menu">
        {{ locale.toUpperCase() }}
      </span>
      <span class="caret"></span>
    </div>
    <ul class="lang-menu__submenu">
      <li v-for="locale in availableLocales" :key="locale.code">
        <SwitchLocalePathLink :locale="locale.code" class="text-menu">
          {{ locale.name }}
        </SwitchLocalePathLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lang-menu {
  position: relative;

  &:hover {
    .lang-menu__select {
      border: 2px solid #d83b3b;
      box-shadow: 0 0 0.8em #d83b3b;
      background: #323741;

      .caret {
        transform: rotate(180deg);
      }
    }

    .lang-menu__submenu {
      opacity: 1;
      visibility: visible;
    }
  }

  .lang-menu__select {
    background: #4d4d4d;
    color: $c-white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border: 2px solid #4d4d4d;
    border-radius: 0.5em;
    padding: 0.6em;
    cursor: pointer;
    transition: $transition-main;

    .caret {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid $c-white;
      transition: $transition-main;
    }
  }

  .lang-menu__submenu {
    padding: 0.3em;
    background: #323741;
    border: 1px solid #363a43;
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
    border-radius: 0.5em;
    color: #9fa5b5;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    transition: $transition-main;
    z-index: 1;

    opacity: 0;
    visibility: hidden;

    li {
      :deep(a) {
        display: block;
        padding: 0.3em 0;
        border-radius: 0.5em;
        cursor: pointer;
        text-align: center;
        transition: $transition-main;

        &:hover {
          color: #2a2f3b;
          background: $c-white;
        }
      }
    }
  }
}
</style>
