<template>
  <div
    class="faq-wrapper"
    @click="closed = !closed"
    :class="{
      'faq-wrapper--border-bottom-thick': thicken === 'bottom',
      'faq-wrapper--border-top-thick': thicken === 'top',
      'faq-wrapper--border-both': border === 'both',
      'faq-wrapper--border-dark': !closed,
    }"
  >
    <div
      class="faq-wrapper__activator"
      @mouseover="changeFill('#1444B4')"
      @mouseout="changeFill('black')"
    >
      <p class="p2">
        <slot></slot>
      </p>
      <PlusIcon
        :fill="iconFill"
        v-if="closed"
      />
      <MinusIcon
        :fill="iconFill"
        v-else
      />
    </div>

    <Transition>
      <div
        v-if="!closed"
        class="faq-wrapper__content"
      >
        <p class="p2">
          <slot name="content"></slot>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
  import MinusIcon from '@/assets/icons/Utility/MinusIcon.vue';
  import PlusIcon from '@/assets/icons/Utility/PlusIcon.vue';
  import { ref } from 'vue';

  const closed = ref(true);

  defineProps({
    border: {
      type: String,
      default: 'both',
    },
  });

  const iconFill = ref('black');

  const changeFill = color => {
    iconFill.value = color;
  };
</script>

<style scoped lang="scss">
  .faq-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    transition: max-height 0.3s ease-out;
    border-collapse: collapse;

    &:hover {
      ::v-deep(path) {
        fill: var(--color-blue-main);
      }
      .faq-wrapper__activator {
        color: var(--color-blue-main);
      }
    }

    &--border-thicken-top {
      border-top: 2px solid var(--color-gray-light);
    }
    &--border-thicken-top.faq-wrapper--border-dark {
      border-top: 2px solid var(--color-black-main);
    }

    &--border-thicken-bottom {
      border-bottom: 2px solid var(--color-gray-light);
    }
    &--border-thicken-top.faq-wrapper--border-dark {
      border-bottom: 2px solid var(--color-black-main);
    }

    &:hover {
      cursor: pointer;
    }

    &__activator {
      padding: var(--space-m) var(--space-ml);
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      color: var(--color-gray-main);
      justify-content: space-between;
      transition: all 0.3s ease;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: start;
      color: var(--color-gray-main);
      justify-content: start;
      max-width: 1000px;

      p {
        line-height: 145%;
        text-align: start;
      }
    }

    &--border-both {
      border-top: 1px solid var(--color-gray-light);
      border-bottom: 1px solid var(--color-gray-light);
    }

    &--border-dark {
      border-top: 1px solid var(--color-black-main);
      border-bottom: 1px solid var(--color-black-main);

      .faq-wrapper__activator {
        color: var(--color-black-main);
      }
    }

    &:hover {
      border-top: 1px solid var(--color-black-main);
      border-bottom: 1px solid var(--color-black-main);
    }

    &__content {
      padding-left: var(--space-ml);
      padding-bottom: var(--space-ml);
      padding-right: var(--space-ml);
      padding-top: var(--space-m);
    }
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-80px);
  }

  .v-enter-to,
  .v-leave-from {
    opacity: 0.5;
    transform: translateY(0px);
  }

  $transition-duration: 0.2s;

  .v-enter-active,
  .v-leave-active {
    transition:
      opacity $transition-duration ease-in-out,
      transform $transition-duration ease-in-out;
  }
</style>
