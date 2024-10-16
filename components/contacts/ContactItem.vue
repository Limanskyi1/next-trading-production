<script setup>
defineProps({
  title: String,
  image: String,
  alt: String,
  text: String,
  link: String,
});
</script>

<template>
  <div class="contact__item">
    <h4>{{ title }}</h4>
    <div class="contact__item-info">
      <img :src="image" :alt="alt" />
      <a :href="link">{{ text }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact__item {
  h4 {
    margin-bottom: 12px;
  }
  .contact__item-info {
    display: flex;
    align-items: center;
    gap: 9px;
    img {
      width: 32px;
    }
    a {
       &:hover{
         color: $c-text;
       } 
      &[href]:hover {
        cursor: pointer;
        color: $c-orange;
      }
    }
  }
}
</style>
