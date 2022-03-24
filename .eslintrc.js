module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['prettier'],
  settings: {
    react: {
      version: '^16.12.0 || ^17.0.0',
    },
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
};
