module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['uni-test-case/**', 'h5/**'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react-native/no-inline-styles': 'off',
    'react/no-unstable-nested-components': 'off'
  },
};
