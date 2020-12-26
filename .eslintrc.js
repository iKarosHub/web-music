module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 2,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true, // 使用单引号
        semi: false // 末尾使用分号
      }
    ]
  }
}
