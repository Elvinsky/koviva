<template>
  <div
    class="galery"
    id="galery"
  >
    <div class="galery__header">
      <h2>{{ $t('galery.header') }}</h2>
    </div>
  </div>
  <div class="galery__slider">
    <Carousel
      wrapAround
      :items-to-show="3"
      mouse-drag
      :autoplay="900"
      :transition="1000"
    >
      <Slide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div class="country-slider__item">
          <img
            :src="slide.img"
            :alt="slide.alt"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
  <div class="galery__slider--mobile">
    <Carousel
      wrapAround
      :items-to-show="2"
      mouse-drag
      :autoplay="900"
      :transition="1000"
    >
      <Slide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div class="country-slider__item">
          <img
            :src="slide.img"
            :alt="slide.alt"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
  import { Carousel, Slide } from 'vue3-carousel';

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
    padding-top: var(--space-l);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-l);
    width: 100%;

    &__header {
      padding-left: var(--space-ml);
      padding-bottom: var(--space-s);
      display: flex;
      align-items: start;
      justify-content: start;
      border-bottom: 1px solid var(--color-gray-light);
      width: 100%;

      @include w-max($sm) {
        padding-left: var(--space-xs);
        padding-bottom: var(--space-s);
        color: var(--color-black-main);
      }
    }

    &__slider {
      display: flex;
      align-items: start;
      justify-content: start;
      margin-top: -12px;

      @include w-max($sm) {
        display: none;
      }

      &:hover {
        cursor: grab;
      }

      &:active {
        cursor: grabbing;
      }

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-ml);
      }
      &--mobile {
        display: none;

        @include w-max($sm) {
          display: flex;
          margin-top: -24px;
        }
      }
    }
  }

  img {
    width: 33vw;

    @include w-max($sm) {
      width: 100%;
    }
  }
  .carousel {
    width: 99vw !important;
  }

  .carousel__slide {
    width: 100%;
    margin: 0px 20px;
  }
</style>
