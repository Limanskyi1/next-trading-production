<script setup>
const props = defineProps({ title: String });
</script>

<template>
  <div class="subheader">
    <h2>{{ props.title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.subheader {
  height: clamp(200px,27vw,337px);
  color: $c-white;
  background: #787878;
  text-align: center;
  padding: $space-50 0;
  background: url(../assets/img/subheader/subheader__bg.webp) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
