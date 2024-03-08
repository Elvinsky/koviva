<template>
  <div class="header-text">
    <h1>{{ $t('general.mainHeader') }}</h1>
    <BaseContactButton />
    <img
      src="/tanker_truck.png"
      alt="koviva-truck"
    />
  </div>
</template>

<script setup>
  import GreaterThenIcon from '@/assets/icons/Utility/GreaterThenIcon.vue';
  import BaseButton from './common/BaseButton.vue';
  import BaseContactButton from './common/BaseContactButton.vue';
</script>

<style scoped lang="scss">
  .header-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-sm);
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 1055px;
      background-color: var(--color-gray-lighter);

      @include w-max($sm) {
        height: 420px;
      }
    }

    h1 {
      max-width: 1030px;
      position: relative;
      z-index: 2;

      @include w-max($sm) {
        max-width: 375px;
        font-size: 32px;
        line-height: 150%;
      }
    }
    img {
      width: 100%;
      position: relative;
      z-index: 2;
    }
  }
</style>
