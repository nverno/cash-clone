const typescriptEslint = require('@typescript-eslint/eslint-plugin');

/**
 * Disable typescript-eslint rules with type information.
 *
 * @see https://typescript-eslint.io/docs/linting/type-linting/
 */
const requiresTypeRulesOff = Object.fromEntries(
  Object.entries(typescriptEslint.rules)
    .filter(([name, rule]) => rule.meta.docs.requiresTypeChecking)
    .map(([name]) => [`@typescript-eslint/${name}`, 'off'])
);

/** @type {import('./types').ESLintConfig} */
module.exports = {
  root: true,
  extends: [
    'standard', 'standard-react', 'plugin:@typescript-eslint/recommended',
    'standard-with-typescript', 'prettier'
  ],
  
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  rules: {
    'no-unsafe-finally': 'off',
    'no-use-before-define': 'off',
    'prefer-promise-reject-errors': 'off',

    'react/jsx-handler-names': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        ...requiresTypeRulesOff,

        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/method-signature-style': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',

        'import/export': 'off',
      },
    },
  ],
};
