import tseslint from 'typescript-eslint'

// Use this for TypeScript projects
// If using both TypeScript + React:
// make sure you load `sanity/react` _before_ `sanity/typescript`

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    rules: {
      // --- causing parse errors with d.ts files
      // --- see https://github.com/typescript-eslint/typescript-eslint/issues/420
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      // ---

      // set to warn below in old "overrides" section
      // '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      // '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',

      // does not understand typescript types/interfaces defined late
      'no-use-before-define': 'off',

      // prevents function overloading in typescript, so disable base rule
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],

      // overrides:
      // Enable for TS files, but allow TSX (eg react components)
      '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      // These are better handled by TypeScript
      'no-undef': 'off',
      'no-undef-init': 'off',
    }
  }
)
