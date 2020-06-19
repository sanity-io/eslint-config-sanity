// Use this for react projects
module.exports = {
  env: {
    node: true,
    browser: true
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/boolean-prop-naming': 'off', // todo: enable this with list of native html boolean attributes allowed (and is/has/can/will/*-prefixes)
    'react/button-has-type': 'error',
    'react/display-name': ['error', {ignoreTranspilerName: false}],
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-prop-types': 'warn',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
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
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', {maximum: 6}],
    'react/jsx-no-bind': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-default-props': 'off',
    // "react/jsx-space-before-closing": ["error", "always"], //@@@ removed in favor of react/jsx-tag-spacing
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    // "react/no-comment-textnodes": "error",  //@@@ deprecated in favor of react/jsx-no-comment-textnodes
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'warn',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': ['error', {forbid: ['>', '}']}],
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    // "react/require-extension": "...", //@@@ deprecated in favor of the eslint-plugin-import extensions rule
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/require-default-props': 'warn',
    'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'

    // "react/wrap-multilines": "error" //@@@ deprecated in favor of react/jsx-wrap-multilines
  }
}
