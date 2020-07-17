module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    "jest": true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'  // TS config
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': 0,
    'no-use-before-define': 0,
    'lines-between-class-members': 0,
    'comma-dangle': 0,
    'no-plusplus': 0,
  },
};
