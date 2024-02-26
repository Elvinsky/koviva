<template>
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4.81132V6.78113H0V4.81132H12ZM7.11824 0V12H4.89379V0H7.11824Z"
      :fill="fill"
    />
  </svg>
</template>

<script setup>
  defineProps({
    fill: {
      type: String,
      default: 'black',
    },
  });
</script>
