<template>
  <div
    class="button"
    :class="{
      'button--selected': selected,
      'button--p1': variant === 'p1',
      'button--p2': variant === 'p2',
      'button--i18n': variant === 'i18n',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    variant: {
      type: String,
      default: 'p1',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style scoped lang="scss">
  @use '../../styles/basics/mixins';

  .button {
    &--i18n {
      @include button-i18n();
    }

    &--p1 {
      @include button-p1();
    }

    &--p2 {
      @include button-p2();
    }

    &--selected {
      border: 1px solid black;
      background-color: black;
      color: white;

      &:hover {
        border: 1px solid black;
        background-color: black;
        color: white;
      }
    }
  }
</style>
