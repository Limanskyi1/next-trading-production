<script setup>
import { useInstructionData } from '~/composables/th/useInstructionData';
import { useIframeUtils } from '~/composables/th/useIframeUtils';

const { iframeHeight } = useIframeUtils();

const { locale, setLocale } = useI18n();
const route = useRoute();
const instruction = computed(() => useInstructionData()[route.params.slug]);

const msgs = {
  de: 'Entschuldigung! Die Anweisungen sind nur auf Russisch verfügbar.',
  en: 'Sorry! The instructions are only available in Russian.',
  fr: "Désolé ! Les instructions ne sont disponibles qu'en russe.",
  ru: 'Извините! Инструкции доступны только на русском языке.',
};

watch(locale, (newLocale, oldLocale) => {
  if (newLocale !== 'ru') {
    setLocale('ru');

    alert(msgs[newLocale] ? msgs[newLocale] : msgs['en']);
  }
});
</script>

<template>
  <section class="th-instruction">
    <div class="wrapper">
      <iframe
        v-if="locale === 'ru'"
        :src="instruction.iframe.src"
        frameborder="0"
        :style="`width: ${instruction.iframe.width}; height: ${
          iframeHeight || instruction.iframe.height
        }px; border: none`"
        :title="instruction.iframe.title"
      ></iframe>
      <p v-else>
        {{ msgs[locale] }}
      </p>
    </div>
  </section>
</template>
