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
  </div>
</template>

<script setup lang="ts">
  import FAQWrapper from './FAQWrapper.vue';

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
  }
</style>
