<script setup>
defineProps({
  title: String,
  items: Array,
});

onMounted(() => {
  const triggerOptions = {
    trigger: ".evolution",
    start: "200 center",
    end: "+=40%",
    scrub: true,
  };
  // ANIM ITEMS
  const itemsOptions = {
    x: -40,
    opacity: 0,
    stagger: 1,
    duration: 2,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".evolution__item", itemsOptions);
  // ANIM DIVIDER
  const dividerOptions = {
    clipPath: "inset(0 100% 0 0)",
    duration: 2,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".evolution .divider", dividerOptions);
});
</script>
<template>
  <section class="evolution">
    <div class="wrapper">
      <h2>{{ title }}</h2>
      <div class="evolution__items">
        <template v-for="(item, idx) in items" :key="idx">
          <div class="evolution__item">
            <div class="evolution__item-year">
              <span>{{ item.year }}</span>
            </div>
            <p>{{ item.text }}</p>
          </div>
          <img
            v-if="idx === 1"
            class="divider"
            src="/img/about/divider.svg"
            alt="divider"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.evolution {
  padding: $space-110 0 $space-80 0;
  h2 {
    max-width: 717px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: $space-60;
  }
  .evolution__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .divider {
      grid-column: span 2;
      width: 76%;
      margin: 0 auto;
      @media (max-width: 992px) {
        display: none;
      }
    }
  }
  .evolution__item {
    width: 53.5%;
    display: flex;
    align-items: center;
    gap: $space-30;
    @media (max-width: 1200px) {
      width: 65%;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
    &:nth-of-type(2) {
      margin-left: 3%;
      @media (max-width: 992px) {
        margin-left: unset;
      }
    }
    &:nth-of-type(3) {
      margin-left: 40%;
      @media (max-width: 992px) {
        margin-left: unset;
      }
    }
    &:last-of-type {
      margin-left: auto;
      @media (max-width: 992px) {
        margin-left: unset;
      }
    }
  }
  .evolution__item-year {
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 24px;
    width: fit-content;
    width: 120px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    @media (max-width: 480px) {
      width: 100px;
    }
    span {
      font-family: $f-family-1;
      font-weight: 500;
      font-size: 28px;
      line-height: 110%;
      text-transform: uppercase;
      text-align: center;
      color: $c-orange;
    }
  }
}
</style>
