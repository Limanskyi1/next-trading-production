<script setup>
import { useCompanyConfig } from '~/composables/useCompanyConfig';

const { company } = useCompanyConfig();

const props = defineProps({ contentData: Object });

const generateHTML = computed(() => {
  let html = '';

  for (const key in props.contentData) {
    if (props.contentData.hasOwnProperty(key)) {
      if (key.startsWith('h3_')) {
        html += `<h3>${props.contentData[key]}</h3>`;
      } else if (key.startsWith('h4_')) {
        html += `<h4>${props.contentData[key]}</h4>`;
      } else if (key.startsWith('p_') && !Array.isArray(props.contentData[key])) {
        html += `<p>${props.contentData[key]}</p>`;
      } else if (key.startsWith('p_') && Array.isArray(props.contentData[key])) {
        props.contentData[key].forEach((paragraph) => {
          html += `<p>${paragraph}</p>`;
        });
      } else if (key.startsWith('ul_') && Array.isArray(props.contentData[key])) {
        html += '<ul>';
        props.contentData[key].forEach((li) => {
          html += `<li>${li}</li>`;
        });
        html += '</ul>';
      }
    }
  }

  return html
    .replace(/\[company-name\]/g, company.value.companyName)
    .replace(/\[country\]/g, company.value.country)
    .replace(/\[address\]/g, company.value.address)
    .replace(/\[phone1\]/g, company.value.phone1)
    .replace(/\[phone2\]/g, company.value.phone2)
    .replace(/\[email\]/g, company.value.email);
});
</script>

<template>
  <div v-html="generateHTML" class="legal__content"></div>
</template>

<style scoped>
.legal__content :deep(h2),
.legal__content :deep(h3),
.legal__content :deep(h4) {
  margin: 0 0 20px;
}

.legal__content :deep(p + h2),
.legal__content :deep(p + h3),
.legal__content :deep(p + h4) {
  margin: 30px 0 20px;
}

.legal__content :deep(p) {
  margin: 14px 0 0;
}
</style>
