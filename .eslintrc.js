module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'simple-import-sort', 'unused-imports'
  ],
  ignorePatterns: ['**/node_modules', '**/dist', '**/lib', '.*/**/*'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-void': ['error', { allowAsStatement: true }],
    'quote-props': ['error', 'consistent'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\w'], ['^(@?\\w)'], ['^', '^\\.'], ['^\\u0000']]
      }
    ],
    'simple-import-sort/exports': ['error'],
    'unused-imports/no-unused-imports': 'error',
    'import/newline-after-import': ['error', { count: 1 }]
  },
  overrides: [
    {
      files: ['*.ts'],
      env: {
        es2021: true,
        node: true
      },
      extends: ['standard-with-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        tsconfigRootDir: __dirname,
        project: [
          './common/tsconfig.json',
          './functions/tsconfig.json',
          './hosting/tsconfig.json'
        ]
      },
      plugins: [
        '@typescript-eslint'
      ],
      rules: {
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        'quote-props': ['error', 'consistent'],
        '@typescript-eslint/array-type': ['error', {
          default: 'generic',
          readonly: 'generic'
        }],
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', {
          allowNumber: true,
          allowNullish: true
        }]
      }
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
      ]
    }
  ]
}
