<template>
  <div class="galery">
    <div class="galery__header">
      <h2>{{ $t('galery.header') }}</h2>
    </div>
    <div class="galery__slider">
      <Carousel
        :items-to-show="2"
        mouse-drag
      >
        <Slide
          v-for="slide in slides"
          :key="slide.id"
        >
          <img
            :src="slide.img"
            :alt="slide.alt"
          />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  const slides = [
    {
      id: '1',
      img: '/diploma.png',
      alt: 'galety-item-1',
    },
    {
      id: '2',
      img: '/Photo_1.png',
      alt: 'galety-item-2',
    },
    {
      id: '3',
      img: '/Photo_2.png',
      alt: 'galety-item-3',
    },
    {
      id: '3',
      img: '/Photo_3.png',
      alt: 'galety-item-3',
    },
    {
      id: '4',
      img: '/Photo_4.png',
      alt: 'galety-item-4',
    },
    {
      id: '5',
      img: '/Photo_5.png',
      alt: 'galety-item-5',
    },
  ];
</script>

<style scoped lang="scss">
  .galery {
    padding-top: var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-l);
    width: 100%;

    &__header {
      padding-left: var(--space-ml);
      padding-bottom: var(--space-xs);
      display: flex;
      align-items: start;
      justify-content: start;
      border-bottom: 1px solid var(--color-gray-light);
      width: 100%;
    }

    &__slider {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  .carousel {
    width: 100% !important;
    overflow: hidden !important;
  }

  .carousel__slide {
    width: 100%;
  }
</style>
