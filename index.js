module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'accessor-pairs': 'warn',
    'array-bracket-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', {multiline: true}],
    'arrow-body-style': 'off',
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {allowSingleLine: false}],
    'callback-return': 'error',
    camelcase: 'error',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'warn',
    'comma-dangle': 'off',
    'comma-spacing': ['error', {after: true, before: false}],
    'comma-style': ['error', 'last'],
    complexity: ['warn', 30],
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'constructor-super': 'error',
    curly: 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {allowKeywords: true}],
    'eol-last': 'error',
    eqeqeq: 'off',
    'for-direction': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', {after: true, before: false}],
    'getter-return': ['error', {allowImplicit: true}],
    'global-require': 'off',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'off',
    'id-length': 'off', // catch undescriptive names in code review
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: ['error', 2, {SwitchCase: 1}],
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {afterColon: true, beforeColon: false}],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off', // turn on if supports methods only
    'max-depth': ['error', 4],
    'max-len': ['error', 100, 2],
    'max-lines': 'off',
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': ['warn', 50],
    'max-statements-per-line': ['error', {max: 1}],
    'multiline-ternary': 'off',
    'multiline-comment-style': 'off',
    'new-cap': ['error', {capIsNew: false}],
    'new-parens': 'off',
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 3}],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'off', // should be caught in code reviews on dangerous usage
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-console': ['error', {allow: ['warn', 'error']}],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'off', // turned off in favor of import/no-duplicates
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-implicit-globals': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'warn',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-requires': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'warn',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-restricted-imports': ['error', 'underscore', 'jquery'],
    'no-regex-spaces': 'error',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'warn',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'warn',
    'no-unneeded-ternary': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', {args: 'none', vars: 'all', ignoreRestSiblings: true}],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': ['warn', {location: 'anywhere', terms: ['todo', 'fixme', 'xxx']}],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'no-template-curly-in-string': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-spacing': ['error', 'never'],
    'object-curly-newline': 'off',
    'object-property-newline': 'off',
    'object-shorthand': ['error', 'methods'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off', // conflicts with prettier
    'padded-blocks': 'off',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': ['warn', {allowNamedFunctions: true}],
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', 'avoid-escape'],
    radix: 'error',
    'require-await': 'warn',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'never'],
    'semi-spacing': ['error', {after: true, before: false}],
    'semi-style': 'off',
    'sort-vars': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'off',
    strict: ['error', 'never'],
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'unicode-bom': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
    yoda: 'error',
  },
}
