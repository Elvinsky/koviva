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
        <PhoneIcon />
      </div>
      <div class="contacts__content__item">
        <div class="contacts__content__item__text">
          <h4>{{ $t('contacts.adress') }}</h4>
          <p class="p1">{{ $t('contacts.adressContent') }}</p>
        </div>
        <MapIcon />
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
        <EmailIcon />
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
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: var(--space-s);

      &__item:first-child {
        display: flex;
        align-items: start;
        justify-content: start;
      }

      &__item:not(:first-child) {
        display: flex;
        flex-direction: row;
        padding: var(--space-ml);
        width: 100%;
        align-items: start;
        justify-content: space-between;
        background-color: #f3f3f3;
        border-radius: var(--space-s);
      }

      &__item {
        &__text {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          gap: var(--space-sm);

          a,
          p {
            color: var(--color-blue-main);
          }
        }
      }
    }
  }
</style>
