<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  className: String,
  text: String,
  action: String,
});

const { locale } = useI18n();
const domain = ref();

onMounted(() => {
  domain.value = window.location.host;
});

const url = computed(
  () =>
    `https://trade.${domain.value}/auth/${props.action}?lang=${locale.value}`
);
</script>

<template>
  <a :href="url" :class="className">{{ text }}</a>
</template>

<style lang="scss" scoped>
.button-orange {
  background: $c-orange-gradient;
  border-radius: 36px;
  padding: clamp(10px, 1.3vw, 16px) clamp(15px, 2.4vw, 33px);
  font-family: $f-family-2;
  font-size: 16px;
  text-align: center;
  color: $c-white;
  width: fit-content;
  border: 1px solid $c-orange;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
    color: $c-white;
  }
}
.button-sign {
  font-family: $f-family-2;
  font-size: clamp(15px, 1.2vw, 18px);
  color: $c-white;
  transition: color 0.3s ease;
  &:hover {
    color: $c-orange;
  }
}
</style>
