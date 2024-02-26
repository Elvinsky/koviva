<template>
  <div class="wrapper">
    <HeaderComponent />
  </div>
</template>

<script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-safe-top) var(--space-default);
  }
</style>
