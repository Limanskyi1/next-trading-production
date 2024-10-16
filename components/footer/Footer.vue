<script setup>
import { footerData } from "./footerData";
import { useCompanyConfig } from "~/composables/useCompanyConfig";
const { company } = useCompanyConfig();
const { locale } = useI18n();
</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div class="footer__contacts">
        <h2>{{ footerData.contacts.title[locale] }}</h2>
        <div class="footer__links">
          <div class="footer__link">
            <div class="footer__link-icon">
              <img src="/img/footer/location.svg" alt="location icon" />
            </div>
            <a href="">{{ company.address }}</a>
          </div>
          <div class="footer__link">
            <div class="footer__link-icon">
              <img src="/img/footer/phone.svg" alt="phone icon" />
            </div>
            <a :href="`tel:${company.phone1}`">{{ company.phone1 }}</a>
          </div>
          <div class="footer__link">
            <div class="footer__link-icon">
              <img src="/img/footer/mail.svg" alt="mail icon" />
            </div>
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>
          </div>
        </div>
        <span>2024 © {{ company.companyName }}</span>
      </div>
      <div class="footer__risks">
        <h2>{{ footerData.risks.title[locale] }}</h2>
        <p v-for="text in footerData.risks.texts[locale]" :key="text">{{ text }}</p>
        <div class="footer__partners">
          <img src="/img/footer/footer-partner-1.png" alt="partner icon"/>
          <img src="/img/footer/footer-partner-2.png" alt="partner icon"/>
          <img src="/img/footer/footer-partner-3.png" alt="partner icon"/>
          <img src="/img/footer/footer-partner-4.png" alt="partner icon"/>
          <img src="/img/footer/footer-partner-5.png" alt="partner icon"/>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: $space-60 0;
  background: $c-black-gray;
  .wrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px){
      flex-direction: column;
      gap: 30px;
    }
  }
  .footer__logo {
    align-self: flex-start;
    img {
      width: 110px;
      height: fit-content;
    }
  }
  .footer__contacts {
    width: 27%;
    @media (max-width: 992px){
      width: 100%;
    }
    h2 {
      margin-bottom: $space-40;
    }
  }
  .footer__links {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: $space-40;
  }
  .footer__link {
    display: flex;
    align-items: center;
    gap: 18px;
    a {
      transition: color 0.2s ease;
      &:hover {
        color: $c-text; 
      }
      &[href]:hover {
        color: $c-orange;
      }
    }
  }
  .footer__link-icon {
    width: 47px;
    height: 47px;
    padding: 12px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(45.35303497314453px);
    box-shadow: inset 0 2px 2px 0 rgba(255, 255, 255, 0.15),
      inset 0 0 34px 0 rgba(255, 255, 255, 0.05);
  }
  .footer__risks {
    width: 41.3%;
    @media (max-width: 1200px){
      width: 46%;
    }
    @media (max-width: 992px){
      width: 100%;
    }
    h2 {
      margin-bottom: $space-40;
    }
    p {
      margin-bottom: $space-50;
      &:not(:last-of-type) {
        margin-bottom: $space-20;
      }
    }
  }
  .footer__partners{
    display: flex;
    gap: $space-20;
    flex-wrap: wrap;
    img{
      max-width: 74px;
    }
  }
}
</style>
