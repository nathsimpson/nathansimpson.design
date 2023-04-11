module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['prettier', '@typescript-eslint', 'react', '@emotion'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@emotion/pkg-renaming': 'error',
    'prettier/prettier': 'error',
    'react/jsx-fragments': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'standard/computed-property-even-spacing': 0,
    'no-template-curly-in-string': 0,
    // FIXME
    'react/no-unknown-property': 0,
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
  overrides: [{
    files: ['*.test.js', '**/__tests__/**'],
    env: {
      jest: true
    }
  }],
  settings: {
    react: {
      version: 'detect'
    }
  }
};