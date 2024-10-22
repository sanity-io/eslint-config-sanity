import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'

import eslintConfigSanity from './index'

// Use this for React projects
export default [
  eslintConfigSanity,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/boolean-prop-naming': 'off',
      'react/button-has-type': 'error',
      'react/default-props-match-prop-types': 'error',
      'react/destructuring-assignment': 'off',
      'react/forbid-elements': 'off',
      'react/forbid-foreign-prop-types': 'error',
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
      'react/forbid-prop-types': 'warn',
      'react/jsx-sort-props': 'off',
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-filename-extension': ['error', {extensions: ['.tsx', '.js']}],
      'react/jsx-boolean-value': 'error',
      'react/jsx-child-element-spacing': 'off', // missing docs atm
      'react/jsx-closing-bracket-location': 1,
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-curly-spacing': ['error', 'never'],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-handler-names': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', {maximum: 6}],
      'react/jsx-no-bind': 'warn',
      'react/jsx-no-literals': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-pascal-case': 'error',
      //@@@ removed in favor of react/jsx-tag-spacing
      // "react/jsx-space-before-closing": ["error", "always"],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
        },
      ],
      'react/jsx-wrap-multilines': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-did-mount-set-state': 'warn',
      'react/no-did-update-set-state': 'error',
      'react/no-multi-comp': 'off',
      'react/no-redundant-should-component-update': 'error',
      'react/no-set-state': 'off',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': 'off',
      //@@@ deprecated in favor of the eslint-plugin-import extensions rule
      // "react/require-extension": "...",
      'react/require-optimization': 'off',
      'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
      'react/prop-types': 'off',
      'react/sort-comp': 'off',
      'react/sort-prop-types': 'off',
      'react/self-closing-comp': 'error',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      // Handle hooks
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  }
]
