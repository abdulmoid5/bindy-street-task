module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'react',
    'react-native',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'unicorn',
  ],
  rules: {
    'no-unused-vars': 'error',
    'react-native/no-unused-styles': 0,
  },
};
