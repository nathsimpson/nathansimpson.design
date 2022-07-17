module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', '@emotion'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'standard/computed-property-even-spacing': 0,
    'no-template-curly-in-string': 0,
    camelcase: 0,
    'import/no-duplicates': 0,
    'react/jsx-no-target-blank': 0,
    // TypeScript will check this
    'no-undef': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-use-before-define': 'off'
  },
  env: {
    browser: true
  },
  overrides: [
    {
      files: ['*.test.js', '**/__tests__/**'],
      env: {
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      alias: [['@design-system', './design-system']]
    }
  }
};
