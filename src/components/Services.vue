<template>
  <div class="services">
    <div class="services__header">
      <h2>{{ $t('services.header') }}</h2>
    </div>
    <div class="services__info">
      <h3>
        {{ $t('services.infoCaption') }}
      </h3>
      <p class="p2">{{ $t('services.infoContent') }}</p>
    </div>
    <div class="services__services">
      <ServiceItem
        v-for="service in services"
        :key="service.id"
      >
        <template #content>
          <h4>{{ $t(service.contentCode) }}</h4>
        </template>
        <template #icon> <component :is="service.icon"> </component></template>
      </ServiceItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ChemistryIcon from '@/assets/icons/services/ChemistryIcon.vue';
  import DangerIcon from '@/assets/icons/services/DangerIcon.vue';
  import GearIcon from '@/assets/icons/services/GearIcon.vue';
  import LogisticsIcon from '@/assets/icons/services/LogisticsIcon.vue';
  import SemiTrailerIcon from '@/assets/icons/services/SemiTrailerIcon.vue';
  import VeterinaryIcon from '@/assets/icons/services/VeterinaryIcon.vue';
  import WaterDropIcon from '@/assets/icons/services/WaterDropIcon.vue';
  import { computed } from 'vue';
  import ServiceItem from './ServiceItem.vue';

  const services = computed(() => [
    {
      id: '1',
      contentCode: 'services.service1',
      icon: DangerIcon,
    },
    {
      id: '2',
      contentCode: 'services.service2',
      icon: ChemistryIcon,
    },
    {
      id: '3',
      contentCode: 'services.service3',
      icon: WaterDropIcon,
    },
    {
      id: '4',
      contentCode: 'services.service4',
      icon: VeterinaryIcon,
    },
    {
      id: '5',
      contentCode: 'services.service5',
      icon: SemiTrailerIcon,
    },
    {
      id: '6',
      contentCode: 'services.service6',
      icon: LogisticsIcon,
    },
    {
      id: '7',
      contentCode: 'services.service7',
      icon: GearIcon,
    },
  ]);
</script>

<style scoped lang="scss">
  .services {
    padding-top: 98px;
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

    @include w-max($sm) {
      padding-top: 24px;
    }

    &__info {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
      gap: var(--space-xl);
      padding-left: var(--space-ml);
      width: 100%;

      p {
        line-height: 145%;
        max-width: 480px;
        color: var(--color-gray-main);

        @include w-max($lg) {
          max-width: 300px;
        }
      }

      h3 {
        width: 40%;
        @include w-max($lg) {
          width: 400px;
        }
      }

      @include w-max($sm) {
        padding-left: var(--space-xs);

        gap: var(--space-sm);
        flex-direction: column;
        gap: 32px;

        h3 {
          font-size: 24px;
          line-height: 130%;
          color: var(--color-black-main);
          width: 280px;
        }

        p {
          font-size: 18px;
          line-height: 145%;
          color: var(--color-gray-main);
        }
      }
    }

    &__services {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: var(--space-s);

      h4 {
        line-height: 130%;
      }

      @include w-max($lg) {
        grid-template-columns: 1fr;

        h4 {
          font-size: 18px;
          color: var(--color-black-main);
          max-width: 200px;
        }
      }

      @include w-max($lg) {
        h4 {
          font-size: 18px;
          color: var(--color-black-main);
          max-width: 200px;
        }
      }
    }
  }
</style>
