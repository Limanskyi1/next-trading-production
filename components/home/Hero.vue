<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  btnText: String,
});
onMounted(() => {
  // ANIM INFO
  const infoOptions = {
    clipPath: "inset(100% 100% 100% 100%)",
    duration:1.5,
  }
  useGsap.from(".hero__info",infoOptions);
  // ANIM SECTION BG
  const bgOptions = {
    backgroundSize: "140%",
    duration:2,
  }
  useGsap.from(".hero",bgOptions);
})
</script>

<template>
  <section class="hero">
    <div class="wrapper">
      <div class="hero__info">
        <span class="hero__subtitle">
          <img src="/img/home/hero__line.svg" alt="line icon" />
          {{ subtitle }}
        </span>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <Button :text="btnText" className="button-orange" action="register" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: $space-100 0 $space-160 0;
  min-height: 100vh;
  background: url("/img/home/hero__bg.webp") no-repeat center/100%;
  display: flex;
  align-items: center;
  @media (max-width: 480px){
    margin-top: var(--header-height);
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .hero__info {
    max-width: 873px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    span {
      font-family: $f-family-1;
      font-size: 16px;
      text-transform: uppercase;
      color: #827f79;
    }
    h1 {
      margin-bottom: $space-25;
    }
    p {
      padding: 0 $space-110;
      margin-bottom: $space-40;
      @media (max-width: 480px) {
        padding: 0;
      }
    }
  }
  .hero__subtitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    margin-bottom: $space-50;
    img {
      width: 7px;
      object-fit: contain;
    }
  }
}
</style>
