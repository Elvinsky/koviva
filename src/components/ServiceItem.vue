<template>
  <div class="service__item">
    <div class="service__item__content">
      <slot name="content"></slot>
      <BaseButton
        class="service__item__content__button"
        variant="p1"
      >
        <div class="service__item__content__button__content">
          <p>{{ $t('buttons.textUs') }}</p>
          <GreaterThenIcon
            stroke-width="1.5px"
            fill="#1444B4"
          />
        </div>
      </BaseButton>
    </div>
    <div class="service__item__icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GreaterThenIcon from '@/assets/icons/Utility/GreaterThenIcon.vue';
  import BaseButton from './common/BaseButton.vue';
</script>

<style scoped lang="scss">
  .service__item {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    background-color: #efefef;
    padding: var(--space-ml);
    gap: var(--space-xl);
    border-radius: var(--space-s);

    &__content {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-sm);

      &__button {
        width: fit-content;

        &:hover {
          ::v-deep(path) {
            stroke: var(--color-white-main);
          }
        }

        &__content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--space-s);

          p {
            line-height: 120%;
          }
        }
      }
    }
  }
</style>
