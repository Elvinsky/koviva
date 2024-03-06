<template>
  <BaseButton
    class="button"
    variant="p1"
  >
    <div class="button__content">
      <p>{{ $t('buttons.textUs') }}</p>
      <GreaterThenIcon
        stroke-width="1.5px"
        fill="#1444B4"
      />
    </div>
  </BaseButton>
</template>

<script setup lang="ts">
  import GreaterThenIcon from '@/assets/icons/Utility/GreaterThenIcon.vue';
  import BaseButton from './BaseButton.vue';

  // Your script code here
</script>

<style scoped lang="scss">
  .button {
    width: fit-content;
    position: relative;
    z-index: 2;

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
      gap: 10px;

      p {
        line-height: 120%;
      }
    }
  }
</style>
