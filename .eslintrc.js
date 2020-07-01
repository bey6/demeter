module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 11,
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
