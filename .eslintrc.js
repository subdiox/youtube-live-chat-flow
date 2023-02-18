module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'prettier',
      ],
    },
  ],
}
