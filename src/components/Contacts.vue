<template>
  <div class="contacts">
    <div class="contacts__header">
      <h2>{{ $t('contacts.header') }}</h2>
    </div>
    <div class="contacts__content">
      <div class="contacts__content__item">
        <h3>{{ $t('contacts.subheader') }}</h3>
      </div>
      <div class="contacts__content__item">
        <div class="contacts__content__item__text">
          <h4>{{ $t('contacts.tel') }}</h4>
          <a
            class="p1"
            href="tel:+48 514-604-122"
          >
            +48 514-604-122
          </a>
        </div>
        <PhoneIcon class="contacts__content__item__icon" />
      </div>
      <div class="contacts__content__item">
        <div class="contacts__content__item__text">
          <h4>{{ $t('contacts.adress') }}</h4>
          <a
            target="_blank"
            class="p1"
            href="https://maps.app.goo.gl/iR6P2ixNQxVYJUR78"
          >
            {{ $t('contacts.adressContent') }}
          </a>
        </div>
        <MapIcon class="contacts__content__item__icon" />
      </div>
      <div class="contacts__content__item">
        <div class="contacts__content__item__text">
          <h4>{{ $t('contacts.email') }}</h4>
          <a
            class="p1"
            href="mailto:koviva.sp@gmail.com"
          >
            koviva.sp@gmail.com
          </a>
        </div>
        <EmailIcon class="contacts__content__item__icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import EmailIcon from '@/assets/icons/services/EmailIcon.vue';
  import MapIcon from '@/assets/icons/services/MapIcon.vue';
  import PhoneIcon from '@/assets/icons/services/PhoneIcon.vue';

  // Your script code here
</script>

<style scoped lang="scss">
  .contacts {
    padding-top: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-l);
    width: 100%;

    @include w-max($lg) {
      padding-top: var(--space-l);
    }

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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      padding-right: var(--space-ml);
      padding-left: var(--space-ml);
      gap: var(--space-s);

      @include w-max($lg) {
        grid-template-columns: 1fr;
        padding-left: var(--space-xs);
        padding-right: var(--space-xs);
      }

      &__item:first-child {
        display: flex;
        align-items: start;
        justify-content: start;

        @include w-max($sm) {
          font-size: 24px;
          line-height: 130%;
        }
      }

      &__item:not(:first-child) {
        display: flex;
        flex-direction: row;
        padding: var(--space-ml);
        width: 100%;
        align-items: start;
        justify-content: space-between;
        background-color: var(--color-gray-lighter);
        border-radius: var(--space-s);
      }

      &__item {
        &__text {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          gap: var(--space-sm);

          @include w-max($lg) {
            max-width: 220px;
          }

          a,
          p {
            color: var(--color-blue-main);
            line-height: 145%;

            @include w-max($lg) {
              font-size: 18px;
            }
          }

          h4 {
            @include w-max($lg) {
              font-size: 20px;
            }
          }
        }

        &__icon {
          margin-top: -10px;
        }
      }
    }
  }
</style>
