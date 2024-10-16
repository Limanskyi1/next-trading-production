<script setup>
defineProps({
  title: String,
  items: Array,
});
onMounted(() => {
  const triggerOptions = {
    trigger: ".trading",
    start: "100 center",
    end: "+=40%",
    scrub: true,
  };
  // ANIM IMAGE
  const imageOptions = {
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".trading__image", imageOptions);
  // ANIM INFO
  const infoOptions = {
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".trading__info", infoOptions);
});
</script>

<template>
  <section class="trading">
    <div class="wrapper">
      <div class="trading__image">
        <img src="/img/about/trading__image.webp" alt="trading image" />
      </div>
      <div class="trading__info">
        <h2>{{ title }}</h2>
        <div v-for="(item, idx) in items" :key="idx" class="trading__info-item">
          <h5>{{ item.title }}</h5>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.trading {
  padding: $space-80 0 $space-100 0;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 992px) {
      grid-template-columns: repeat(1, 0.7fr);
      justify-content: center;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  .trading__image {
    overflow: hidden;
    img {
      border-radius: 44px 0 0 44px;
      @media (max-width: 992px) {
        border-radius: 44px 44px 0 0;
      }
    }
  }
  .trading__info {
    padding: $space-45 $space-60;
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0 44px 44px 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 992px) {
      border-radius: 0 0 44px 44px;
    }
    @media (max-width: 480px) {
      padding: 30px 4vw;
    }
    h2 {
      margin-bottom: $space-35;
    }
  }
  .trading__info-item {
    &:not(:last-of-type) {
      margin-bottom: $space-40;
    }
    h5 {
      margin-bottom: clamp(12px, 1.4vw, 16px);
    }
  }
}
</style>
