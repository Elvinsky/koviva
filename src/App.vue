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
        class=""
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
            <h2>{{ $t('advantages.circlesText.text2') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text3') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text4') }}</h2>
          </div>
          <div class="wrapper__advantages__content__circled-text__item">
            <h2>{{ $t('advantages.circlesText.text5') }}</h2>
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
      <Carousel
        :items-to-show="3"
        mouse-drag
      >
        <Slide
          v-for="slide in slides"
          :key="slide.id"
        >
          <div class="wrapper__country-slider__item">
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
  </div>
</template>

<script setup>
  import 'vue3-carousel/dist/carousel.css';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { computed } from 'vue';
  import { onMounted } from 'vue';
  import { i18n } from './main';
  import Switzerland from './assets/icons/Countries/Switzerland.vue';
  import BaseButton from './components/common/BaseButton.vue';
  import GreaterThenIcon from './assets/icons/Utility/GreaterThenIcon.vue';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import Poland from './assets/icons/Countries/Poland.vue';
  import Germany from './assets/icons/Countries/Germany.vue';
  import Italy from './assets/icons/Countries/Italy.vue';
  import Spain from './assets/icons/Countries/Spain.vue';
  import Uzbekistan from './assets/icons/Countries/Uzbekistan.vue';
  import Kazakhstan from './assets/icons/Countries/Kazakhstan.vue';
  import Turkey from './assets/icons/Countries/Turkey.vue';
  import Belarus from './assets/icons/Countries/Belarus.vue';
  import CzechRepublic from './assets/icons/Countries/CzechRepublic.vue';
  import France from './assets/icons/Countries/France.vue';
  import Austria from './assets/icons/Countries/Austria.vue';
  import Belgium from './assets/icons/Countries/Belgium.vue';
  import Lithuania from './assets/icons/Countries/Lithuania.vue';
  import Romania from './assets/icons/Countries/Romania.vue';
  import Slovakia from './assets/icons/Countries/Slovakia.vue';
  import Moldova from './assets/icons/Countries/Moldova.vue';
  import Liechtenstein from './assets/icons/Countries/Liechtenstein.vue';
  import Slovenia from './assets/icons/Countries/Slovenia.vue';
  import Greece from './assets/icons/Countries/Greece.vue';

  onMounted(() => {
    i18n.global.locale.value = localStorage.getItem('lang');
  });

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
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--space-safe-top) var(--space-default);
    width: 100%;
    background-color: var(--color-gray-lighter);
    gap: var(--space-l);

    @include w-max(1600px) {
      padding: var(--space-safe-top) 200px;
    }

    &__header-text {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: var(--space-sm);
      width: 100%;

      img {
        width: 100%;
      }

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

            @include w-max(1600px) {
              width: 220px;
              height: 220px;
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

            h2 {
              max-width: 100px;
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
      width: 100%;

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-ml);
      }
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
