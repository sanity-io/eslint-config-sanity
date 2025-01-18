import globals from 'globals'
import parser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.mts', '**/*.cts'], // Include both JavaScript and TypeScript file patterns
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: parser,
      globals: {
        ...globals.node,
      },
    },
  },
]
