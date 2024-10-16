<script setup>
import { useTranslations } from "~/composables/useTranslations";

const { data, isDataReady } = useTranslations();

const activeTab = ref("legal-info");
const setActiveTab = (clickedItem) => (activeTab.value = clickedItem);
</script>

<template>
  <div v-if="isDataReady">
    <DynamicHead
      :title="data.head.title"
      :description="data.head.description"
    />
    <Subheader
      :title="data.head.title"
      style="margin-top: var(--header-height)"
    />
    <section class="legal">
      <div class="wrapper">
        <div class="legal__inner">
          <div class="legal__navs">
            <div
              v-for="(item, idx) in data.navs"
              :key="idx"
              class="legal__nav"
              :class="{ active: activeTab === item.value }"
            >
              <img src="/img/home/triangle.svg" alt="triangle icon" />
              <h4 @click="setActiveTab(item.value)">
                {{ item.title }}
              </h4>
            </div>
          </div>
          <div class="legal__contents">
            <LegalTabContent
              v-for="(item, idx) in data.content"
              :key="idx"
              :contentData="item.desc"
              :class="{ active: activeTab === item.value }"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <Preloader v-else />
</template>

<style lang="scss" scoped>
@mixin activeTabTitle {
  background: linear-gradient(138deg, #fd6b1e 0%, #d93908 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.legal {
  padding: $space-160 0;
  .legal__inner {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: $space-100;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    .legal__navs {
      border-radius: 36px;
      padding: $space-40;
      backdrop-filter: blur(72.72222137451172px);
      box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
        inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
      background: rgba(255, 255, 255, 0.03);
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: $space-30;
      @media (max-width: 992px) {
        padding: 24px;
        width: fit-content;
      }
      .legal__nav {
        display: flex;
        align-items: center;
        &.active {
          h4 {
            @include activeTabTitle;
          }
          img {
            visibility: visible;
            margin-right: 12px;
            opacity: 1;
          }
        }
        img {
          transition: 0.3s ease;
          visibility: hidden;
          width: 12px;
          flex-shrink: 0;
          opacity: 0;
        }
        h4 {
          font-size: clamp(15px, px_to_vw(18), 18px);
          text-transform: uppercase;
          color: $c-text;
          cursor: pointer;
          &:hover {
            @include activeTabTitle;
          }
        }
      }
    }

    .legal__contents {
      display: grid;
      .legal__content {
        grid-row: 1/2;
        grid-column: 1/2;

        opacity: 0;
        visibility: hidden;
        transition: $transition-main;
        height: 0;

        &.active {
          height: fit-content;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}
</style>
