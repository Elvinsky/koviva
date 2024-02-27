<template>
  <div class="wrapper">
    <HeaderComponent />
  </div>
</template>

<script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { onMounted } from 'vue';
  import { i18n } from './main';

  onMounted(() => {
    i18n.global.locale.value = localStorage.getItem('lang');
  });
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-safe-top) var(--space-default);
    width: 100%;
    background-color: var(--color-gray-lighter);
  }
</style>
