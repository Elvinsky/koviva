<template>
  <header class="header">
    <img
      src="/logo.png"
      alt="Logo"
      class="header__logo"
    />
    <nav class="header__nav">
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
  </header>
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
  .header {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: calc(var(--space-default) + 2 * var(--space-safe));
    padding-right: calc(var(--space-default) + 2 * var(--space-safe));
    position: sticky;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 10px;
    background-color: var(--color-gray-lighter);
    width: 99vw;
    top: 0;
    gap: 40px;

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

      a:active {
        color: var(--color-blue-main);
      }

      a {
        white-space: nowrap;
      }
    }
  }

  .i18n-buttons {
    border-top: 1px solid var(--color-gray-light);
    padding-top: var(--space-s);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    position: relative;
    z-index: 2;
    width: 100%;
    gap: var(--space-s);
    padding-left: var(--space-safe);
    padding-right: var(--space-safe);
    margin-top: -48px;

    &__item {
      width: fit-content;
    }
  }
</style>
