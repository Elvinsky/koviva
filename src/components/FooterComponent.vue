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
        <div class="footer__nav__i18n-buttons">
          <BaseButton
            variant="i18n"
            class="i18n-buttons__item"
            :selected="lang === 'en-US'"
            @click="changeI18Language('en')"
          >
            EN
          </BaseButton>
          <BaseButton
            variant="i18n"
            class="i18n-buttons__item"
            :selected="lang === 'ru-RU'"
            @click="changeI18Language('ru')"
          >
            RU
          </BaseButton>
          <BaseButton
            variant="i18n"
            class="i18n-buttons__item"
            :selected="lang === 'pl-PL'"
            @click="changeI18Language('pl')"
          >
            PL
          </BaseButton>
        </div>
      </nav>
    </footer>
    <div class="i18n-buttons">
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'en'"
        @click="changeI18Language('en')"
      >
        EN
      </BaseButton>
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'ru'"
        @click="changeI18Language('ru')"
      >
        RU
      </BaseButton>
      <BaseButton
        variant="i18n"
        class="i18n-buttons__item"
        :selected="lang === 'pl'"
        @click="changeI18Language('pl')"
      >
        PL
      </BaseButton>
    </div>
    <div class="icon">
      <FooterIcon />
      <a
        href="https://resolutedevs.com/"
        target="_blank"
      >
        &#169;2024 Resolute Devs
      </a>
    </div>
  </div>
</template>

<script setup>
  import FooterIcon from '@/assets/icons/FooterIcon.vue';
  import BaseButton from '../components/common/BaseButton.vue';
  import { changeI18Language, i18Instance } from '@/i18n';
  import { computed } from 'vue';

  const lang = computed(() => i18Instance.global.locale.value);

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

    @include w-max($lg) {
      margin-top: 0;
      padding: 10px 24px;
    }

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

        a {
          @include w-max($lg) {
            display: none;
          }
        }

        &__i18n-buttons {
          display: none;

          flex-direction: row;
          gap: 16px;
          align-items: center;
          justify-content: center;

          @include w-max($lg) {
            display: flex;
          }
        }

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

      @include w-max($lg) {
        display: none;
      }

      &__item {
        width: fit-content;
      }
    }

    .icon {
      display: flex;
      flex-direction: row;
      align-items: start;
      width: 100%;
      justify-content: start;
      gap: 32px;

      a {
        font-size: 18px;
        font-family: var(--font-roboto-regular);
        line-height: 80%;
        color: #454545;
      }

      @include w-max($sm) {
        justify-content: space-between;
      }
    }
  }
</style>
