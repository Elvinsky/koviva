/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    'vue/require-prop-types': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/no-ref-as-operand': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/v-bind-style': 'error',
    'vue/v-slot-style': ['error', 'shorthand'],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        ignorePublicMembers: true,
      },
    ],
    'vue/multi-word-component-names': 'off',

    //Eslint
    'no-console': ['error', { allow: ['warn', 'error'] }],
  }
}
