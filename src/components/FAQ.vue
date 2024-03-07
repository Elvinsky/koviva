<template>
  <div class="faq">
    <div class="faq__header">
      <h2>{{ $t('faq.header') }}</h2>
    </div>
    <h3>{{ $t('faq.subheader') }}</h3>
    <div class="faq__content">
      <FAQWrapper
        class="faq__content__item"
        v-for="(faq, idx) in faqs"
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
        <BaseContactButton />
      </div>
    </div>
    <!-- <div class="faq__content">
      <FAQWrapper
        class="faq__content__item"
        v-for="faq in faqs"
        :key="faq.id"
      >
        <template #default>{{ $t(faq.header) }}</template>
        <template #content>{{ $t(faq.content) }}</template>
      </FAQWrapper>
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import FAQWrapper from './FAQWrapper.vue';
  import BaseContactButton from './common/BaseContactButton.vue';

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
    padding-top: 98px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-m);
    width: 100%;

    h3 {
      padding-top: 12px;
      padding-left: var(--space-ml);
    }

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
      width: 100%;
    }

    &__more {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: var(--color-gray-lighter);
      border-radius: var(--space-s);
      padding: var(--space-ml);
      padding-right: 96px;
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
        gap: var(--space-sm);
        color: var(--color-gray-main);
        max-width: 533px;
        line-height: 145%;

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
