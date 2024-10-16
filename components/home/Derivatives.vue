<script setup>
defineProps({
  items: Array,
  title: String,
  btnText: String,
});
onMounted(() => {
  // ANIM INFO
  const infoOptions = {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".derivatives",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
    },
  }
  useGsap.from(".derivatives__info",infoOptions);
  // ANIM ITEMS
  const itemsOptions = {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger:0.3,
    scrollTrigger: {
      trigger: ".derivatives",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
    },
  }
  useGsap.from(".derivatives__item",itemsOptions);
  // ANIM IMAGE
  const imageOptions = {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".derivatives",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
    },
  }
  useGsap.from(".derivatives__image",imageOptions);
})
</script>

<template>
  <section class="derivatives">
    <img class="derivatives__image" src="/img/home/derivatives__image.webp" />
    <div class="wrapper">
      <div class="derivatives__info">
        <h2>{{ title }}</h2>
        <Button :text="btnText" className="button-orange" action="register" />
      </div>
      <div class="derivatives__items">
        <div v-for="(item, idx) in items" :key="idx" class="derivatives__item">
          <h4>{{ item.title }}</h4>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.derivatives {
  padding: $space-90 0;
  position: relative;
  .derivatives__image {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1260px;
  }
  .wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px){
      flex-direction: column;
      gap: 50px;
    }
  }
  .derivatives__info {
    display: flex;
    flex-direction: column;
    width: 29%;
    gap: $space-40;
    @media (max-width: 768px){
      width: 100%;
      align-items: center;
      text-align: center;
    }
    h4 {
      margin-bottom: $space-40;
    }
  }
  .derivatives__items {
    width: 46.3%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: $space-40;
    @media (max-width: 1200px){
      width: 55%;
    }
    @media (max-width: 992px){
      width: 60%;
    }
    @media (max-width: 768px){
      width: 100%;
    }
    @media (max-width: 480px){
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  .derivatives__item {
    height: fit-content;
    &:first-of-type {
      margin-top: 30%;
      margin-bottom: $space-110;
      @media (max-width: 480px){
        margin: 0;
      }
      h4::before {
        background: $c-brown;
      }
    }
    &:nth-of-type(2) {
      h4::before {
        background: $c-orange;
      }
    }
    &:nth-of-type(3) {
      h4::before {
        background: $c-green;
      }
    }
    &:last-of-type {
      margin-top: -20%;
      @media (max-width: 480px){
        margin: 0;
      }
      h4::before {
        background: $c-yellow;
      }
    }
    h4 {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
      &:before {
        content: "";
        width: 2px;
        height: 33px;
      }
    }
  }
}
</style>
