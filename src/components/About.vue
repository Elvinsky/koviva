<template>
  <div class="about">
    <div class="about__header">
      <h2>{{ $t('about.header') }}</h2>
    </div>
    <div class="about__content">
      <h3>
        {{ $t('about.contentCaptionFirstPart') }}
        <span>{{ $t('about.contentCaptionSecondPart') }}</span>
        {{ $t('about.contentCaptionThirdPart') }}
      </h3>
      <p class="p2">{{ $t('about.contentInfo') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Your script code here
</script>

<style scoped lang="scss">
  .about {
    padding-top: var(--space-l);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-ml);

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

    &__content {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
      gap: var(--space-l);
      padding-left: var(--space-ml);
      width: 100%;

      p {
        line-height: 145%;
        max-width: 580px;
      }

      h3 {
        span {
          color: var(--color-blue-main);
        }
      }

      @include w-max($sm) {
        flex-direction: column;
        gap: 24px;
        padding-left: var(--space-xs);

        h3 {
          font-size: 24px;
          line-height: 130%;
          span {
            color: var(--color-blue-main);
          }
        }

        p {
          line-height: 145%;
          max-width: 370px;
          font-size: 18px;
        }
      }
    }
  }
</style>
