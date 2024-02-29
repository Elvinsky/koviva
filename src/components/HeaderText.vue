<template>
  <div class="header-text">
    <h1>{{ $t('general.mainHeader') }}</h1>
    <BaseButton
      class="header-text__button"
      variant="p1"
    >
      <div class="header-text__button__content">
        <p>{{ $t('buttons.textUs') }}</p>
        <GreaterThenIcon
          stroke-width="1.5px"
          fill="#1444B4"
        />
      </div>
    </BaseButton>
    <img
      src="/tanker_truck.png"
      alt="koviva-truck"
    />
  </div>
</template>

<script setup>
  import GreaterThenIcon from '@/assets/icons/Utility/GreaterThenIcon.vue';
  import BaseButton from './common/BaseButton.vue';
</script>

<style scoped lang="scss">
  .header-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-sm);
    width: 100%;

    img {
      width: 100%;
    }

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
</style>
