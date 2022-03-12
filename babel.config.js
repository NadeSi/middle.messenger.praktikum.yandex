module.exports = api => {
  // Cache configuration is a required option
  api.cache(false);

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        'targets': {
          //TODO https://github.com/babel/babel/issues/8752
          'browsers': ['last 2 Chrome versions'],
        },
        'modules': false,
      },
    ],
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': 2,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
