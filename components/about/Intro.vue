<script setup>
import Button from "../Button.vue";
defineProps({
  title: String,
  texts: Array,
  btnText: String,
});
onMounted(() => {
  // ANIM INFO
  const infoOptions = {
    clipPath: "inset(0 100% 0 0)",
    duration:2,
  }
  useGsap.from(".intro__info",infoOptions);
  // ANIM IMAGE
  const imageOptions = {
    opacity:0,
    scale:0,
    rotate:90,
    duration:1.5,
  }
  useGsap.from(".intro__image",imageOptions);
})
</script>

<template>
  <section class="intro">
    <div class="blur blur-1"></div>
    <div class="blur blur-2"></div>
    <div class="wrapper">
      <div class="intro__info">
        <h1>{{ title }}</h1>
        <p v-for="text in texts" :key="text">{{ text }}</p>
        <Button :text="btnText" className="button-orange" action="register" />
      </div>
      <div class="intro__image">
        <img src="/img/about/about__logo.png" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  margin-top: var(--header-height);
  padding: $space-100 0 0 0;
  background: url(../../assets/img/about/intro__bg.png) no-repeat center/cover;
  .blur {
    position: absolute;
    max-width: 282px;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: rgba(253, 108, 31, 0.3);
    filter: blur(160px);
    &-1 {
        left: -3%;
        top:16px;
    }
    &-2 {
        right: 0%;
        top:16px;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: column-reverse;
      gap: 30px;
    }
  }
  .intro__info {
    width: 46.1%;
    display: flex;
    flex-direction: column;
    @media (max-width: 992px){
      text-align: center;
      align-items: center;
      width: 60%;
    }
    @media (max-width: 768px){
      width: 80%;
    }
    @media (max-width: 576px){
      width: 100%;
    }
    h1 {
      margin-bottom: $space-40;
    }
    p {
      margin-bottom: $space-40;
      &:not(:last-of-type) {
        margin-bottom: $space-20;
      }
    }
  }
  .intro__image {
    width: 30.6%;
    @media (max-width: 992px){
      width: 40%;
    }
    @media (max-width: 576px){
      width: 60%;
    }
  }
}
</style>
