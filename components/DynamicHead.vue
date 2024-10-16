<script setup>
import { useCompanyConfig } from '~/composables/useCompanyConfig';
const { company } = useCompanyConfig();

const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <Head>
    <Title> {{ company.companyName }} | {{ props.title }} </Title>
    <Meta name="description" :content="props.description ? props.description : ''" />
  </Head>
</template>
