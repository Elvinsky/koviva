<template>
  <div class="wrapper">
    <HeaderComponent />
    <HeaderText />
    <About />
    <Advantages />
    <CountrySlider />
    <Services />
    <FAQ />
    <Galery />
    <ContactUsForm />
    <Contacts />
    <FooterComponent />
  </div>
</template>

<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { onMounted } from 'vue';
  import { i18n } from './main';
  import About from './components/About.vue';
  import Advantages from './components/Advantages.vue';
  import Services from './components/Services.vue';
  import HeaderText from './components/HeaderText.vue';
  import CountrySlider from './components/CountrySlider.vue';
  import FAQ from './components/FAQ.vue';
  import Galery from './components/Galery.vue';
  import ContactUsForm from './components/ContactUsForm.vue';
  import Contacts from './components/Contacts.vue';
  import FooterComponent from './components/FooterComponent.vue';

  onMounted(() => {
    i18n.global.locale.value = localStorage.getItem('lang');
  });
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: var(--space-default);
    padding-right: var(--space-default);
    padding-top: var(--space-safe-top);
    padding-bottom: var(--space-m);
    width: 100%;
    background-color: var(--color-gray-lighter);
    gap: var(--space-l);

    @include w-max(1600px) {
      padding: var(--space-safe-top) 200px;
    }

    &__country-slider {
      padding-top: var(--space-m);
      display: flex;
      flex-direction: column;
      width: 100%;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-ml);
      }
    }
  }

  .carousel {
    width: 100% !important;
    overflow: hidden !important;
  }

  .carousel__slide {
    width: 100%;
  }
</style>
