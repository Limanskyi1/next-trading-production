<script setup>
import Confidence from "~/components/about/Confidence.vue";
import Evolution from "~/components/about/Evolution.vue";
import Intro from "~/components/about/Intro.vue";
import Trading from "~/components/about/Trading.vue";
import Successful from "~/components/about/Successful.vue";
//
import { useTranslations } from "~/composables/useTranslations";
const { data, isDataReady } = useTranslations();
</script>

<template>
  <div v-if="isDataReady">
    <DynamicHead
      :title="data.head.title"
      :description="data.head.description"
    />
    <Intro
      :title="data.intro.title"
      :texts="data.intro.texts"
      :btnText="data.intro.btnText"
    />
    <Confidence 
      :title="data.confidence.title" 
      :items="data.confidence.items" />
    <Evolution 
      :title="data.evolution.title" 
      :items="data.evolution.items" />
    <Trading :title="data.trading.title" :items="data.trading.items"/>
    <Successful 
      :title="data.successful.title" 
      :btnText="data.successful.btnText" 
      :items="data.successful.items"/>
  </div>
  <Preloader v-else />
</template>
