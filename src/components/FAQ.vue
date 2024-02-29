<template>
  <div class="faq">
    <div class="faq__header">
      <h2>{{ $t('faq.header') }}</h2>
    </div>
    <h3>Some info</h3>
    <div class="faq__content">
      <FAQWrapper
        v-for="faq in faqs"
        :key="faq.id"
      >
        <template #default>{{ $t(faq.header) }}</template>
        <template #content>{{ $t(faq.content) }}</template>
      </FAQWrapper>
    </div>
    <div class="faq__more">
      <h1>{{ $t('faq.moreQuestions') }}</h1>
      <div class="faq__more__content">
        <p class="p2">
          {{ $t('faq.moreQuestionsContent') }}
        </p>
        <BaseButton
          class="faq__more__content__button"
          variant="p1"
        >
          <div class="faq__more__content__button__content">
            <p>{{ $t('buttons.textUs') }}</p>
            <GreaterThenIcon
              stroke-width="1.5px"
              fill="#1444B4"
            />
          </div>
        </BaseButton>
      </div>
    </div>
    <div class="faq__content">
      <FAQWrapper
        v-for="faq in faqs"
        :key="faq.id"
      >
        <template #default>{{ $t(faq.header) }}</template>
        <template #content>{{ $t(faq.content) }}</template>
      </FAQWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import GreaterThenIcon from '@/assets/icons/Utility/GreaterThenIcon.vue';
  import FAQWrapper from './FAQWrapper.vue';
  import BaseButton from './common/BaseButton.vue';

  const faqs = [
    {
      id: '1',
      header: 'faq.question1',
      content: 'faq.answer1',
    },
    {
      id: '2',
      header: 'faq.question2',
      content: 'faq.answer2',
    },
    {
      id: '3',
      header: 'faq.question3',
      content: 'faq.answer3',
    },
    {
      id: '4',
      header: 'faq.question4',
      content: 'faq.answer4',
    },
    {
      id: '5',
      header: 'faq.question5',
      content: 'faq.answer5',
    },
  ];
</script>

<style scoped lang="scss">
  .faq {
    padding-top: var(--space-l);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-ml);
    width: 100%;

    h3 {
      padding-left: var(--space-ml);
    }

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
      width: 100%;
    }

    &__more {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: #efefef;
      border-radius: var(--space-s);
      padding: var(--space-ml);
      margin-top: var(--space-l);
      margin-bottom: var(--space-l);

      h1 {
        color: var(--color-blue-main);
        max-width: 270px;
      }

      &__content {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        gap: var(--space-m);
        max-width: 450px;

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
    }
  }
</style>
