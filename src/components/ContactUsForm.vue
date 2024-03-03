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
      padding-bottom: var(--space-xs);
      display: flex;
      align-items: start;
      justify-content: start;
      border-bottom: 1px solid var(--color-gray-light);
      width: 100%;
    }

    &__content {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      gap: var(--space-2xl);

      &__text {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: var(--space-sm);
      }

      &__form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        width: 100%;
        gap: var(--space-m);

        &__input--msg {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        &__submit {
          grid-column-start: 1;
          grid-column-end: 3;
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
    color: var(--color-gray-main);
    border-bottom: 1px solid var(--color-gray-main);
    width: 100%;
  }
</style>
