<template>
  <div class="contactus">
    <div class="contactus__header">
      <h2>{{ $t('contactus.header') }}</h2>
    </div>
    <div class="contactus__content">
      <div class="contactus__content__text">
        <h3>
          {{ $t('contactus.subheader') }}
        </h3>
        <p class="p2">
          {{ $t('contactus.content') }}
        </p>
      </div>
      <form
        @submit.prevent
        class="contactus__content__form"
      >
        <input
          class="contactus__content__form__input"
          type="text"
          name="name"
          :placeholder="i18n.global.t('contactus.name')"
        />
        <input
          class="contactus__content__form__input"
          type="text"
          name="surname"
          :placeholder="i18n.global.t('contactus.surname')"
        />
        <input
          class="contactus__content__form__input"
          type="tel"
          name="tel"
          :placeholder="i18n.global.t('contactus.tel')"
        />
        <input
          class="contactus__content__form__input"
          type="email"
          name="email"
          :placeholder="i18n.global.t('contactus.email')"
        />
        <input
          class="contactus__content__form__input--msg"
          type="text"
          name="msg"
          :placeholder="i18n.global.t('contactus.msg')"
        />
        <BaseButton class="contactus__content__form__submit">
          {{ $t('contactus.submit') }}
        </BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { i18n } from '@/main';
  import BaseButton from './common/BaseButton.vue';

  // Your script code here
</script>

<style scoped lang="scss">
  .contactus {
    padding-top: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-l);
    width: 100%;

    &__header {
      padding-left: var(--space-ml);
      padding-bottom: var(--space-s);
      display: flex;
      align-items: start;
      justify-content: start;
      border-bottom: 1px solid var(--color-gray-light);
      width: 100%;

      @include w-max($sm) {
        padding-left: var(--space-xs);
        padding-bottom: var(--space-s);
        color: var(--color-black-main);
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      align-items: start;
      padding-left: var(--space-ml);
      justify-content: start;
      gap: var(--space-2xl);

      @include w-max($sm) {
        flex-direction: column;
        gap: 48px;
        padding-left: var(--space-xs);
      }

      &__text {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: var(--space-sm);
        max-width: 420px;

        @include w-max($lg) {
          max-width: 200px;
        }
        @include w-max($sm) {
          max-width: 100%;
        }
      }

      &__form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        width: 100%;
        gap: var(--space-m);

        @include w-max($lg) {
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
          grid-template-columns: 1fr;
        }

        &__input--msg {
          grid-column-start: 1;
          grid-column-end: 3;

          @include w-max($lg) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }

        &__submit {
          grid-column-start: 1;
          grid-column-end: 3;

          @include w-max($lg) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }
      }
    }
  }

  p {
    line-height: 145%;
  }

  input {
    background-color: transparent;
    padding: var(--space-s);
    font-size: var(--font-size-p1);
    color: var(--color-black-main);
    border-bottom: 1px solid var(--color-gray-main);
    width: 100%;

    &:focus {
      color: var(--color-blue-main);
      border-bottom: 1px solid var(--color-blue-main);
    }
  }
</style>
