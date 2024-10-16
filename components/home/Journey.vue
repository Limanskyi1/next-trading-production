<script setup>
defineProps({
    title: String,
    btnText: String,
})
onMounted(() => {
  const triggerOptions = {
    trigger: ".journey",
    start: "-100 center",
    end: "+=30%",
    scrub: true,
  };
  const options = {
    opacity:0,
    y: 50,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".journey .wrapper", options);
})
</script>

<template>
  <section class="journey">
    <div class="wrapper">
      <h2>{{ title }}</h2>
      <Button :text="btnText" className="button-orange" action="register" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.journey {
    padding: $space-80 0 $space-160 0;
    background: url(../../assets//img/subheader/subheader__bg.webp) no-repeat top/cover;
    h2{
        margin: 0 auto;
        text-align: center;
        max-width: 768px;
    }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-40;
  }
}
</style>
