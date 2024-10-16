<script setup>
defineProps({
  title:String,
  texts: Array,
});
onMounted(() => {
  // ANIM IMAGE
  const imageOptions = {
    x: -150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".education",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
    },
  }
  useGsap.from(".education__image",imageOptions);
  // ANIM INFO
  const infoOptions = {
    x: 150,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".education",
      start: "-100 center",
      end: "+=40%",
      scrub: true,
    },
  }
  useGsap.from(".education__info",infoOptions);

})
</script>

<template>
  <section class="education">
    <img class="grad grad-1" src="/img/account/grad.png" />
    <div class="wrapper">
      <div class="education__image">
        <img src="/img/home/education__img.webp" alt="education image" />
      </div>
      <div class="education__info">
        <h2>{{ title }}</h2>
        <p v-for="text in texts" :key="text">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.education {
  padding: $space-100 0;
  position: relative;
  .grad {
    width: 130px;
    height: 130px;
    &-1 {
      position: absolute;
      right: 13%;
      bottom: 3%;
    }
  }
  .wrapper {
    border-radius: 36px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: unset;
    @media (max-width: 992px){
      grid-template-columns: 1fr;
    }
  }
  .education__image {
    img {
      border-radius: 44px 0 0 44px;
      overflow: hidden;
      max-height: 520px;
      object-fit: cover;
      @media (max-width: 992px){
        border-radius: 44px 44px 0 0;
        object-fit: none;
    }
    }
  }
  .education__info {
    border-radius: 0 44px 44px 0;
    padding: $space-50 $space-60;
    backdrop-filter: blur(72.72222137451172px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
    background: rgba(255, 255, 255, 0.03);
    @media (max-width: 992px){
      border-radius: 0 0 44px 44px;
      text-align: center;
      padding: 30px 15px;
    }
    h2 {
      margin-bottom: $space-30;
    }
    p {
      &:not(:last-of-type) {
        margin-bottom: clamp(12px, 1.6vw, 20px);
      }
    }
  }
}
</style>
