<template>
  <div class="header__wrapper">
    <header class="header">
      <img
        src="/logo.png"
        alt="Logo"
        class="header__logo"
      />
      <nav class="header__nav">
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.about') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.advantages') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.services') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.faq') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.certificates') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.gallery') }}
        </a>
        <a
          href="#"
          class="p1"
        >
          {{ $t('nav.contacts') }}
        </a>
      </nav>
    </header>
    <div class="i18n-buttons">
      <BaseButton
        class="i18n-buttons__item"
        :selected="lang === 'en-US'"
        @click="changeLang('en-US')"
      >
        EN
      </BaseButton>
      <BaseButton
        class="i18n-buttons__item"
        :selected="lang === 'ru-RU'"
        @click="changeLang('ru-RU')"
      >
        RU
      </BaseButton>
      <BaseButton
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
  import { i18n } from '@/main';
  import { useLanguage } from '../composables/useLaguage';

  const { lang, changeLang } = useLanguage();
</script>

<style scoped lang="scss">
  .header__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;

    .header {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      padding-bottom: var(--space-s);
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
      }
    }

    .i18n-buttons {
      border-top: 1px solid var(--color-gray-light);
      padding-top: var(--space-s);
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