<script setup>
defineProps({
  items: Array,
});
onMounted(() => {
  // ANIM ITEMS
  const itemsOptions = {
    x: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
      trigger: ".advantages",
      start: "-100 center",
      end: "+=30%",
      scrub: true,
    },
  }
  useGsap.from(".advantages__item",itemsOptions);
  // ANIM GRAD
  const gradOptions = {
    scale:0,
    opacity: 0,
    stagger: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".advantages",
      start: "-100 center",
      end: "+=50%",
      scrub: true,
    },
  }
  useGsap.from(".grad",gradOptions);
})
</script>

<template>
  <section class="advantages">
    <img class="grad grad-1" src="/img/account/grad.png" />
    <img class="grad grad-2" src="/img/account/grad.png" />
    <div class="wrapper">
      <div v-for="(item, idx) in items" :key="idx" class="advantages__item">
        <div class="advantages__item-icon">
          <img :src="item.image" />
          <img src="/img/home/line.svg" />
        </div>
        <h5>{{ item.title }}</h5>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.advantages {
  padding: $space-90 0;
  position: relative;
  .grad {
    position: absolute;
    width: 120px;
    height: 120px;
    &-1 {
      top: 5%;
      left: 6%;
    }
    &-2 {
      bottom: 1%;
      right: 5%;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: 0.8fr;
      justify-content: center;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  .advantages__item {
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
    h5 {
      margin-bottom: 16px;
    }
  }
  .advantages__item-icon {
    width: 80%;
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
