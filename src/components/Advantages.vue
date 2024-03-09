<template>
  <div class="advantages">
    <div class="advantages__header">
      <h2>{{ $t('advantages.advantagesHeaderMain') }}</h2>
    </div>
    <div class="advantages__content">
      <h3>{{ $t('advantages.advantagesHeaderSecond') }}</h3>
      <div class="advantages__content__circled-text">
        <div class="advantages__content__circled-text__item">
          <h4>{{ $t('advantages.circlesText.text1') }}</h4>
        </div>
        <div class="advantages__content__circled-text__item">
          <h4>{{ $t('advantages.circlesText.text2') }}</h4>
        </div>
        <div class="advantages__content__circled-text__item">
          <h4>{{ $t('advantages.circlesText.text3') }}</h4>
        </div>
        <div class="advantages__content__circled-text__item">
          <h4>{{ $t('advantages.circlesText.text4') }}</h4>
        </div>
        <div class="advantages__content__circled-text__item">
          <h4>{{ $t('advantages.circlesText.text5') }}</h4>
        </div>
      </div>
      <div class="advantages__content__info">
        <div class="advantages__content__info__line">
          <div class="advantages__content__info__text">
            <h4>
              <span>{{ $t('inform.firstLine.header1PartOne') }}</span>
              {{ $t('inform.firstLine.header1PartTwo') }}
            </h4>
            <p class="p1">
              {{ $t('inform.firstLine.content1') }}
            </p>
          </div>
          <div class="advantages__content__info__text">
            <h4>
              <span>{{ $t('inform.firstLine.header2PartOne') }}</span>
              {{ $t('inform.firstLine.header2PartTwo') }}
            </h4>
            <p class="p1">
              {{ $t('inform.firstLine.content2') }}
            </p>
          </div>
        </div>
        <div class="advantages__content__info__line">
          <div class="advantages__content__info__text">
            <h4>
              <span>{{ $t('inform.secondLine.header1PartOne') }}</span>
              {{ $t('inform.secondLine.header1PartTwo') }}
            </h4>
            <p class="p1">
              {{ $t('inform.secondLine.content1') }}
            </p>
          </div>
          <div class="advantages__content__info__text">
            <h4>
              <span>{{ $t('inform.secondLine.header2PartOne') }}</span>
              {{ $t('inform.secondLine.header2PartTwo') }}
            </h4>
            <p class="p1">
              {{ $t('inform.secondLine.content2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Your script code here
</script>

<style scoped lang="scss">
  .advantages {
    padding-top: var(--space-xl);
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
    }

    &__content {
      padding-left: var(--space-ml);
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-l);
      width: 100%;

      &__circled-text {
        display: flex;
        align-items: start;
        margin-left: -50px;
        justify-content: start;
        width: 120%;

        &__item {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-blue-main);
          border: 2px solid var(--color-blue-main);
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background-color: var(--color-white-main);
          @include w-max($lg) {
            width: 200px;
            height: 200px;
          }
          &:nth-child(2) {
            transform: translateX(calc(-1 * var(--space-m)));
          }
          &:nth-child(3) {
            transform: translateX(calc(-2 * var(--space-m)));
          }
          &:nth-child(4) {
            transform: translateX(calc(-3 * var(--space-m)));
          }
          &:nth-child(5) {
            transform: translateX(calc(-4 * var(--space-m)));
          }

          h4 {
            max-width: 200px;
            text-align: center;
          }
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 100%;
        gap: var(--space-ml);

        &__text {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: var(--space-sm);
          max-width: 450px;

          @include w-max($lg) {
            max-width: 300px;
          }

          span {
            color: var(--color-blue-main);
          }

          p {
            color: var(--color-gray-main);
            line-height: 145%;
          }
        }

        &__line {
          padding-top: var(--space-m);
          border-top: 1px solid var(--color-gray-light);
          display: flex;
          flex-direction: row;
          width: 100%;
          gap: var(--space-2xl);
        }
      }
    }

    @include w-max($sm) {
      padding-top: var(--space-m);
      gap: var(--space-m);

      &__header {
        padding-left: var(--space-xs);
        padding-bottom: var(--space-s);
        color: var(--color-black-main);
      }

      &__content {
        padding-left: var(--space-xs);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-l);
        width: 100%;

        h3 {
          max-width: 210px;
          font-size: 24px;
          line-height: 130%;
          align-self: flex-start;
        }

        &__circled-text {
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          &__item {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-blue-main);
            border: 2px solid var(--color-blue-main);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: var(--color-white-main);

            &:nth-child(2) {
              transform: translateX(0);
            }
            &:nth-child(3) {
              transform: translateX(0);
            }
            &:nth-child(4) {
              transform: translateX(0);
            }
            &:nth-child(5) {
              transform: translateX(0);
            }

            h4 {
              max-width: 200px;
              text-align: center;
              font-size: 18px;
              line-height: 145%;
            }
          }
        }

        &__info {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          width: 100%;
          gap: var(--space-ml);

          &__text {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            gap: var(--space-sm);
            max-width: 450px;

            span {
              color: var(--color-blue-main);
              line-height: 130%;
              font-size: 24px;
            }

            p {
              color: var(--color-gray-main);
              line-height: 145%;
              font-size: 18px;
            }

            h4 {
              color: var(--color-black-main);
              line-height: 130%;
              font-size: 24px;
            }
          }

          &__line {
            padding-top: var(--space-m);
            border-top: 1px solid var(--color-gray-light);
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: var(--space-m);
          }
        }
      }
    }
  }
</style>
