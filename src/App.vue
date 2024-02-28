<template>
  <div class="wrapper">
    <HeaderComponent />
    <div class="wrapper__header-text">
      <h1>{{ $t('general.mainHeader') }}</h1>
      <BaseButton
        class="wrapper__header-text__button"
        variant="p1"
      >
        <div class="wrapper__header-text__button__content">
          <p>{{ $t('buttons.textUs') }}</p>
          <GreaterThenIcon
            stroke-width="1.5px"
            fill="#1444B4"
          />
        </div>
      </BaseButton>
      <img
        src="/tanker_truck.png"
        alt="koviva-truck"
      />
    </div>
    <div class="wrapper__about">
      <div class="wrapper__about__header">
        <h2>{{ $t('about.header') }}</h2>
      </div>
      <div class="wrapper__about__content">
        <h3>
          {{ $t('about.contentCaptionFirstPart') }}
          <span>{{ $t('about.contentCaptionSecondPart') }}</span>
          {{ $t('about.contentCaptionThirdPart') }}
        </h3>
        <p class="p2">{{ $t('about.contentInfo') }}</p>
      </div>
    </div>
    <div class="wrapper__advantages">
      <div class="wrapper__advantages__header">
        <h2>{{ $t('advantages.advantagesHeaderMain') }}</h2>
      </div>
      <div class="wrapper__advantages__content">
        <h3>{{ $t('advantages.advantagesHeaderSecond') }}</h3>
        <div class="wrapper__advantages__content__circled-text">
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text1') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text1') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text1') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text1') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text1') }}</h2>
          </div>
        </div>
        <div class="wrapper__advantages__content__info">
          <div class="wrapper__advantages__content__info__line">
            <div class="wrapper__advantages__content__info__text">
              <h4>
                <span>{{ $t('inform.firstLine.header1PartOne') }}</span>
                {{ $t('inform.firstLine.header1PartTwo') }}
              </h4>
              <p class="p1">
                {{ $t('inform.firstLine.content1') }}
              </p>
            </div>
            <div class="wrapper__advantages__content__info__text">
              <h4>
                <span>{{ $t('inform.firstLine.header2PartOne') }}</span>
                {{ $t('inform.firstLine.header2PartTwo') }}
              </h4>
              <p class="p1">
                {{ $t('inform.firstLine.content2') }}
              </p>
            </div>
          </div>
          <div class="wrapper__advantages__content__info__line">
            <div class="wrapper__advantages__content__info__text">
              <h4>
                <span>{{ $t('inform.secondLine.header1PartOne') }}</span>
                {{ $t('inform.secondLine.header1PartTwo') }}
              </h4>
              <p class="p1">
                {{ $t('inform.secondLine.content1') }}
              </p>
            </div>
            <div class="wrapper__advantages__content__info__text">
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
    <div class="wrapper__country-slider">
      <Carousel :items-to-show="2">
        <Slide
          v-for="slide in 10"
          :key="slide"
        >
          <img
            src="/public/tanker_truck.png"
            width="200px"
            height="200px"
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

<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { onMounted } from 'vue';
  import { i18n } from './main';
  import BaseButton from './components/common/BaseButton.vue';
  import GreaterThenIcon from './assets/icons/Utility/GreaterThenIcon.vue';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  onMounted(() => {
    i18n.global.locale.value = localStorage.getItem('lang');
  });
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-safe-top) var(--space-default);
    width: 100%;
    background-color: var(--color-gray-lighter);
    gap: var(--space-l);

    &__header-text {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-sm);

      &__button {
        width: fit-content;

        &:hover {
          ::v-deep(path) {
            stroke: var(--color-white-main);
          }
        }

        &__content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--space-s);

          p {
            line-height: 120%;
          }
        }
      }
    }

    &__about {
      padding-top: var(--space-l);
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-ml);

      &__header {
        padding-left: var(--space-ml);
        padding-bottom: var(--space-xs);
        display: flex;
        align-items: start;
        justify-content: start;
        border-bottom: 1px solid var(--color-gray-light);
        width: 100%;
      }

      &__content {
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
    }

    &__advantages {
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
          justify-content: start;
          width: 100%;

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
    }

    &__country-slider {
      padding-top: var(--space-m);
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      width: 100%;
    }
  }
</style>
