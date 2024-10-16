<script setup>
defineProps({
  title: String,
  items: Array,
});
onMounted(() => {
  const triggerOptions = {
    trigger: ".benefits",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
  };
  // ANIM ITEMS
  const itemsOptions = {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger:0.3,
    scrollTrigger: triggerOptions,
  }
  useGsap.from(".benefits__item",itemsOptions);
  // ANIM TITLE
  const titleOptions = {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger:0.3,
    scrollTrigger: triggerOptions,
  }
  useGsap.from(".benefits h2",titleOptions);
})
</script>

<template>
  <section class="benefits">
    <img class="grad grad-1" src="/img/home/grad-3.webp" />
    <div class="wrapper">
      <h2>{{ title }}</h2>
      <div class="benefits__items">
        <div v-for="(item, idx) in items" :key="idx" class="benefits__item">
          <div class="benefits__item-icon">
            <img :src="item.icon" />
          </div>
          <h5>{{ item.name }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.benefits {
  padding: $space-50 0;
  position: relative;
  .grad {
    width: 130px;
    height: 130px;
    &-1 {
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  h2 {
    max-width: 496px;
    margin: 0 auto;
    margin-bottom: $space-40;
    text-align: center;
    @media (max-width: 768px){
      max-width: unset;
    }
  }
  .wrapper {
  }
  .benefits__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 0.4fr);
      justify-content: center;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  .benefits__item {
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    padding: $space-40 $space-60;
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-30;
  }
  .benefits__item-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $space-20;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(45.35303497314453px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
  }
}
</style>
