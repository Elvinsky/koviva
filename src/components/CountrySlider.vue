<template>
  <div class="country-slider">
    <Carousel
      :items-to-show="3"
      mouse-drag
    >
      <Slide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div class="country-slider__item">
          <component :is="slide.component" />
          <p class="p1">{{ $t(`countries.${slide.caption}`) }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
  import Switzerland from '../assets/icons/Countries/Switzerland.vue';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import Poland from '../assets/icons/Countries/Poland.vue';
  import Germany from '../assets/icons/Countries/Germany.vue';
  import Italy from '../assets/icons/Countries/Italy.vue';
  import Spain from '../assets/icons/Countries/Spain.vue';
  import Uzbekistan from '../assets/icons/Countries/Uzbekistan.vue';
  import Kazakhstan from '../assets/icons/Countries/Kazakhstan.vue';
  import Turkey from '../assets/icons/Countries/Turkey.vue';
  import Belarus from '../assets/icons/Countries/Belarus.vue';
  import CzechRepublic from '../assets/icons/Countries/CzechRepublic.vue';
  import France from '../assets/icons/Countries/France.vue';
  import Austria from '../assets/icons/Countries/Austria.vue';
  import Belgium from '../assets/icons/Countries/Belgium.vue';
  import Lithuania from '../assets/icons/Countries/Lithuania.vue';
  import Romania from '../assets/icons/Countries/Romania.vue';
  import Slovakia from '../assets/icons/Countries/Slovakia.vue';
  import Moldova from '../assets/icons/Countries/Moldova.vue';
  import Liechtenstein from '../assets/icons/Countries/Liechtenstein.vue';
  import Slovenia from '../assets/icons/Countries/Slovenia.vue';
  import Greece from '../assets/icons/Countries/Greece.vue';
  import { computed } from 'vue';

  const slides = computed(() => [
    {
      id: '1',
      caption: 'switzerland',
      component: Switzerland,
    },
    {
      id: '2',
      caption: 'poland',
      component: Poland,
    },
    {
      id: '3',
      caption: 'germany',
      component: Germany,
    },
    {
      id: '4',
      caption: 'italy',
      component: Italy,
    },
    {
      id: '5',
      caption: 'spain',
      component: Spain,
    },
    {
      id: '6',
      caption: 'uzbekistan',
      component: Uzbekistan,
    },
    {
      id: '7',
      caption: 'kazakhstan',
      component: Kazakhstan,
    },
    {
      id: '8',
      caption: 'turkey',
      component: Turkey,
    },
    {
      id: '9',
      caption: 'belarus',
      component: Belarus,
    },
    {
      id: '10',
      caption: 'czechRepublic',
      component: CzechRepublic,
    },
    {
      id: '11',
      caption: 'france',
      component: France,
    },
    {
      id: '12',
      caption: 'austria',
      component: Austria,
    },
    {
      id: '13',
      caption: 'belgium',
      component: Belgium,
    },
    {
      id: '14',
      caption: 'lithuania',
      component: Lithuania,
    },
    {
      id: '15',
      caption: 'romania',
      component: Romania,
    },
    {
      id: '16',
      caption: 'slovakia',
      component: Slovakia,
    },
    {
      id: '17',
      caption: 'moldova',
      component: Moldova,
    },
    {
      id: '18',
      caption: 'liechtenstein',
      component: Liechtenstein,
    },
    {
      id: '19',
      caption: 'slovenia',
      component: Slovenia,
    },
    {
      id: '18',
      caption: 'greece',
      component: Greece,
    },
  ]);
</script>

<style scoped lang="scss">
  .country-slider {
    padding-top: var(--space-m);
    display: flex;
    flex-direction: column;
    width: 100%;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-ml);
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
