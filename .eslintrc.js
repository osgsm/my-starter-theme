module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  'env': {
    // For more environments, see here: http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,
    'es6': true,
    'jquery': true,
  },
  'rules': {
    // Insert custom rules here
    // For more rules, see here: http://eslint.org/docs/rules/
    'no-invalid-this': 'off',
    'no-var': 'warn',
    'require-jsdoc': 'off',
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
  'parserOptions': {
    'sourceType': 'module',
  }
}
