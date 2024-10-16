<script setup>
defineProps({
    title: String,
    btnText: String,
    items: Array,
})
onMounted(() => {
  const triggerOptions = {
    trigger: ".successful",
      start: "100 center",
      end: "+=40%",
      scrub: true,
  }
  // ANIM LEFT SIDE
  const leftOptions = {
    duration: 1,
    clipPath: "inset(0 100% 0 0)",
    scrollTrigger: triggerOptions,
  }
  useGsap.from(".successful__left",leftOptions);
  // ANIM ITEMS
  const itemsOptions = {
    duration: 1,
    opacity:0,
    y: 20,
    stagger:1,
    scrollTrigger: triggerOptions,
  }
  useGsap.from(".successful__item",itemsOptions);


})
</script>

<template>
  <section class="successful">
    <div class="wrapper">
      <div class="successful__left">
        <h2>{{ title }}</h2>
        <Button
          :text="btnText"
          className="button-orange"
          action="register"
        />
      </div>
      <div class="successful__items">
        <div v-for="(item, idx) in items" :key="idx" class="successful__item">
          <span>{{ item.title }}</span>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.successful {
  padding: $space-100 0;
  .wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px){
      flex-direction: column-reverse;
      gap: 30px;
    }
  }
  .successful__left {
    display: flex;
    flex-direction: column;
    gap: $space-40;
    width: 35%;
    @media (max-width: 768px){
      width: 40%;
    }
    @media (max-width: 576px){
      align-items: center;
      width: 100%;
      text-align: center;

    }
  }
  .successful__items {
    width: 38%;
    display: flex;
    flex-direction: column;
    gap: $space-70;
    @media (max-width: 576px){
      align-items: center;
      width: 100%;
      text-align: center;
    }
  }
  .successful__item {
    display: flex;
    flex-direction: column;
    gap: $space-25;
    span {
      font-family: $f-family-1;
      font-weight: 500;
      font-size: clamp(30px, 5vw, 70px);
      letter-spacing: 0.06em;
    }
    &:first-of-type {
      span {
        background: linear-gradient(90deg, #f9d423 0%, #ff4e50 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &:nth-of-type(2) {
      span {
        background: linear-gradient(90deg, #e6b980 0%, #eacda3 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &:last-of-type {
      span {
        background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
