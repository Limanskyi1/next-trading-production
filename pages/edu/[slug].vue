<script setup>
import { useEduThData } from "~/composables/th/useEduThData";
import { useIframeUtils } from "~/composables/th/useIframeUtils";

const { locale } = useI18n();
const route = useRoute();
const th = computed(() => useEduThData()[route.params.slug]);

const { iframeHeight } = useIframeUtils();
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
        <iframe
          :src="th.iframe.src"
          frameborder="0"
          :style="`width: ${th.iframe.width}; height: ${
            iframeHeight || th.iframe.height
          }px; border: none`"
          :title="th.iframe.title"
        ></iframe>
      </div>
    </section>
  </div>
</template>
