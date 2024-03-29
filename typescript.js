// Use this for TypeScript projects
// If using both TypeScript + React:
// make sure you load `sanity/react` _before_  `sanity/typescript`
module.exports = {
  extends: [
    './index',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // --- causing parse errors with d.ts files
    // --- see https://github.com/typescript-eslint/typescript-eslint/issues/420
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // ---

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // does not understand typescript types/interfaces defined late
    'no-use-before-define': 'off',

    // prevents function overloading in typescript, so disable base rule
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Enable for TS files, but allow TSX (eg react components)
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
        // These are better handled by TypeScript
        'no-undef': 'off',
        'no-undef-init': 'off',
      },
    },
  ],
}
