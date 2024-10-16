<script setup>
import { useHead } from '#app';

const { companyName } = useRuntimeConfig().public;

useHead({
  meta: [
    { name: 'title', content: companyName },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
