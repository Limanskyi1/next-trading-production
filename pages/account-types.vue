<script setup>
import { useTranslations } from "~/composables/useTranslations";
const { data, isDataReady } = useTranslations();
</script>

<template>
  <div v-if="isDataReady">
    <DynamicHead
      :title="data.head.title"
      :description="data.head.description"
    />
    <Subheader :title="data.subheader" style="margin-top: var(--header-height);"/>
    <section class="types">
      <img class="grad grad-1" src="/img/account/grad.png" />
      <img class="grad grad-2" src="/img/account/grad.png" />
      <div class="wrapper">
        <div v-for="(account, idx) in data.accounts" :key="idx" class="item">
          <div class="item__body">
            <h5 class="item__name">{{ account.name }}</h5>
            <span class="item__price">{{ account.price }}</span>
            <p
              v-for="(option, key, idx) in account.options"
              :key="idx"
              :class="option.active ? 'active' : ''"
            >
              {{ option.value }}
            </p>
          </div>
          <Button
            :text="account.btn_text"
            className="button-orange"
            action="register"
          />
        </div>
      </div>
    </section>
  </div>
  <Preloader v-else />
</template>

<style lang="scss" scoped>
.types {
  padding: $space-150 0;
  position: relative;
  .grad {
    position: absolute;
    width: 120px;
    height: 120px;
    &-1 {
      top: 9%;
      left: 3%;
    }
    &-2 {
      bottom: 24%;
      right: 3%;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 0.4fr);
      justify-content: center;
    }
    @media (max-width: 768px) {
      grid-template-columns: 0.5fr;
    }
    @media (max-width: 576px) {
      grid-template-columns: 0.8fr;
    }
    @media (max-width: 390px) {
      grid-template-columns: 1fr;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item__body {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      backdrop-filter: blur(72.72222137451172px);
      box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
        inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.03);
      border-radius: 36px;
      padding: $space-45;
      margin-bottom: $space-40;
      p {
        &:not(.active) {
          color: #7f7f7f;
        }
        &:not(:last-of-type) {
          margin-bottom: $space-25;
        }
      }
    }
    .item__name {
      margin-bottom: $space-20;
    }
    .item__price {
      font-family: $f-family-1;
      font-weight: 500;
      font-size: clamp(20px, px_to_vw(36), 36px);
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-align: right;
      background: linear-gradient(90deg, #f9d423 0%, #ff4e50 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: $space-30;
    }
  }
}
</style>
