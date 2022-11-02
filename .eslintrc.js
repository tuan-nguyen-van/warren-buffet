// const globalExcludeRegexp = '^(AppConfig|.+_Id)$';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'default',
    //     format: ['camelCase'],
    //     filter: {
    //       regex: globalExcludeRegexp,
    //       match: false,
    //     },
    //   },
    //   {
    //     selector: 'variable',
    //     format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    //   },
    //   {
    //     selector: 'parameter',
    //     format: ['camelCase'],
    //     leadingUnderscore: 'allow',
    //   },
    //   {
    //     selector: 'memberLike',
    //     modifiers: ['private'],
    //     format: ['camelCase'],
    //     leadingUnderscore: 'require',
    //   },
    //   {
    //     selector: 'typeLike',
    //     format: ['PascalCase'],
    //   },
    //   {
    //     selector: 'property',
    //     format: ['camelCase', 'snake_case', 'PascalCase'],
    //     filter: {
    //       regex: globalExcludeRegexp,
    //       match: false,
    //     },
    //   },
    //   {
    //     selector: 'enumMember',
    //     format: ['UPPER_CASE', 'camelCase'],
    //   },
    // ],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'no-useless-escape': 'off',
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/state-in-constructor': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
