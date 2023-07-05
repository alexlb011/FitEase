module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-shadow': 0,
    'import/no-absolute-path': 0,
    'react/state-in-constructor': 0,
    // 'react/no-unused-state': 0,
    'react/forbid-prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/tsx-filename-extension': 0,
    'new-cap': 0,
  },
};
