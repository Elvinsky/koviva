<template>
  <div
    class="button"
    :class="{ 'button--selected': selected }"
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
    @include button-i18n();

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
