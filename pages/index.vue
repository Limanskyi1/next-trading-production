<script setup>
import Hero from "~/components/home/Hero.vue";
import Advantages from "~/components/home/Advantages.vue";
import Derivatives from "~/components/home/Derivatives.vue";
import Education from "~/components/home/Education.vue";
import Benefits from "~/components/home/Benefits.vue";
import Investments from "~/components/home/Investments.vue";
import Journey from "~/components/home/Journey.vue";
//
import { useTranslations } from "~/composables/useTranslations";
const { data, isDataReady } = useTranslations();
</script>

<template>
  <div v-if="isDataReady">
    <DynamicHead
      :title="data?.head?.title"
      :description="data?.head?.description"
    />
    <Hero
      :title="data?.hero?.title"
      :subtitle="data?.hero?.subtitle"
      :description="data?.hero?.text"
      :btnText="data?.hero?.btn"
    />
    <Advantages :items="data?.advantages?.items" />
    <Derivatives
      :title="data?.derivatives?.title"
      :btnText="data?.derivatives?.btnText"
      :items="data?.derivatives?.items"
    />
    <Education
      :title="data?.education?.title"
      :texts="data?.education?.texts"
    />
    <Benefits :title="data?.benefits?.title" :items="data?.benefits?.items" />
    <Investments
      :title="data?.investments?.title"
      :desc="data?.investments?.desc"
      :list="data?.investments?.list"
    />
    <Journey :title="data?.journey?.title" :btnText="data?.journey?.btnText" />
  </div>
  <Preloader v-else />
</template>
