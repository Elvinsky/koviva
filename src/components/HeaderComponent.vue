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
      <BurgerIcon
        class="icon"
        @click="toggleBurger"
        v-if="!isMenuOpened"
      />
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

  <div
    class="burger-menu"
    v-if="isMenuOpened"
  >
    <CloseBurgerIcon
      class="icon"
      @click="toggleBurger"
      v-if="isMenuOpened"
    />
    <nav>
      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('about', true)"
          href="#about"
          class="p1"
        >
          {{ $t('nav.about') }}
        </a>
      </div>
      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('advantages', true)"
          href="#advantages"
          class="p1"
        >
          {{ $t('nav.advantages') }}
        </a>
      </div>
      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('services', true)"
          href="#services"
          class="p1"
        >
          {{ $t('nav.services') }}
        </a>
      </div>
      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('faq', true)"
          href="#faq"
          class="p1"
        >
          {{ $t('nav.faq') }}
        </a>
      </div>

      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('galery', true)"
          href="#galery"
          class="p1"
        >
          {{ $t('nav.gallery') }}
        </a>
      </div>
      <div class="nav__item">
        <a
          @click.prevent="smoothScroll('contacts', true)"
          href="#contacts"
          class="p1"
        >
          {{ $t('nav.contacts') }}
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import BurgerIcon from '@/assets/icons/Mobile/BurgerIcon.vue';
  import BaseButton from '../components/common/BaseButton.vue';
  import { useLanguage } from '../composables/useLaguage';
  import { ref } from 'vue';
  import CloseBurgerIcon from '@/assets/icons/Mobile/CloseBurgerIcon.vue';

  const { lang, changeLang } = useLanguage();

  const smoothScroll = (targetId, fromBurger) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    if (fromBurger) {
      toggleBurger();
    }
  };

  const isMenuOpened = ref(false);
  const toggleBurger = () => {
    isMenuOpened.value = !isMenuOpened.value;
    if (isMenuOpened.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    flex-direction: row;
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

    @include w-max($lg) {
      position: fixed;
      top: 0;
      background-color: var(--color-gray-lighter);
      width: 100%;
      justify-content: space-between;
      padding: 16px 32px;
    }

    @include w-max($sm) {
      position: fixed;
      top: 0;
      background-color: var(--color-gray-lighter);
      width: 100%;
      justify-content: space-between;
      padding: 16px 24px;
    }

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

        @include w-max($lg) {
          display: none;
        }
      }

      .icon {
        display: none;

        @include w-max($lg) {
          display: block;
          transition: all 0.3s ease;
        }
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

    @include w-max($lg) {
      margin-top: 36px;
      padding-right: 8px;
    }
  }

  .burger-menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    padding: 75px 16px;
    background-color: var(--color-white-main);

    .icon {
      position: fixed;
      top: 24px;
      right: 24px;
    }

    nav {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 20px;
      width: 100%;

      .nav__item {
        display: flex;
        align-items: start;
        justify-content: start;
        border-bottom: 1px solid var(--color-gray-light);
        width: 100%;
      }

      a {
        font-size: 24px;
        line-height: 130%;
        padding-bottom: 20px;
        color: var(--color-gray-main);
      }
    }
  }
</style>
