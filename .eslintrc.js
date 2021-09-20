module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended', 'react-app'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
