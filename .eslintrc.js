module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base/legacy',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'better-styled-components', 'prettier'],
  rules: {
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'linebreak-style': [0, 'error', 'windows'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
