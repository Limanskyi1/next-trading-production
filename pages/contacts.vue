<script setup>
import ContactItem from "~/components/contacts/ContactItem.vue";
import Form from "~/components/contacts/Form.vue";
import { useCompanyConfig } from "~/composables/useCompanyConfig";
import { useTranslations } from "~/composables/useTranslations";
const { company } = useCompanyConfig();
const { data, isDataReady } = useTranslations();
</script>

<template>
  <div v-if="isDataReady">
    <DynamicHead
      :title="data.head.title"
      :description="data.head.description"
    />
    <Subheader title="Contact us" style="margin-top: var(--header-height);"/>
    <section class="contacts">
      <div class="wrapper">
        <div class="contacts__left">
          <h2>{{ data.contact }}</h2>
          <Form :formData="data.form" />
        </div>
        <div class="contacts__right">
          <h2>Get in Touch</h2>
          <div class="social">
            <a>
              <img src="/img/contacts/telegram.svg" alt="telegram icon" />
            </a>
            <a>
              <img src="/img/contacts/instagram.svg" alt="instagram icon" />
            </a>
            <a>
              <img src="/img/contacts/facebook.svg" alt="facebook icon" />
            </a>
            <a>
              <img src="/img/contacts/twitter.svg" alt="twitter icon" />
            </a>
          </div>
          <div class="contacts__items">
            <ContactItem
              title="Office Address"
              image="/img/contacts/location.svg"
              alt="location icon"
              :text="company.address"
            />
            <ContactItem
              title="Phone Number"
              image="/img/contacts/phone.svg"
              alt="phone icon"
              :text="company.phone1"
              :link="`tel:${company.phone1}`"
            />
            <ContactItem
              title="E-mail"
              image="/img/contacts/mail.svg"
              alt="mail icon"
              :text="company.email"
              :link="`mailto:${company.email}`"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  <Preloader v-else />
</template>

<style lang="scss" scoped>
.contacts {
  padding: $space-140 0;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: $space-240;
    @media (max-width: 768px) {
      grid-template-columns: 0.8fr;
      justify-content: center;
      gap: 30px;
    }
    @media (max-width: 414px) {
      grid-template-columns: 1fr;
    }
  }
  .contacts__left {
    @media (max-width: 768px) {
      order: 2;
    }
    h2 {
      margin-bottom: $space-40;
    }
  }

  .contacts__right {
    @media (max-width: 768px) {
      order: 1;
    }
    h2 {
      margin-bottom: $space-35;
    }
  }
  .social {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: $space-30;
    & > a {
      width: 50px;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      fill: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(45.35303497314453px);
      box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
        inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
      padding: 13px;
    }
  }

  .contacts__items {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
</style>
