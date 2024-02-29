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
          {{ $t(service.contentCode) }}
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
        width: 50%;
      }

      h3 {
        width: 40%;

        span {
          color: var(--color-blue-main);
        }
      }
    }

    &__services {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: var(--space-s);
    }
  }
</style>
