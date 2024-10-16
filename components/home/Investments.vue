<script setup>
defineProps({
  title: String,
  desc: String,
  list: Array,
});
onMounted(() => {
  const triggerOptions = {
    trigger: ".investments",
    start: "-100 center",
    end: "+=30%",
    scrub: true,
  };
  // ANIM IMAGE
  const imageOptions = {
    opacity: 0,
    duration: 1,
    rotate: 30,
    scale: 0.7,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".investments__image", imageOptions);
  // ANIM INFO
  const infoOptions = {
    opacity: 0,
    duration: 1,
    x: 200,
    scrollTrigger: triggerOptions,
  };
  useGsap.from(".investments__info", infoOptions);
});
</script>

<template>
  <section class="investments">
    <div class="blur"></div>
    <div class="wrapper">
      <div class="investments__image">
        <img
          src="/img/home/investments__image.webp"
          alt="investments image"
        />
      </div>
      <div class="investments__info">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
        <ul>
          <li v-for="listItem in list" :key="listItem">
            <img src="/img/home/triangle.svg" alt="triangle icon" />
            <span>{{ listItem }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.investments {
  padding: $space-100 0;
  position: relative;
  overflow: unset;
  .blur {
    position: absolute;
    top: -30%;
    left: -8%;
    max-width: 341px;
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 100%;
    background: rgba(247, 158, 27, 0.36);
    filter: blur(160px);
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
  .investments__image {
    max-width: 392px;
  }
  .investments__info {
    max-width: 591px;
    @media (max-width: 992px) {
      max-width: 80%;
    }
    @media (max-width: 580px) {
      max-width: 100%;
    }
    h2 {
      margin-bottom: $space-30;
      @media (max-width: 992px) {
        text-align: center;
      }
    }
    & > p {
      margin-bottom: $space-35;
      @media (max-width: 992px) {
        text-align: center;
      }
    }
    ul {
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        @media (max-width: 992px) {
          justify-content: center;
        }
        @media (max-width: 540px) {
          justify-content: flex-start;
        }
        &:not(:last-of-type) {
          margin-bottom: 5px;
        }
        img {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>
