module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['prettier', 'flowtype', 'sort-class-members', 'bdd'],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': 0,
    'react/sort-comp': 0,
    'sort-class-members/sort-class-members': [
      2,
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          'constructor',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          '[arrow-function-properties]',
          '[methods]',
          'render',
        ],
      },
    ],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],

    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-weak-types': 1,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/semi': 2,

    'bdd/focus': 2,
    'bdd/exclude': 2,

    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
