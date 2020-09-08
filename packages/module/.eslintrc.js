module.exports = {
  settings: {
    react: {
      version: 'detect',
      typescript: '4.0.2'
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'google',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-useless-escape': 0,
    'no-undef': 0,
    'no-extra-boolean-cast': 0,
    'prettier/prettier': 'error',
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
};
