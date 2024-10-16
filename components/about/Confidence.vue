<script setup>
defineProps({
  title: String,
  items: Array,
});

onMounted(() => {
  const triggerOptions = {
    trigger: ".confidence",
      start: "100 center",
      end: "+=40%",
      scrub: true,
  }
  // ANIM TITLE
  const titleOptions = {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".confidence h2", titleOptions);
  // ANIM SVG
  const svgOptions = {
    duration: 1,
    clipPath: "inset(100% 100% 100% 100%)",
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".confidence__svg", svgOptions);
  // ANIM ITEMS
  const itemsOptions = {
    duration: 1,
    scale:0,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".confidence__item", itemsOptions);
});
</script>

<template>
  <section class="confidence">
    <div class="wrapper">
      <h2>{{ title }}</h2>
      <img class="confidence__svg" src="/img/about/confidence__svg.svg" />
      <div class="confidence__items">
        <img class="grad grad-1" src="/img/account/grad.png" />
        <img class="grad grad-2" src="/img/account/grad.png" />
        <div v-for="(item, idx) in items" :key="idx" class="confidence__item">
          <div class="confidence__item-icon">
            <img :src="item.icon" />
            <img src="/img/home/line.svg" />
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.confidence {
  padding: $space-200 0 $space-100 0;

  h2 {
    text-align: center;
    margin-bottom: 10px;
  }

  .confidence__svg {
    width: 50%;
    margin: 0 auto;
    @media (max-width: 576px) {
      width: 80%;
    }
  }
  .confidence__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 33px;
    position: relative;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .grad {
      position: absolute;
      width: 120px;
      height: 120px;
      &-1 {
        top: -15%;
        left: -5%;
        @media (max-width: 768px) {
          top: 15%;
        }
      }
      &-2 {
        bottom: -19%;
        right: -4%;
        @media (max-width: 768px) {
          bottom: 20%;
        }
      }
    }
  }
  .confidence__item {
    border-radius: 36px;
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    padding: $space-45;

    &:nth-of-type(3) {
      @media (max-width: 992px) {
        grid-column: span 2;
        width: 50%;
        margin: 0 auto;
      }
      @media (max-width: 768px) {
        grid-column: span 1;
        width: 100%;
      }
    }
    h4 {
      margin-bottom: 16px;
    }
  }
  .confidence__item-icon {
    width: 50%;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    img:first-of-type {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
