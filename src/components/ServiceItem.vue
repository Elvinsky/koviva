<template>
  <div class="service__item">
    <div class="service__item__content">
      <slot name="content"></slot>
      <BaseContactButton />
    </div>
    <div class="service__item__icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseContactButton from './common/BaseContactButton.vue';
</script>

<style scoped lang="scss">
  .service__item {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    background-color: var(--color-gray-lighter);
    padding: var(--space-ml);
    gap: var(--space-xl);
    border-radius: var(--space-s);

    @include w-max($lg) {
      gap: 10px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-sm);
      width: 280px;
    }

    @include w-max($sm) {
      padding: var(--space-m);
      gap: 0;

      &__content {
        width: fit-content;
      }
    }
  }
</style>
