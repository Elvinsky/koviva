<template>
  <div class="footer__wrapper">
    <footer class="footer">
      <img
        src="/logo.png"
        alt="Logo"
        class="footer__logo"
      />
      <nav class="footer__nav">
        <a
          @click.prevent="smoothScroll('about')"
          href="#about"
          class="p1"
        >
          {{ $t('nav.about') }}
        </a>
        <a
          @click.prevent="smoothScroll('advantages')"
          href="#advantages"
          class="p1"
        >
          {{ $t('nav.advantages') }}
        </a>
        <a
          @click.prevent="smoothScroll('services')"
          href="#services"
          class="p1"
        >
          {{ $t('nav.services') }}
        </a>
        <a
          @click.prevent="smoothScroll('faq')"
          href="#faq"
          class="p1"
        >
          {{ $t('nav.faq') }}
        </a>
        <a
          @click.prevent="smoothScroll('faq')"
          href="#faq"
          class="p1"
        >
          {{ $t('nav.certificates') }}
        </a>
        <a
          @click.prevent="smoothScroll('galery')"
          href="#galery"
          class="p1"
        >
          {{ $t('nav.gallery') }}
        </a>
        <a
          @click.prevent="smoothScroll('contacts')"
          href="#contacts"
          class="p1"
        >
          {{ $t('nav.contacts') }}
        </a>
      </nav>
    </footer>
    <div class="i18n-buttons">
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'en-US'"
        @click="changeLang('en-US')"
      >
        EN
      </BaseButton>
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'ru-RU'"
        @click="changeLang('ru-RU')"
      >
        RU
      </BaseButton>
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'pl-PL'"
        @click="changeLang('pl-PL')"
      >
        PL
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
  import BaseButton from '../components/common/BaseButton.vue';
  import { useLanguage } from '../composables/useLaguage';

  const { lang, changeLang } = useLanguage();

  const smoothScroll = targetId => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
</script>

<style scoped lang="scss">
  .footer__wrapper {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 0;
    justify-content: center;
    gap: var(--space-m);
    width: 99vw;
    height: 100%;
    padding: var(--space-m) calc(var(--space-default) + var(--space-safe));
    background-color: var(--color-gray-lighter);

    .footer {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      margin-top: var(--space-s);
      justify-content: space-between;

      &__logo {
        width: 100px;
        height: 36px;
      }

      &__nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-m);
        transition: all 0.2s ease-in-out;

        a:hover {
          color: var(--color-black-main);
        }

        a:focus {
          color: var(--color-blue-main);
        }
      }
    }

    .i18n-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      width: 100%;
      gap: var(--space-s);

      &__item {
        width: fit-content;
      }
    }
  }
</style>
