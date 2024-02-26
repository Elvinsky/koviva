<template>
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L7 6L1 11"
      :stroke="fill"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
  defineProps({
    fill: {
      type: String,
      default: 'black',
    },
    strokeWidth: {
      type: String,
      default: '1.5px',
    },
  });
</script>
