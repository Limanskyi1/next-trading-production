<script setup>
import { useToolsThData } from "~/composables/th/useToolsThData";

const { locale } = useI18n();

const route = useRoute();

const th = computed(() => useToolsThData()[route.params.slug]);
</script>
<template>
  <div style="margin-top: var(--header-height);">
    <DynamicHead
      :title="th.head.title[locale]"
      :description="th.head.description[locale]"
    />
    <Subheader :title="th.subheader[locale]" />

    <section class="th">
      <div class="wrapper">
        <div class="th__items">
          <div v-for="(item, idx) in th.items" :key="idx" class="th__item">
            <h2 v-if="item.title">
              {{ item.title[locale] }}
            </h2>
            <iframe
              :src="item.iframe.src"
              frameborder="0"
              :style="`width: ${item.iframe.width}; height: ${item.iframe.height}px; border: none`"
              :title="item.iframe.title"
            ></iframe>
            <NuxtLinkLocale
              :to="`/instruction/${item.instruction}`"
              v-if="locale === 'ru' && item.instruction"
            >
              Инструкция
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.th {
  .th__items {
    display: grid;
    grid-gap: clamp(50px, 5.2vw, 100px);

    .th__item {
      h2 {
        text-align: center;
        margin: 0 0 clamp(24px, 2.6vw, 50px);
      }
    }
  }
}
</style>
